import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps extends HTMLAttributes<HTMLElement> {
  /** Headline text */
  title: string;
  /** Subtitle / description */
  description?: string;
  /** CTA buttons or other actions */
  actions?: ReactNode;
  /** Alignment */
  align?: "left" | "center";
  /** Badge above the title */
  badge?: ReactNode;
}

/**
 * Hero section — full-width headline with CTA.
 *
 * @example
 * <Hero
 *   badge={<Badge>New</Badge>}
 *   title="Build something great"
 *   description="A modern design system for your next project."
 *   actions={<Button size="lg">Get Started</Button>}
 * />
 */
const Hero = ({
  title,
  description,
  actions,
  align = "center",
  badge,
  className,
  ...props
}: HeroProps) => (
  <section
    className={cn("py-20 md:py-32", align === "center" && "text-center", className)}
    {...props}
  >
    <div
      className={cn(
        "mx-auto max-w-4xl space-y-6",
        align === "center" && "flex flex-col items-center",
      )}
    >
      {badge && <div>{badge}</div>}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">{description}</p>
      )}
      {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
    </div>
  </section>
);

export { Hero };
export type { HeroProps };
