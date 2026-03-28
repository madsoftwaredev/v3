"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

/**
 * Range slider input.
 *
 * @example
 * <Slider defaultValue={[50]} max={100} step={1} />
 */
const Slider = ({ className, ...props }: SliderProps) => (
  <SliderPrimitive.Root
    className={cn("relative flex w-full touch-none items-center select-none", className)}
    {...props}
  >
    <SliderPrimitive.Track className="bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="bg-primary absolute h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="border-primary/50 bg-background focus-visible:ring-ring block h-4 w-4 rounded-full border shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
);

export { Slider };
export type { SliderProps };
