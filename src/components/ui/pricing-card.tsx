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
      "relative rounded-xl border p-6 shadow-sm flex flex-col",
      featured && "border-primary shadow-md scale-105",
      className
    )}
    {...props}
  >
    {badgeText && (
      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{badgeText}</Badge>
    )}
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
    </div>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      {period && <span className="text-sm text-muted-foreground">{period}</span>}
    </div>
    <ul className="space-y-2 mb-8 flex-1">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 text-sm">
          <Check className="h-4 w-4 text-success shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    {action}
  </div>
);

export { PricingCard };
export type { PricingCardProps };
