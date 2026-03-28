import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Breadcrumb root nav element. */
const Breadcrumb = ({
  ...props
}: ComponentPropsWithoutRef<"nav"> & { separator?: React.ReactNode }) => (
  <nav aria-label="breadcrumb" {...props} />
);

/** Breadcrumb list — ordered list of items. */
const BreadcrumbList = ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
  <ol
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
);

/** Breadcrumb item — wraps link or page. */
const BreadcrumbItem = ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
  <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />
);

/** Breadcrumb link — clickable ancestor. */
const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
};

/** Breadcrumb page — current page (not clickable). */
const BreadcrumbPage = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
);

/** Breadcrumb separator — chevron between items. */
const BreadcrumbSeparator = ({ children, className, ...props }: HTMLAttributes<HTMLLIElement>) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);

/** Breadcrumb ellipsis — for collapsed items. */
const BreadcrumbEllipsis = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

export {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
};
