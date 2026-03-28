# GitHub Copilot Instructions — MAD Software v3

> Full details: AGENTS.md (project root) and .opencode/skills/ for deep-dive guides.

## Tech Stack

Next.js 16, React 19, TypeScript 5 (strict), Tailwind CSS v4, Radix UI, shadcn/ui patterns, TanStack Query + Table, React Hook Form + Zod, Framer Motion, date-fns, nuqs, usehooks-ts.

## Rules

- **Max 250 lines per file.** Split into sub-files when exceeded.
- **No hardcoded colors.** Use design tokens: `bg-primary`, `text-muted-foreground`, `border-input`. All defined in `src/app/globals.css`.
- **Arrow functions** for UI components with named exports. **Function declarations** for pages/layouts with `export default`.
- **Always** destructure `className`, spread `...props`, wrap with `cn()` from `@/lib/utils`.
- **`"use client"` only when needed** — hooks, event handlers, Radix primitives. Server components by default.
- **Import order:** (1) `"use client"` directive, (2) third-party, (3) `@/` aliases, (4) relative imports.
- **`import type`** for type-only imports.
- **No axios.** Use `api()` from `@/lib/api.ts` with TanStack Query hooks from `@/hooks`.
- **Co-locate files.** Route-specific → `_components/`. Shared across routes → `src/components/`.
- **JSDoc** with `@example` on every exported component/function.

## File Placement

- UI components: `src/components/ui/{name}.tsx` + export from `index.ts`
- Pages: `src/app/{route-group}/{route}/page.tsx`
- API routes: `src/app/api/{resource}/route.ts`
- Schemas: `src/lib/schemas.ts` (split into `schemas/{domain}.ts` at >10)
- Hooks: `src/hooks/use-{name}.ts` + export from `index.ts`
- Server actions: `src/lib/actions.ts` (split into `actions/{domain}.ts` at >5)
- Types: co-locate; move to `lib/types.ts` only when shared by 3+ files
- Tests: `{source}/__tests__/{name}.test.tsx`

## Formatting

Double quotes, semicolons, trailing commas, 2-space indent, 100 char print width, `prettier-plugin-tailwindcss` for class sorting. Path alias: `@/*` = `./src/*`.

## Component Pattern

```tsx
import { cn } from "@/lib/utils";

const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn("bg-card text-card-foreground rounded-xl border shadow-sm", className)}
    {...props}
  />
);
export { Card };
export type { CardProps };
```

## Validation

```bash
npm run check && npm run test:run   # Before committing
```
