# Data Fetching File Organization

> Where types, hooks, mock data, and actions go. Anti-bloat rules.

## Types: Co-locate First, Lift When Shared

```
# DEFAULT — types live with the feature that uses them
src/app/(dashboard)/dashboard/_types.ts       # DashboardStats, RecentActivity
src/app/(marketing)/blog/_data.ts             # BlogPost interface lives with data

# WHEN SHARED (3+ files across different routes) — lift to lib
src/lib/types.ts                              # User, Post, etc.

# WHEN lib/types.ts HAS >10 TYPES — split by domain
src/lib/types/auth.ts                         # User, Session
src/lib/types/content.ts                      # Post, Comment
src/lib/types/index.ts                        # Barrel
```

**Rule:** `src/lib/types.ts` is for shared utility types (`WithChildren`, `Prettify`) and domain types used across 3+ files. Everything else stays co-located.

## Query Hooks: Generic vs. Feature-Specific

```
src/hooks/
├── index.ts                  # Barrel
├── use-api-query.ts          # Generic useApiQuery + useApiMutation (DO NOT BLOAT)
├── use-users.ts              # useUsers(), useUser(id), useCreateUser()
├── use-posts.ts              # usePosts(), usePost(slug)
└── use-search.ts             # useSearch() — debounced search
```

- `use-api-query.ts` stays generic (one file, never grows).
- Feature-specific hooks get their own files: `use-{resource}.ts`.
- One file per resource/concern. Barrel export in `index.ts`.

## Mock Data: Co-locate, Then Delete

```
src/app/(marketing)/blog/_data.ts       # Mock blog posts
src/app/(dashboard)/dashboard/_data.ts   # Mock dashboard stats
```

When you connect a real API: delete `_data.ts`, replace imports with query hooks.

## Server Actions

Start in `src/lib/actions.ts`. Split at >5 actions into `src/lib/actions/{domain}.ts` + barrel.

## API Response Types

When an API route returns a typed response, define the type:

- **If used only by one route handler**: Inline in the `route.ts` or `_lib.ts`.
- **If used by 1-2 components**: Co-locate with the component or route `_types.ts`.
- **If used by 3+ files**: Move to `src/lib/types.ts` (or `types/{domain}.ts`).
