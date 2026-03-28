# AGENTS.md — MAD Software v3 Next.js Starter Kit

> For agentic coding assistants operating in this repository.

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
├── hooks/index.ts               # Re-exports from usehooks-ts
├── lib/
│   ├── utils.ts                 # cn() — clsx + tailwind-merge
│   ├── constants.ts             # siteConfig, mainNav, dashboardNav
│   ├── metadata.ts              # createMetadata() helper
│   ├── schemas.ts               # Zod schemas (login, register, profile, etc.)
│   └── types.ts                 # WithChildren, WithClassName, Prettify, etc.
└── test/
    ├── setup.ts                 # @testing-library/jest-dom/vitest
    └── test-utils.tsx           # renderWithProviders(), createTestQueryClient()
```

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
