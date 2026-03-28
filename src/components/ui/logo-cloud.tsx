import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LogoCloudProps extends HTMLAttributes<HTMLDivElement> {
  /** Title above the logos */
  title?: string;
  /** Logo elements (images, SVGs, or text) */
  logos: ReactNode[];
}

/**
 * Logo cloud — row of partner/client logos.
 *
 * @example
 * <LogoCloud
 *   title="Trusted by"
 *   logos={[<img src="/logo1.svg" alt="Company 1" />, ...]}
 * />
 */
const LogoCloud = ({ title, logos, className, ...props }: LogoCloudProps) => (
  <div className={cn("py-8", className)} {...props}>
    {title && <p className="text-muted-foreground mb-8 text-center text-sm font-medium">{title}</p>}
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      {logos.map((logo, i) => (
        <div
          key={i}
          className="text-muted-foreground hover:text-foreground flex items-center transition-colors"
        >
          {logo}
        </div>
      ))}
    </div>
  </div>
);

export { LogoCloud };
export type { LogoCloudProps };
