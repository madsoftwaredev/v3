# File Placement Decision Tree

> "I'm creating X — where does it go?"

## Quick Reference

| I'm creating...                      | It goes in...                                                   |
| ------------------------------------ | --------------------------------------------------------------- |
| A reusable UI component              | `src/components/ui/{name}.tsx`                                  |
| A layout primitive (container, grid) | `src/components/layout/{name}.tsx`                              |
| A route-specific component           | `src/app/{route}/_components/{name}.tsx`                        |
| A page                               | `src/app/{route-group}/{route}/page.tsx`                        |
| A layout                             | `src/app/{route-group}/layout.tsx`                              |
| A loading state                      | `src/app/{route}/{loading.tsx}`                                 |
| An API route                         | `src/app/api/{resource}/route.ts`                               |
| A Zod schema                         | `src/lib/schemas.ts` (or `schemas/{domain}.ts` if >10)          |
| A server action                      | `src/lib/actions.ts` (or `actions/{domain}.ts` if >5)           |
| A shared type                        | `src/lib/types.ts` (or `types/{domain}.ts` if >10)              |
| A feature-specific type              | Co-locate: `_types.ts` in the route dir                         |
| A custom hook                        | `src/hooks/use-{name}.ts`                                       |
| A provider                           | `src/components/{name}-provider.tsx`                            |
| Mock/placeholder data                | `src/app/{route}/_data.ts`                                      |
| A unit test                          | `{source-dir}/__tests__/{name}.test.tsx`                        |
| An E2E test                          | `e2e/{feature}.spec.ts`                                         |
| Site config (name, URL, nav)         | `src/lib/constants.ts` (or `config/{concern}.ts` if >100 lines) |
| A kitchen-sink section               | `src/app/kitchen-sink/_sections/{name}-section.tsx`             |

## Decision Flow

```
Is it a component?
├── Used across the whole app? → src/components/ui/
├── Used in one route group? → src/app/{route}/_components/
├── A layout primitive? → src/components/layout/
└── An app-wide provider? → src/components/

Is it a page/route?
├── Auth flow? → src/app/(auth)/
├── Behind authentication? → src/app/(dashboard)/
├── Public content? → src/app/(marketing)/
└── Standalone? → src/app/{route}/

Is it data/logic?
├── Schema? → src/lib/schemas.ts
├── Server action? → src/lib/actions.ts
├── Hook? → src/hooks/use-{name}.ts
├── API endpoint? → src/app/api/{resource}/route.ts
├── Mock data? → co-locate in route _data.ts
└── Pure utility? → src/lib/{name}.ts

Is it a type?
├── Used in 1-2 files? → inline or _types.ts in the route
├── Used in 3+ files? → src/lib/types.ts
└── >10 shared types? → src/lib/types/{domain}.ts
```

## Scaling Thresholds

| File               | Split when  | Split into                            |
| ------------------ | ----------- | ------------------------------------- |
| `lib/schemas.ts`   | >10 schemas | `lib/schemas/{domain}.ts` + barrel    |
| `lib/actions.ts`   | >5 actions  | `lib/actions/{domain}.ts` + barrel    |
| `lib/types.ts`     | >10 types   | `lib/types/{domain}.ts` + barrel      |
| `lib/constants.ts` | >100 lines  | `lib/config/{concern}.ts` + barrel    |
| Any file           | >250 lines  | Extract into sub-files or directories |

Barrel exports (`index.ts`) ensure import paths don't change when you split.
