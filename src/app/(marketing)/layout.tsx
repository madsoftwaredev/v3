import type { ReactNode } from "react";
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { mainNav } from "@/lib/constants";

/**
 * Marketing layout — shared navbar for public pages (blog, etc.).
 * Uses the same Navbar component as the homepage but in its own route group.
 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar
        brand={<span className="text-lg font-bold">MAD</span>}
        links={[...mainNav]}
        actions={<ThemeToggle />}
      />
      <main className="flex-1">{children}</main>
    </>
  );
}
