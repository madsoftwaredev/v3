# CLAUDE.md — MAD Software v3

> Instructions for Claude Code. Full details in AGENTS.md and .opencode/skills/.

## Commands

```bash
npm run dev           # Dev server
npm run build         # Production build (must pass before commit)
npm run check         # lint + typecheck + format:check
npm run test:run      # Vitest single run
npm run test:e2e      # Playwright E2E
npx vitest run src/components/ui/__tests__/button.test.tsx  # Single test
```

**Before committing:** `npm run check && npm run test:run`

## Tech Stack

Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · Radix UI · shadcn/ui patterns · TanStack Query + Table · React Hook Form + Zod · Framer Motion · date-fns · nuqs · usehooks-ts · Vitest + RTL + Playwright

## Critical Rules

1. **Max 250 lines per file.** Extract if exceeded. No exceptions.
2. **No hardcoded colors.** Use design token Tailwind classes (`bg-primary`, `text-muted-foreground`). All tokens in `globals.css`.
3. **Arrow functions** for UI components, **function declarations** for pages/layouts.
4. **Named exports only** for components. `export default` only for pages/layouts.
5. **Always destructure `className`, spread `...props`, wrap with `cn()`.**
6. **`"use client"` only when needed** — hooks, event handlers, browser APIs.
7. **Import order:** (1) `"use client"`, (2) third-party, (3) `@/` aliases, (4) relative.
8. **No axios.** Use `api()` from `@/lib/api` (native fetch wrapper).
9. **Co-locate files.** Route-specific → `_components/`. Shared across 2+ routes → `components/`.
10. **JSDoc on every export** with `@example` for primary components.

## File Placement

| Creating...           | Put it in...                                                   |
| --------------------- | -------------------------------------------------------------- |
| UI component          | `src/components/ui/{name}.tsx` + barrel export                 |
| Page                  | `src/app/{route-group}/{route}/page.tsx`                       |
| API route             | `src/app/api/{resource}/route.ts`                              |
| Schema                | `src/lib/schemas.ts` (split at >10 into `schemas/{domain}.ts`) |
| Hook                  | `src/hooks/use-{name}.ts` + barrel export                      |
| Server action         | `src/lib/actions.ts` (split at >5 into `actions/{domain}.ts`)  |
| Route-local component | `src/app/{route}/_components/`                                 |
| Test                  | `{source-dir}/__tests__/{name}.test.tsx`                       |

## Detailed Guides

Read `.opencode/skills/` for in-depth patterns:

| Skill           | When                                       |
| --------------- | ------------------------------------------ |
| `component`     | Creating/modifying UI components           |
| `page`          | Creating pages, layouts, loading states    |
| `form`          | Forms with Zod + React Hook Form           |
| `data-fetching` | API client, TanStack Query, server actions |
| `hooks`         | Custom hooks, usehooks-ts                  |
| `api`           | API route handlers                         |
| `testing`       | Unit + E2E tests                           |
| `tokens`        | Design tokens, rebranding                  |
| `workflow`      | Dev workflow, CI, commit conventions       |
