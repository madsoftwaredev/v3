# Page File Organization

> Where page files go, when to create private directories, when to extract.

## Route Group Structure

Each route group follows the same pattern:

```
src/app/(dashboard)/
├── layout.tsx                    # Shared layout for all dashboard routes
├── _components/                  # Route-specific components (underscore = private)
│   ├── sidebar.tsx
│   └── dashboard-header.tsx
├── dashboard/
│   ├── page.tsx                  # /dashboard
│   └── loading.tsx               # Dashboard loading skeleton
├── settings/
│   ├── page.tsx                  # /settings
│   └── loading.tsx               # Settings loading skeleton
└── users/                        # New feature route
    ├── page.tsx                  # /users
    ├── [id]/page.tsx             # /users/:id
    ├── _components/              # Components only used in /users routes
    │   └── user-table.tsx
    └── _data.ts                  # Mock data or query helpers for users
```

## Private File Conventions (underscore prefix)

| File/Dir       | Purpose                                  | Example                           |
| -------------- | ---------------------------------------- | --------------------------------- |
| `_components/` | Components scoped to this route group    | `_components/sidebar.tsx`         |
| `_sections/`   | Page sections (homepage, kitchen sink)   | `_sections/hero-section.tsx`      |
| `_data.ts`     | Mock data or data helpers for this route | `_data.ts` with posts array       |
| `_types.ts`    | Types scoped to this route (not shared)  | `_types.ts` with `DashboardStats` |
| `_lib.ts`      | Shared utilities for this route group    | `_lib.ts` with validators         |

**Rule:** Underscore-prefixed files/dirs are not routes — Next.js ignores them.

## When to Create What

| Signal                                   | Action                                        |
| ---------------------------------------- | --------------------------------------------- |
| Page has page-specific components        | Create `_components/` in the route            |
| Page has >3 visual sections              | Create `_sections/` and compose in `page.tsx` |
| Page needs mock data                     | Create `_data.ts` in the route                |
| Page has types used only here            | Define inline or create `_types.ts`           |
| Types used in **3+ files** across routes | Move to `src/lib/types.ts`                    |

## Extraction Triggers

| Signal                                                     | Action                                               |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| `_components/` has a component used in **2+ route groups** | Move to `src/components/`                            |
| `_components/` has **>5 files**                            | Review — lift shared ones to `src/components/`       |
| Page file exceeds **250 lines**                            | Extract sections into `_sections/` or `_components/` |
| `_data.ts` connects to a real API                          | Replace with TanStack Query hook in `src/hooks/`     |

## Co-location Principle

Keep things close to where they're used:

```
# WRONG — everything in global dirs
src/components/dashboard-sidebar.tsx    # Only used in (dashboard)
src/lib/dashboard-types.ts              # Only used in (dashboard)

# RIGHT — co-located with the route
src/app/(dashboard)/_components/sidebar.tsx
src/app/(dashboard)/_types.ts
```

Only lift to `src/components/` or `src/lib/` when something is genuinely shared across multiple route groups.

## Kitchen Sink Sections

Every showcase section lives in `kitchen-sink/_sections/`:

```
src/app/kitchen-sink/
├── page.tsx                      # Imports and registers all sections
└── _sections/
    ├── buttons-section.tsx       # One file per category
    ├── cards-section.tsx
    └── my-new-section.tsx        # Add new ones here
```

Section component pattern: `export const MySection = () => (...)` — arrow const, not function declaration.
