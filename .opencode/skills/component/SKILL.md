# Skill: Creating Components

> How to create UI components in this starter kit. Follow these patterns exactly.

## Sub-docs

- [patterns.md](./patterns.md) — The 4 component templates (simple, CVA, Radix single, Radix compound)
- [file-organization.md](./file-organization.md) — Where components go, extraction triggers, compound splitting
- [token-reference.md](./token-reference.md) — Design token Tailwind classes quick reference

## Rules (non-negotiable)

- **Arrow functions** for all UI components. Never `function` declarations.
- **Named exports** only. Never `export default`.
- **No forwardRef** — this project does not use it.
- **No hardcoded colors** — use design token Tailwind classes only.
- **Always destructure `className`** and spread `...props`.
- **Always wrap classes with `cn()`** from `@/lib/utils`. User's `className` goes last.
- **JSDoc on every export** with `@example` on primary components.
- **`"use client"` only when needed** — Radix primitives, hooks, event handlers.
- **Max 250 lines per file.** Split compound components into sub-files if exceeded.

## Import Order

```tsx
"use client"; // 1. Directive (if needed)

import * as DialogPrimitive from "@radix-ui/react-dialog"; // 2. Third-party
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils"; // 3. @/ aliases
import { Button } from "@/components/ui/button";

import { Sidebar } from "./_components/sidebar"; // 4. Relative
```

Use `import type` for type-only imports.

## Quick Pattern Reference

| Pattern                    | When to use                                | Template                                   |
| -------------------------- | ------------------------------------------ | ------------------------------------------ |
| **A: Simple HTML wrapper** | Plain element + token styling, no variants | See [patterns.md](./patterns.md#pattern-a) |
| **B: CVA variants**        | Component with size/color/style variants   | See [patterns.md](./patterns.md#pattern-b) |
| **C: Radix single**        | Simple Radix primitive (Checkbox, Switch)  | See [patterns.md](./patterns.md#pattern-c) |
| **D: Radix compound**      | Multi-part Radix (Dialog, Sheet, Select)   | See [patterns.md](./patterns.md#pattern-d) |

## After Creating the Component

1. **Add to barrel export** in `src/components/ui/index.ts` — alphabetical order, explicit named exports.
2. **Add a kitchen-sink section** in `src/app/kitchen-sink/_sections/` — export as `const XSection = () => (...)`.
3. **Add a test** in `src/components/ui/__tests__/` — see the `testing` skill.
4. **Run checks**: `npm run check && npm run test:run`.

## Checklist

- [ ] File in correct location (see [file-organization.md](./file-organization.md))
- [ ] Arrow function, named export, no default export
- [ ] `cn()` wraps all classes, `className` is last arg
- [ ] Design token classes only (see [token-reference.md](./token-reference.md))
- [ ] TypeScript types + JSDoc with `@example`
- [ ] Added to barrel export (`components/ui/index.ts`)
- [ ] Kitchen-sink demo section created
- [ ] Test created in `__tests__/`
- [ ] File under 250 lines
