# Skill: Development Workflow

> Dev scripts, CI pipeline, commit conventions, file placement, and checklists.

## Sub-docs

- [file-placement.md](./file-placement.md) — "I'm creating X, where does it go?" decision tree

## Scripts

```bash
npm run dev             # Dev server (localhost:3000)
npm run build           # Production build (must pass before merge)
npm run lint            # ESLint
npm run lint:fix        # ESLint auto-fix
npm run typecheck       # tsc --noEmit
npm run format          # Prettier --write
npm run format:check    # Prettier --check
npm run check           # All three: lint + typecheck + format:check
npm run test            # Vitest watch
npm run test:run        # Vitest single run
npm run test:e2e        # Playwright E2E
```

## Before Every Commit

```bash
npm run check && npm run test:run
```

Pre-commit hook runs `lint-staged` automatically (ESLint + Prettier on staged files).

## Commit Conventions

**Format:** `{prefix}: {description}`

| Prefix      | When                                   |
| ----------- | -------------------------------------- |
| `feat:`     | New feature, component, page           |
| `fix:`      | Bug fix                                |
| `refactor:` | Code restructuring, no behavior change |
| `docs:`     | Documentation only                     |
| `test:`     | Adding or updating tests               |
| `chore:`    | Dependencies, config, tooling          |

Rules: One logical change per commit. Lowercase. Imperative mood. No period.

## File Naming Conventions

| What             | Convention        | Example                                     |
| ---------------- | ----------------- | ------------------------------------------- |
| UI components    | `kebab-case.tsx`  | `hover-card.tsx`                            |
| Pages            | `page.tsx`        | `src/app/(auth)/login/page.tsx`             |
| Layouts          | `layout.tsx`      | `src/app/(dashboard)/layout.tsx`            |
| Loading states   | `loading.tsx`     | `src/app/(dashboard)/dashboard/loading.tsx` |
| Error boundaries | `error.tsx`       | `src/app/error.tsx`                         |
| Not found        | `not-found.tsx`   | `src/app/not-found.tsx`                     |
| Unit tests       | `{name}.test.tsx` | `button.test.tsx`                           |
| E2E tests        | `{name}.spec.ts`  | `smoke.spec.ts`                             |
| Hooks            | `use-{name}.ts`   | `use-api-query.ts`                          |
| API routes       | `route.ts`        | `src/app/api/users/route.ts`                |
| Server actions   | `actions.ts`      | `src/lib/actions.ts`                        |
| Schemas          | `schemas.ts`      | `src/lib/schemas.ts`                        |
| Barrel exports   | `index.ts`        | `src/components/ui/index.ts`                |
| Private dirs     | `_{name}/`        | `_components/`, `_sections/`                |
| Private files    | `_{name}.ts`      | `_data.ts`, `_types.ts`, `_lib.ts`          |

## Anti-Bloat: The 250-Line Rule

**Max 250 lines per file.** No exceptions (docs/config exempt).

Before creating or editing a file, check its current length. If adding content would exceed 250 lines, extract instead. See [file-placement.md](./file-placement.md) for where things go.

## CI Pipeline

`.github/workflows/ci.yml` runs on push to `main` and PRs:

1. `npm ci` → 2. `npm run lint` → 3. `npm run typecheck` → 4. `npm run format:check` → 5. `npm run test:run` → 6. `npm run build`

## Checklists

### New Component

- [ ] File in `src/components/ui/` (or `_components/` if route-specific)
- [ ] Added to barrel export
- [ ] Kitchen-sink demo section
- [ ] Test in `__tests__/`
- [ ] File under 250 lines
- [ ] `npm run check && npm run test:run`

### New Page

- [ ] Correct route group (`(auth)`, `(dashboard)`, `(marketing)`)
- [ ] Metadata via `createMetadata()`
- [ ] `loading.tsx` with matching Skeleton layout
- [ ] Added to sitemap if public (`src/app/sitemap.ts`)
- [ ] Added nav link in `src/lib/constants.ts` if needed
- [ ] `npm run check && npm run test:run`

### New Form

- [ ] Schema in `src/lib/schemas.ts` (check file size first)
- [ ] All fields use Controller + Field pattern
- [ ] Submit button disabled during submission
- [ ] `npm run check && npm run test:run`

### New Hook

- [ ] File in `src/hooks/use-{name}.ts`
- [ ] Added to barrel `src/hooks/index.ts`
- [ ] JSDoc with `@example`
- [ ] `npm run check && npm run test:run`

### New API Route

- [ ] File at `src/app/api/{resource}/route.ts`
- [ ] Validates request body with Zod
- [ ] Error responses use `{ message: string }` shape
- [ ] `npm run check && npm run test:run`
