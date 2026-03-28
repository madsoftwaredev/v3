import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon to display */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Action button or link */
  action?: ReactNode;
}

/**
 * Empty state placeholder for when there's no data.
 *
 * @example
 * <EmptyState
 *   icon={<Inbox className="h-10 w-10" />}
 *   title="No messages"
 *   description="You don't have any messages yet."
 *   action={<Button>Compose</Button>}
 * />
 */
const EmptyState = ({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center py-12 text-center",
      className
    )}
    {...props}
  >
    {icon && (
      <div className="mb-4 text-muted-foreground">{icon}</div>
    )}
    <h3 className="text-lg font-semibold">{title}</h3>
    {description && (
      <p className="mt-1 text-sm text-muted-foreground max-w-sm">{description}</p>
    )}
    {action && <div className="mt-4">{action}</div>}
  </div>
);

export { EmptyState };
export type { EmptyStateProps };
