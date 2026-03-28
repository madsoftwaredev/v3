"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  /** Brand logo or text */
  brand: ReactNode;
  /** Navigation links */
  links: NavLink[];
  /** Right-side actions (e.g., ThemeToggle, CTA button) */
  actions?: ReactNode;
  /** Additional className */
  className?: string;
}

/**
 * Responsive navbar with mobile hamburger menu.
 *
 * @example
 * <Navbar
 *   brand={<span className="font-bold">MAD</span>}
 *   links={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]}
 *   actions={<ThemeToggle />}
 * />
 */
const Navbar = ({ brand, links, actions, className }: NavbarProps) => (
  <header
    className={cn(
      "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur",
      className,
    )}
  >
    <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
      {/* Brand */}
      <Link href="/" className="mr-6 flex items-center gap-2 font-semibold">
        {brand}
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex md:flex-1 md:items-center md:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex flex-1 items-center justify-end gap-2">
        {actions}

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="mt-8 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary text-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

export { Navbar };
export type { NavbarProps, NavLink };
