import type { ReactNode } from "react";
import { Logo } from "@/components/ui/logo";
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
      <Navbar brand={<Logo size={28} />} links={[...mainNav]} actions={<ThemeToggle />} />
      <main className="flex-1">{children}</main>
    </>
  );
}
