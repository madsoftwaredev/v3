"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

/**
 * Visual divider between content sections.
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" className="h-6" />
 */
const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "bg-border shrink-0",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className,
    )}
    {...props}
  />
);

export { Separator };
export type { SeparatorProps };
