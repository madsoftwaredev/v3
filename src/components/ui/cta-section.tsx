import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaSectionProps extends HTMLAttributes<HTMLElement> {
  /** Headline */
  title: string;
  /** Description text */
  description?: string;
  /** CTA buttons */
  actions?: ReactNode;
  /** Visual variant */
  variant?: "default" | "filled";
}

/**
 * Call-to-action section — full-width banner with headline and buttons.
 *
 * @example
 * <CtaSection
 *   title="Ready to get started?"
 *   description="Join thousands of happy customers."
 *   variant="filled"
 *   actions={<Button size="lg">Start Free Trial</Button>}
 * />
 */
const CtaSection = ({
  title,
  description,
  actions,
  variant = "default",
  className,
  ...props
}: CtaSectionProps) => (
  <section
    className={cn(
      "rounded-xl px-6 py-16 text-center",
      variant === "filled" && "bg-primary text-primary-foreground",
      variant === "default" && "bg-card border",
      className,
    )}
    {...props}
  >
    <div className="mx-auto max-w-2xl space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-lg",
            variant === "filled" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
      {actions && <div className="flex flex-wrap justify-center gap-3 pt-2">{actions}</div>}
    </div>
  </section>
);

export { CtaSection };
export type { CtaSectionProps };
