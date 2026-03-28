# Skill: Custom Hooks

> How to use and create hooks. Covers usehooks-ts, TanStack Query wrappers, and project-specific hooks.

## Principle: Use Packages, Don't Hand-Roll

Before writing a custom hook, check `usehooks-ts` (40+ hooks) or TanStack Query. Only write custom hooks for project-specific composition.

## Available Hooks (`@/hooks`)

### Data Fetching (TanStack Query)

```tsx
import { useApiQuery, useApiMutation } from "@/hooks";
```

See the `data-fetching` skill for patterns.

### Client-Side Utilities (usehooks-ts)

```tsx
import {
  useMediaQuery,
  useDebounce,
  useCopyToClipboard,
  useLocalStorage,
  useIsClient,
  useEventListener,
  useOnClickOutside,
  useInterval,
  useToggle,
} from "@/hooks";
```

| Hook                 | Use Case                                                      |
| -------------------- | ------------------------------------------------------------- |
| `useMediaQuery`      | Responsive breakpoints: `useMediaQuery("(min-width: 768px)")` |
| `useDebounce`        | Debounce value: `const [debounced] = useDebounce(query, 300)` |
| `useCopyToClipboard` | Clipboard with success state                                  |
| `useLocalStorage`    | Persist state across sessions                                 |
| `useIsClient`        | SSR-safe mounted check                                        |

## When to Write a Custom Hook

**Do write** when composing 2+ hooks into a reusable pattern (e.g., debounced search + query).
**Don't write** when `usehooks-ts` has it, or it's a one-off `useState`.

## Creating a Custom Hook

File: `src/hooks/use-{name}.ts`

```tsx
"use client";

import { useCallback, useState } from "react";
import { useDebounce } from "@/hooks";
import { useApiQuery } from "@/hooks/use-api-query";

/**
 * Debounced search — combines usehooks-ts debounce with TanStack Query.
 * @example
 * const { query, setQuery, results, isSearching } = useSearch<User>("/api/users/search");
 */
export function useSearch<T>(endpoint: string, delay = 300) {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, delay);

  const { data: results, isLoading: isSearching } = useApiQuery<T[]>(
    ["search", endpoint, debouncedQuery],
    endpoint,
    { params: { q: debouncedQuery } },
    { enabled: debouncedQuery.length >= 2 },
  );

  const clear = useCallback(() => setQuery(""), []);
  return { query, setQuery, debouncedQuery, results, isSearching, clear };
}
```

## Common Compositions

| Pattern           | Hooks Combined                    |
| ----------------- | --------------------------------- |
| Debounced search  | `useDebounce` + `useApiQuery`     |
| Responsive layout | `useMediaQuery` + component logic |
| Persisted filters | `useLocalStorage` + `useApiQuery` |
| Copy with toast   | `useCopyToClipboard` + `toast`    |

## File Organization

```
src/hooks/
├── index.ts              # Barrel: re-exports everything
├── use-api-query.ts      # Generic wrappers (stays small, never bloated)
├── use-search.ts         # Feature hook
└── use-users.ts          # Resource-specific query hook
```

**Rules:**

- One file per hook. Flat structure. No subdirectories until 20+ hooks.
- Never put hooks in `lib/`. Hooks go in `hooks/`.
- Barrel export in `index.ts`: project hooks under `// --- Project hooks ---`, usehooks-ts under `// --- From usehooks-ts ---`.
- All hooks return objects (not arrays) when returning 3+ values.
- JSDoc with `@example` on every export.
- Max 250 lines per hook file. Extract helpers into `lib/` if needed.
