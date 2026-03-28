import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Vertical padding size */
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacingSizes = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
} as const;

/**
 * Page section with consistent vertical spacing.
 *
 * @example
 * <Section spacing="lg">
 *   <Container>
 *     <h2>Section title</h2>
 *   </Container>
 * </Section>
 */
const Section = ({
  className,
  spacing = "md",
  ...props
}: SectionProps) => (
  <section
    className={cn(spacingSizes[spacing], className)}
    {...props}
  />
);

export { Section };
export type { SectionProps };
