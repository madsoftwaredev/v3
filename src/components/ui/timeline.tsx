import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Timeline root — vertical list of events. */
const Timeline = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative space-y-0", className)} {...props} />
);

interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon or dot for the timeline marker */
  icon?: ReactNode;
  /** Whether this is the last item (hides the connecting line) */
  isLast?: boolean;
}

/** Timeline item — single event with marker and content. */
const TimelineItem = ({
  icon,
  isLast = false,
  className,
  children,
  ...props
}: TimelineItemProps) => (
  <div className={cn("relative flex gap-4 pb-8", isLast && "pb-0", className)} {...props}>
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
    )}
    {/* Marker */}
    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground">
      {icon ?? <div className="h-2 w-2 rounded-full bg-primary" />}
    </div>
    {/* Content */}
    <div className="flex-1 pt-0.5">{children}</div>
  </div>
);

/** Timeline item title. */
const TimelineTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className={cn("text-sm font-semibold", className)} {...props} />
);

/** Timeline item description. */
const TimelineDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground mt-0.5", className)} {...props} />
);

/** Timeline item timestamp. */
const TimelineTime = ({ className, ...props }: HTMLAttributes<HTMLTimeElement>) => (
  <time className={cn("text-xs text-muted-foreground", className)} {...props} />
);

export { Timeline, TimelineItem, TimelineTitle, TimelineDescription, TimelineTime };
