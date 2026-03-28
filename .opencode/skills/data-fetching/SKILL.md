# Skill: Data Fetching

> How to fetch, cache, and mutate data. API client, TanStack Query, server actions.

## Sub-docs

- [query-patterns.md](./query-patterns.md) — useApiQuery + useApiMutation usage patterns
- [server-actions.md](./server-actions.md) — "use server" functions and when to use them
- [file-organization.md](./file-organization.md) — Where types, hooks, and mock data go as the app grows

## Architecture

```
src/lib/api.ts              → Typed fetch wrapper (no axios)
src/hooks/use-api-query.ts  → useApiQuery() + useApiMutation()
src/lib/actions.ts          → Server actions ("use server")
src/app/api/                → Next.js API routes
```

## Decision Tree

| Need                                     | Use                                                             |
| ---------------------------------------- | --------------------------------------------------------------- |
| Read data in a component                 | `useApiQuery` — see [query-patterns.md](./query-patterns.md)    |
| Write data from a form                   | `useApiMutation` — see [query-patterns.md](./query-patterns.md) |
| Form submission, no REST endpoint needed | Server action — see [server-actions.md](./server-actions.md)    |
| Backend endpoint                         | API route — see the `api` skill                                 |
| Server-side data in server component     | Direct `api()` call or `fetch()`                                |

## The API Client (`src/lib/api.ts`)

Thin typed wrapper around native `fetch`. No axios, no dependencies.

```tsx
import { api, ApiError } from "@/lib/api";

// GET
const users = await api<User[]>("/api/users");

// POST with JSON
const user = await api<User>("/api/users", { method: "POST", json: { name: "Jane" } });

// With query params
const posts = await api<Post[]>("/api/posts", { params: { page: 1, limit: 10 } });

// Error handling
try {
  await api("/api/missing");
} catch (e) {
  if (e instanceof ApiError) console.error(e.status, e.message);
}
```

## Error Handling

```tsx
const { error } = useApiQuery<User[]>(["users"], "/api/users");

if (error) {
  if (error.status === 404) return <EmptyState title="No users found" />;
  if (error.status === 401) redirect("/login");
  return <p className="text-destructive text-sm">{error.message}</p>;
}
```

## QueryProvider Config (wired in root layout)

- `staleTime: 5 * 60 * 1000` (5 min) — data fresh for 5 minutes
- `refetchOnWindowFocus: false` — no surprise refetches
- `retry: 1` — one retry on failure

## Checklist

- [ ] Types co-located with feature (see [file-organization.md](./file-organization.md))
- [ ] Query key descriptive, includes variable params
- [ ] Loading state renders Skeleton or Spinner
- [ ] Error state renders user-friendly message
- [ ] Mutations invalidate related query keys
- [ ] Success/error feedback via `toast` from `sonner`
- [ ] File under 250 lines
