# Skill: Creating Pages & Layouts

> How to create pages, layouts, and loading states in this Next.js App Router project.

## Sub-docs

- [templates.md](./templates.md) — Page templates (server, client, dynamic route, layout, loading)
- [file-organization.md](./file-organization.md) — Route groups, \_components/, \_sections/, \_data.ts, scaling

## Route Groups

| Group          | Purpose                          | Layout                    | URL prefix         |
| -------------- | -------------------------------- | ------------------------- | ------------------ |
| `(home)`       | Homepage sections                | None (root page composes) | `/`                |
| `(auth)`       | Login, register, forgot-password | Centered card, no navbar  | `/login`, etc.     |
| `(dashboard)`  | App pages behind auth            | Sidebar + header          | `/dashboard`, etc. |
| `(marketing)`  | Public content pages             | Shared navbar             | `/blog`, etc.      |
| `kitchen-sink` | Component showcase               | None (standalone)         | `/kitchen-sink`    |

## Quick Decision Tree

1. **Server or client?** → Server by default. Client only if you use hooks, forms, or event handlers.
2. **Which route group?** → Auth flows → `(auth)`. App pages → `(dashboard)`. Public content → `(marketing)`.
3. **Need a layout?** → Only if the route group doesn't have one yet, or if a nested route needs a different layout.
4. **Need loading state?** → Yes, always. Create `loading.tsx` with Skeletons matching the page layout.

## Rules

- `export default function` for pages and layouts (not arrow functions).
- Server pages: export `metadata` via `createMetadata()`.
- Client pages: `"use client"` directive. Cannot export `metadata` — use `generateMetadata` in parent layout.
- Dynamic route `params` is a `Promise` in Next.js 16 — always `await` it.
- Max 250 lines per page. Extract sections into `_sections/` or logic into `_components/`.

## Checklist

- [ ] Page uses `export default function` (not arrow)
- [ ] Metadata exported or generated correctly
- [ ] Loading state created with matching Skeleton layout
- [ ] Route in correct group
- [ ] Private files use underscore prefix (`_components/`, `_sections/`, `_data.ts`)
- [ ] File under 250 lines
