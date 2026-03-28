import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorFallbackProps {
  /** Error message to display */
  message?: string;
  /** Retry handler */
  onRetry?: () => void;
  className?: string;
}

/**
 * Error fallback UI — shown when something goes wrong.
 * Use inside Next.js error.tsx or React error boundaries.
 *
 * @example
 * // In app/error.tsx:
 * export default function Error({ error, reset }) {
 *   return <ErrorFallback message={error.message} onRetry={reset} />;
 * }
 */
const ErrorFallback = ({
  message = "Something went wrong",
  onRetry,
  className,
}: ErrorFallbackProps) => (
  <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
    <div className="bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
      <AlertTriangle className="text-destructive h-8 w-8" />
    </div>
    <h2 className="mb-2 text-xl font-semibold">Oops!</h2>
    <p className="text-muted-foreground mb-6 max-w-md text-sm">{message}</p>
    {onRetry && (
      <Button onClick={onRetry} variant="outline">
        Try again
      </Button>
    )}
  </div>
);

export { ErrorFallback };
export type { ErrorFallbackProps };
