import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of stats to display */
  stats: Stat[];
}

/**
 * Stats bar — key numbers in a row.
 *
 * @example
 * <StatsBar stats={[
 *   { value: "50+", label: "Clients" },
 *   { value: "99.9%", label: "Uptime" },
 * ]} />
 */
const StatsBar = ({ stats, className, ...props }: StatsBarProps) => (
  <div
    className={cn(
      "grid grid-cols-2 gap-8 md:grid-cols-4",
      className
    )}
    {...props}
  >
    {stats.map((stat) => (
      <div key={stat.label} className="text-center">
        <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
        <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
      </div>
    ))}
  </div>
);

export { StatsBar };
export type { StatsBarProps, Stat };
