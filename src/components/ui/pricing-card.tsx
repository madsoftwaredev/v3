import { Check } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Plan name */
  name: string;
  /** Price display (e.g., "$29") */
  price: string;
  /** Billing period (e.g., "/month") */
  period?: string;
  /** Plan description */
  description?: string;
  /** Feature list */
  features: string[];
  /** CTA button */
  action: ReactNode;
  /** Whether this plan is highlighted */
  featured?: boolean;
  /** Badge text (e.g., "Popular") */
  badge?: string;
}

/**
 * Pricing card — single plan with features and CTA.
 *
 * @example
 * <PricingCard
 *   name="Pro"
 *   price="$29"
 *   period="/month"
 *   features={["Unlimited projects", "Priority support"]}
 *   action={<Button>Get Started</Button>}
 *   featured
 *   badge="Popular"
 * />
 */
const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  action,
  featured = false,
  badge: badgeText,
  className,
  ...props
}: PricingCardProps) => (
  <div
    className={cn(
      "relative flex flex-col rounded-xl border p-6 shadow-sm",
      featured && "border-primary scale-105 shadow-md",
      className,
    )}
    {...props}
  >
    {badgeText && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{badgeText}</Badge>}
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
    </div>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      {period && <span className="text-muted-foreground text-sm">{period}</span>}
    </div>
    <ul className="mb-8 flex-1 space-y-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 text-sm">
          <Check className="text-success h-4 w-4 shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    {action}
  </div>
);

export { PricingCard };
export type { PricingCardProps };
