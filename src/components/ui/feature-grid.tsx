import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of features to display */
  features: Feature[];
  /** Number of columns */
  columns?: 2 | 3 | 4;
}

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * Feature grid — icon + title + description cards.
 *
 * @example
 * <FeatureGrid features={[
 *   { icon: <Zap />, title: "Fast", description: "Blazing fast performance." },
 * ]} />
 */
const FeatureGrid = ({
  features,
  columns = 3,
  className,
  ...props
}: FeatureGridProps) => (
  <div className={cn("grid gap-6", columnClasses[columns], className)} {...props}>
    {features.map((feature) => (
      <div key={feature.title} className="space-y-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {feature.icon}
        </div>
        <h3 className="font-semibold">{feature.title}</h3>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
    ))}
  </div>
);

export { FeatureGrid };
export type { FeatureGridProps, Feature };
