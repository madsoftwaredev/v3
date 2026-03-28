"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
import { createContext, useContext, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

type ToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>;

/**
 * Toggle group — segmented control for mutually exclusive or multi-select options.
 *
 * @example
 * <ToggleGroup type="single" variant="outline">
 *   <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
 *   <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
 *   <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
 * </ToggleGroup>
 */
const ToggleGroup = ({ className, variant, size, children, ...props }: ToggleGroupProps) => (
  <ToggleGroupPrimitive.Root
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
);

type ToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>;

/** Individual item within a toggle group. */
const ToggleGroupItem = ({
  className,
  children,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) => {
  const context = useContext(ToggleGroupContext);
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        toggleVariants({
          variant: variant ?? context.variant,
          size: size ?? context.size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

export { ToggleGroup, ToggleGroupItem };
export type { ToggleGroupProps, ToggleGroupItemProps };
