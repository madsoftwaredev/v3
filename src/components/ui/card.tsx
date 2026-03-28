import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

/** Card container with border and shadow from design tokens. */
const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn("bg-card text-card-foreground rounded-xl border shadow-sm", className)}
    {...props}
  />
);

/** Card header section — contains title and description. */
const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

/** Card title — renders as h3 by default. */
const CardTitle = ({ className, ...props }: CardProps) => (
  <h3 className={cn("leading-none font-semibold tracking-tight", className)} {...props} />
);

/** Card description — muted text below the title. */
const CardDescription = ({ className, ...props }: CardProps) => (
  <p className={cn("text-muted-foreground text-sm", className)} {...props} />
);

/** Card content area — main body. */
const CardContent = ({ className, ...props }: CardProps) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

/** Card footer — actions, buttons, links. */
const CardFooter = ({ className, ...props }: CardProps) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
