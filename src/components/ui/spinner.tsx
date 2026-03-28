import { cn } from "@/lib/utils";

interface SpinnerProps {
  /** Size of the spinner */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const spinnerSizes = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-4",
} as const;

/**
 * Standalone loading spinner.
 *
 * @example
 * <Spinner size="md" />
 */
const Spinner = ({ size = "md", className }: SpinnerProps) => (
  <div
    role="status"
    aria-label="Loading"
    className={cn(
      "animate-spin rounded-full border-primary/30 border-t-primary",
      spinnerSizes[size],
      className
    )}
  >
    <span className="sr-only">Loading...</span>
  </div>
);

export { Spinner };
export type { SpinnerProps };
