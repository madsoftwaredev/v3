# Component Patterns

> Exact templates for each component type. Copy and adapt.

## Pattern A: Simple HTML Wrapper {#pattern-a}

No Radix, no CVA. Just a styled HTML element.

```tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

/**
 * Styled text input with design token colors.
 * @example
 * <Input type="email" placeholder="you@example.com" />
 */
const Input = ({ className, type, ...props }: InputProps) => (
  <input
    type={type}
    className={cn(
      "border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export { Input };
export type { InputProps };
```

**Key:** Use `type` alias (not `interface`) when there are no extra props beyond the HTML attributes.

## Pattern B: Component with CVA Variants {#pattern-b}

Component with visual variants (size, color, style).

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

/**
 * Status indicator badge with semantic variants.
 * @example
 * <Badge variant="destructive">Error</Badge>
 */
const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge, badgeVariants };
export type { BadgeProps };
```

**Key:**

- CVA const named `{component}Variants`, defined above component.
- `interface` (not `type`) when extending with `VariantProps` intersection.
- Export BOTH the component AND the variants.

## Pattern C: Radix Primitive Wrapper — Single Part {#pattern-c}

Simple Radix primitives like Checkbox, Switch, Progress.

```tsx
"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;

/**
 * Toggle switch for boolean settings.
 * @example
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 */
const Switch = ({ className, ...props }: SwitchProps) => (
  <SwitchPrimitive.Root
    className={cn(
      "bg-input focus-visible:ring-ring peer data-[state=checked]:bg-primary inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb className="bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
  </SwitchPrimitive.Root>
);

export { Switch };
export type { SwitchProps };
```

**Key:**

- `"use client"` always required for Radix.
- Import as namespace: `import * as XPrimitive from "@radix-ui/react-x"`.
- Props: `ComponentPropsWithoutRef<typeof XPrimitive.Root>`.

## Pattern D: Radix Compound Component — Multi-Part {#pattern-d}

Dialog, Sheet, Select, Accordion, etc.

```tsx
"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// Direct re-exports (no styling needed):
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

/** Overlay with token-based background. */
const DialogOverlay = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay className={cn("bg-overlay fixed inset-0 z-50", className)} {...props} />
);

/** Content panel with close button. */
const DialogContent = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        "bg-background fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg border p-6 shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="ring-offset-background absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
);

// Plain styled wrappers (not Radix):
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogClose };
```

**Key:**

- Unstyled parts: direct alias (`const Dialog = DialogPrimitive.Root`).
- Styled parts: arrow function with `ComponentPropsWithoutRef<typeof XPrimitive.Y>`.
- Close button: always `<X className="h-4 w-4" />` + `<span className="sr-only">Close</span>`.
- Overlay: always uses `bg-overlay` token.
