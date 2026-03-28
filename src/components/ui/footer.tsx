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
  <footer className={cn("border-t bg-background", className)}>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="font-semibold text-lg mb-2">{brand}</div>
          {description && (
            <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
          )}
          {socials && <div className="mt-4 flex gap-3">{socials}</div>}
        </div>

        {/* Link groups */}
        {linkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold mb-3">{group.title}</h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          <p className="text-xs text-muted-foreground">{copyright}</p>
        </div>
      )}
    </div>
  </footer>
);

export { Footer };
export type { FooterProps, FooterLinkGroup };
