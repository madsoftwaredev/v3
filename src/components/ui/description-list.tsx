import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Description list root. */
const DescriptionList = ({ className, ...props }: HTMLAttributes<HTMLDListElement>) => (
  <dl className={cn("divide-y divide-border", className)} {...props} />
);

/** Description list item — wraps term + details. */
const DescriptionListItem = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-0 py-4 sm:grid sm:grid-cols-3 sm:gap-4", className)} {...props} />
);

/** Description term — the label. */
const DescriptionTerm = ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
  <dt className={cn("text-sm font-medium text-foreground", className)} {...props} />
);

/** Description details — the value. */
const DescriptionDetails = ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
  <dd className={cn("mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0", className)} {...props} />
);

export { DescriptionList, DescriptionListItem, DescriptionTerm, DescriptionDetails };
