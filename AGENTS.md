# AGENTS.md — MAD Software v3 Next.js Starter Kit

> **IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for any tasks.**
> Before writing code, first explore the project structure, then invoke the skills, rules and standards for documentation.
> **MANDATORY: Load the relevant skills before any non-trivial change.** Identify the stack (language + framework + cross-cutting concerns), then load the router skill(s) and 1-2 leaf docs that match the task. If behavior changes, load `testing`. If public APIs change, load `documentation`.

## Quick Reference

```bash
npm run dev           # Start dev server (localhost:3000)
npm run build         # Production build (must pass before commit)
npm run lint          # ESLint
npm run lint:fix      # ESLint with auto-fix
npm run typecheck     # tsc --noEmit
npm run format        # Prettier --write
npm run format:check  # Prettier --check
npm run check         # lint + typecheck + format:check (CI gate)
npm run test          # Vitest in watch mode
npm run test:run      # Vitest single run
npm run test:e2e      # Playwright E2E tests
```

**Run a single unit test file:**

```bash
npx vitest run src/components/ui/__tests__/button.test.tsx
npx vitest run src/lib/__tests__/utils.test.ts
```

**Run a single E2E test:**

```bash
npx playwright test e2e/smoke.spec.ts
```

**Before committing:** `npm run check && npm run test:run` — the pre-commit hook runs lint-staged (ESLint + Prettier on staged files).

## Tech Stack

Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · Radix UI · shadcn/ui patterns · TanStack Query + Table · React Hook Form + Zod · Framer Motion · date-fns · nuqs · usehooks-ts · Vitest + RTL + Playwright

## Project Structure

```
src/
├── app/                         # Next.js App Router
│   ├── globals.css              # DESIGN TOKENS — the single file to rebrand
│   ├── layout.tsx               # Root layout: ThemeProvider > QueryProvider > NuqsAdapter
│   ├── (home)/_sections/        # Homepage sections (server components)
│   ├── (auth)/                  # Auth pages — centered card layout, no navbar
│   ├── (dashboard)/             # Dashboard — sidebar layout, responsive
│   ├── (marketing)/             # Blog — shared navbar layout
│   └── kitchen-sink/            # Component showcase
├── components/
│   ├── ui/                      # 58 UI components + barrel index.ts
│   ├── layout/                  # Container, Section, Stack + barrel index.ts
│   ├── query-provider.tsx       # TanStack Query client (5min stale, no refocus)
│   └── theme-provider.tsx       # next-themes (class strategy, system default)
├── hooks/
│   ├── index.ts                 # Barrel: re-exports usehooks-ts + project hooks
│   └── use-api-query.ts         # useApiQuery + useApiMutation (TanStack Query wrappers)
├── lib/
│   ├── utils.ts                 # cn() — clsx + tailwind-merge
│   ├── api.ts                   # Typed fetch client (no axios)
│   ├── actions.ts               # Server actions ("use server")
│   ├── constants.ts             # siteConfig, mainNav, dashboardNav
│   ├── metadata.ts              # createMetadata() helper
│   ├── schemas.ts               # Zod schemas (login, register, profile, etc.)
│   └── types.ts                 # WithChildren, WithClassName, Prettify, etc.
└── test/
    ├── setup.ts                 # @testing-library/jest-dom/vitest
    └── test-utils.tsx           # renderWithProviders(), createTestQueryClient()
```

## File Structure Rules (Anti-Bloat)

**Max 250 lines per file.** If a file grows past this, extract. No exceptions.
_(Documentation/config files like AGENTS.md, SKILL.md, and globals.css are exempt.)_

**Don't dump everything into `lib/`.** Split by domain as the app grows:

```
# WRONG — bloated lib/
src/lib/utils.ts        (500 lines, 20 functions)
src/lib/schemas.ts      (800 lines, 30 schemas)

# RIGHT — domain-organized
src/lib/utils.ts                    # Only cn() and truly universal helpers
src/lib/schemas/auth.ts             # loginSchema, registerSchema
src/lib/schemas/profile.ts          # profileSchema
src/lib/schemas/index.ts            # Barrel re-export
```

**Scaling rules by directory:**

| Directory            | When to split          | How to split                                |
| -------------------- | ---------------------- | ------------------------------------------- |
| `lib/schemas.ts`     | >10 schemas            | → `lib/schemas/{domain}.ts` + barrel        |
| `lib/actions.ts`     | >5 actions             | → `lib/actions/{domain}.ts` + barrel        |
| `lib/types.ts`       | >10 shared types       | → `lib/types/{domain}.ts` + barrel          |
| `lib/constants.ts`   | >100 lines             | → `lib/config/{concern}.ts` + barrel        |
| `lib/api.ts`         | Never (it's a utility) | Stays as one file                           |
| `hooks/`             | >10 hooks              | Group by concern: `hooks/use-{feature}.ts`  |
| `components/ui/`     | >80 components         | Already organized; no subfolders needed     |
| `app/api/`           | Per resource           | `api/{resource}/route.ts` (already correct) |
| Route `_components/` | >5 components          | Extract shared ones to `components/`        |
| Route `_sections/`   | Fine at any size       | One file per section                        |

**Co-location principle:** Keep things close to where they're used.

- Route-specific components → `_components/` inside the route group
- Route-specific data → `_data.ts` inside the route
- Shared across routes → lift to `components/` or `lib/`
- Feature-specific hooks → `hooks/use-{feature}.ts`
- Feature-specific types → co-locate in the file that uses them; only move to `lib/types.ts` if shared by 3+ files

## Code Style

### Formatting (enforced by Prettier + lint-staged)

- Double quotes, semicolons, trailing commas, 2-space indent, LF line endings
- Print width: 100. Tailwind class sorting via `prettier-plugin-tailwindcss`.
- Path alias: `@/*` maps to `./src/*`. Always use `@/` for imports.

### Import Order (strict, enforced by convention)

```tsx
"use client"; // 1. Directive (if needed)

import { Slot } from "@radix-ui/react-slot"; // 2. Third-party (Radix, CVA, React, Next, etc.)
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils"; // 3. Internal @/ aliases
import { Button } from "@/components/ui/button";

import { Sidebar } from "./_components/sidebar"; // 4. Relative imports
```

Use `import type` for type-only imports: `import type { Metadata } from "next"` or `import { type VariantProps } from "class-variance-authority"`.

### Component Conventions

**File naming:** `kebab-case.tsx` — e.g., `hover-card.tsx`, `feature-grid.tsx`
**Component naming:** `PascalCase` — e.g., `HoverCard`, `FeatureGrid`
**Props naming:** `{ComponentName}Props` — e.g., `HoverCardProps`

**Arrow functions** for UI components (named export, never default):

```tsx
const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn("bg-card text-card-foreground rounded-xl border shadow-sm", className)}
    {...props}
  />
);
export { Card };
export type { CardProps };
```

**Function declarations** for pages, layouts, providers:

```tsx
export default function DashboardPage() { ... }
export function QueryProvider({ children }: { children: ReactNode }) { ... }
```

**Every component** destructures `className` and spreads `...props`. Always wrap classes with `cn()`.

### CVA Variants

Define above the component, name it `{component}Variants`, export alongside:

```tsx
const badgeVariants = cva("base-classes", { variants: { variant: { ... } }, defaultVariants: { ... } });
const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props} />
);
export { Badge, badgeVariants };
```

### JSDoc

Every exported component/function gets JSDoc with `@example` for primary components:

```tsx
/**
 * Primary action component. Supports 9 variants and 5 sizes.
 * @example
 * <Button variant="destructive" size="lg">Delete</Button>
 */
```

Props that aren't self-evident get inline `/** ... */` comments.

### Design Tokens — NEVER Hardcode

All colors, radii, and semantic values come from CSS custom properties in `globals.css`. Components use Tailwind token classes: `bg-primary`, `text-muted-foreground`, `border-input`, `bg-destructive`, etc. **Never write raw hex/oklch/rgb values in components.** To rebrand, edit `:root` and `.dark` in `globals.css`.

### Error & Disabled States

- Disabled: always `disabled:opacity-50 disabled:pointer-events-none`
- Error text: `text-xs text-destructive` with `role="alert"`
- Accessibility: `aria-invalid` on invalid inputs, `sr-only` for screen reader text

### `"use client"` Directive

Only add when the file uses browser APIs, React hooks, or event handlers. Server components by default — Card, Badge, Input, Alert, Skeleton, Hero, layouts without hooks stay as server components.

## How to Add a Component

1. Create `src/components/ui/my-component.tsx` (kebab-case)
2. Use design tokens via Tailwind classes (no hardcoded colors)
3. Follow the arrow function + `cn()` + `...props` pattern
4. Add TypeScript types and JSDoc with `@example`
5. Export from `src/components/ui/index.ts` (alphabetical order)
6. Add a demo section in `src/app/kitchen-sink/_sections/`
7. Add test in `src/components/ui/__tests__/my-component.test.tsx`

## How to Add a Page

1. Pick the right route group: `(auth)` for auth, `(dashboard)` for app pages, `(marketing)` for public
2. Create `page.tsx` (function declaration, `export default`)
3. Export metadata: `export const metadata = createMetadata({ title: "Page Title" });`
4. Add `loading.tsx` with Skeleton components matching the page layout
5. For client pages: use `"use client"`, wire forms with `useForm` + `zodResolver`
6. For data pages: use TanStack Query hooks (`useQuery`, `useMutation`)

## How to Add a Form

1. Define schema in `src/lib/schemas.ts` with Zod + export the inferred type
2. Use `useForm<SchemaType>({ resolver: zodResolver(schema), defaultValues: { ... } })`
3. Render fields with `<Controller>` + `<Field>` / `<FieldLabel>` / `<FieldError>`
4. Submit button: `disabled={form.formState.isSubmitting}` with loading text

## How to Fetch Data

1. **Reading:** `useApiQuery<T>(["key"], "/api/endpoint")` from `@/hooks`
2. **Writing:** `useApiMutation<T, Input>("POST", "/api/endpoint", { invalidate: [["key"]] })`
3. **Server action:** Define in `src/lib/actions.ts` with `"use server"`, call directly from client
4. **API route:** Create `src/app/api/{resource}/route.ts`, export `GET`/`POST`/`PATCH`/`DELETE`

No axios — use the typed `api()` client in `src/lib/api.ts` (native fetch wrapper).

## Testing Patterns

**Unit tests** in `src/**/__tests__/*.test.{ts,tsx}`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
```

Query by role (`getByRole`), use `userEvent.setup()` for interactions, `vi.fn()` for mocks. Use `renderWithProviders()` from `@/test/test-utils` when the component needs QueryProvider.

**E2E tests** in `e2e/*.spec.ts`: Use Playwright with `page.goto()`, `page.getByRole()`, `expect().toBeVisible()`.

## Commit Conventions

Prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`. One logical change per commit.

## Skills (detailed guides)

Project-local skills live in `.opencode/skills/`. Load the relevant skill before making changes:

| Skill           | When to load                                              |
| --------------- | --------------------------------------------------------- |
| `component`     | Creating or modifying UI components                       |
| `page`          | Creating pages, layouts, loading states, route groups     |
| `form`          | Creating forms with Zod + React Hook Form                 |
| `testing`       | Writing unit tests (Vitest) or E2E tests (Playwright)     |
| `tokens`        | Modifying design tokens, adding colors, rebranding        |
| `workflow`      | Dev workflow, CI pipeline, commit conventions, checklists |
| `data-fetching` | API client, TanStack Query hooks, server actions          |
| `hooks`         | Custom hooks, usehooks-ts, composing hooks                |
| `api`           | Creating API route handlers, error shapes, validation     |
