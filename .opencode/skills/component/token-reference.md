# Design Token Reference for Components

> Quick reference for Tailwind classes that use design tokens. Never hardcode colors.

## Surfaces

| Need                            | Class                                |
| ------------------------------- | ------------------------------------ |
| Page background                 | `bg-background`                      |
| Card/panel surface              | `bg-card text-card-foreground`       |
| Popover/dropdown surface        | `bg-popover text-popover-foreground` |
| Muted/subtle surface            | `bg-muted text-muted-foreground`     |
| Overlay (dialog/sheet backdrop) | `bg-overlay`                         |

## Actions

| Need                | Class                                        |
| ------------------- | -------------------------------------------- |
| Primary button/link | `bg-primary text-primary-foreground`         |
| Primary hover       | `hover:bg-primary/90`                        |
| Secondary button    | `bg-secondary text-secondary-foreground`     |
| Destructive/danger  | `bg-destructive text-destructive-foreground` |
| Success             | `bg-success text-success-foreground`         |
| Warning             | `bg-warning text-warning-foreground`         |
| Info                | `bg-info text-info-foreground`               |

## Interactive States

| Need                      | Class                                                                     |
| ------------------------- | ------------------------------------------------------------------------- |
| Hover (menus, list items) | `hover:bg-accent hover:text-accent-foreground`                            |
| Active/selected           | `bg-accent text-accent-foreground`                                        |
| Disabled                  | `disabled:cursor-not-allowed disabled:opacity-50`                         |
| Focus ring                | `focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring` |

## Text

| Need                  | Class                           |
| --------------------- | ------------------------------- |
| Primary text          | `text-foreground`               |
| Secondary/muted text  | `text-muted-foreground`         |
| Error message         | `text-destructive text-xs`      |
| Description/help text | `text-muted-foreground text-xs` |

## Borders

| Need             | Class                                            |
| ---------------- | ------------------------------------------------ |
| Default border   | `border-border` (applied globally in base layer) |
| Input border     | `border-input`                                   |
| Focus ring color | `ring-ring`                                      |

## Common Mistakes

| Wrong                 | Right                     | Why                                 |
| --------------------- | ------------------------- | ----------------------------------- |
| `bg-[#1a1a2e]`        | `bg-primary`              | Hardcoded — won't update on rebrand |
| `text-gray-500`       | `text-muted-foreground`   | Not semantic                        |
| `bg-black/80`         | `bg-overlay`              | Overlay is a token                  |
| `rounded-[10px]`      | `rounded-lg`              | Radius scale is tokenized           |
| `focus:ring-blue-500` | `focus-visible:ring-ring` | Ring color is tokenized             |
