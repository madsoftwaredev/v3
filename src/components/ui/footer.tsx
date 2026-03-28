import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FooterLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

interface FooterProps {
  /** Brand logo or text */
  brand: ReactNode;
  /** Description text */
  description?: string;
  /** Link groups for multi-column layout */
  linkGroups?: FooterLinkGroup[];
  /** Social links (icons) */
  socials?: ReactNode;
  /** Copyright text */
  copyright?: string;
  className?: string;
}

/**
 * Multi-column footer with link groups and social icons.
 *
 * @example
 * <Footer
 *   brand="MAD Software"
 *   description="Building great software."
 *   linkGroups={[{ title: "Product", links: [{ href: "/features", label: "Features" }] }]}
 *   copyright="2026 MAD Software. All rights reserved."
 * />
 */
const Footer = ({
  brand,
  description,
  linkGroups = [],
  socials,
  copyright,
  className,
}: FooterProps) => (
  <footer className={cn("bg-background border-t", className)}>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-2 text-lg font-semibold">{brand}</div>
          {description && <p className="text-muted-foreground max-w-xs text-sm">{description}</p>}
          {socials && <div className="mt-4 flex gap-3">{socials}</div>}
        </div>

        {/* Link groups */}
        {linkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      {copyright && (
        <div className="mt-12 border-t pt-6">
          <p className="text-muted-foreground text-xs">{copyright}</p>
        </div>
      )}
    </div>
  </footer>
);

export { Footer };
export type { FooterProps, FooterLinkGroup };
