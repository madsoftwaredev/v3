import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Max width variant */
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "max-w-full",
} as const;

/**
 * Centered content container with responsive padding.
 *
 * @example
 * <Container size="lg">
 *   <h1>Page content</h1>
 * </Container>
 */
const Container = ({
  className,
  size = "lg",
  ...props
}: ContainerProps) => (
  <div
    className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", containerSizes[size], className)}
    {...props}
  />
);

export { Container };
export type { ContainerProps };
