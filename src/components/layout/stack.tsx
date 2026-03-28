import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between children */
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  /** Direction */
  direction?: "vertical" | "horizontal";
  /** Alignment */
  align?: "start" | "center" | "end" | "stretch";
}

const gapSizes = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

const alignments = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

/**
 * Flex layout primitive for stacking elements.
 *
 * @example
 * <Stack gap="md">
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </Stack>
 *
 * <Stack direction="horizontal" gap="sm" align="center">
 *   <Avatar />
 *   <span>Username</span>
 * </Stack>
 */
const Stack = ({
  className,
  gap = "md",
  direction = "vertical",
  align = "stretch",
  ...props
}: StackProps) => (
  <div
    className={cn(
      "flex",
      direction === "vertical" ? "flex-col" : "flex-row",
      gapSizes[gap],
      alignments[align],
      className,
    )}
    {...props}
  />
);

export { Stack };
export type { StackProps };
