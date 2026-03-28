# Component File Organization

> Where components go, when to extract, how to split large ones.

## Where Components Live

| Location                       | When to use                                      | Example                                    |
| ------------------------------ | ------------------------------------------------ | ------------------------------------------ |
| `src/components/ui/`           | Reusable UI primitives (buttons, cards, dialogs) | `button.tsx`, `card.tsx`                   |
| `src/components/layout/`       | Layout primitives (containers, grids, stacks)    | `container.tsx`, `section.tsx`             |
| `src/app/{route}/_components/` | Route-specific, only used in that route group    | `sidebar.tsx`, `dashboard-header.tsx`      |
| `src/components/` (root)       | App-wide providers and wrappers                  | `query-provider.tsx`, `theme-provider.tsx` |

## Extraction Triggers

| Signal                                                  | Action                                                  |
| ------------------------------------------------------- | ------------------------------------------------------- |
| Component in `_components/` used in **2+ route groups** | Move to `src/components/ui/` and add to barrel export   |
| Route `_components/` has **>5 files**                   | Review which are truly route-specific; lift shared ones |
| Component file exceeds **250 lines**                    | Split into sub-files (see below)                        |
| Utility component (no business logic)                   | Belongs in `components/ui/`, not `_components/`         |

## Splitting Compound Components

When a component (like DataTable, Combobox, or CommandPalette) grows past 250 lines:

```
# Before — single file (fine under 250 lines):
src/components/ui/data-table.tsx

# After — directory with sub-files:
src/components/ui/data-table/
├── index.tsx              # Main export, composes sub-components
├── columns.tsx            # Column definitions
├── toolbar.tsx            # Search, filters, view toggles
└── pagination.tsx         # Pagination controls
```

The barrel export (`components/ui/index.ts`) stays the same:

```tsx
export { DataTable } from "./data-table"; // Works with index.tsx in directory
```

**Rules for sub-files:**

- `index.tsx` is the only file that exports publicly.
- Sub-files are internal — don't add them to the barrel export.
- Each sub-file should be under 250 lines.
- Sub-file naming: `{concern}.tsx` (e.g., `toolbar.tsx`, not `data-table-toolbar.tsx`).

## Barrel Export (`components/ui/index.ts`)

- One line per component file, alphabetical order.
- Explicit named exports only: `export { Button, buttonVariants } from "./button"`.
- No `export *` — always explicit.
- When adding, find the alphabetical position and insert.

## Kitchen Sink Sections

Every component in `components/ui/` gets a demo in `kitchen-sink/_sections/`:

```
src/app/kitchen-sink/_sections/
├── buttons-section.tsx      # One section per component category
├── cards-section.tsx
├── dialog-section.tsx
└── my-new-section.tsx       # Add yours here
```

Then register it in `kitchen-sink/page.tsx`'s categories array.
