"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/ui/navbar";

/**
 * Site header — sticky navbar with nav links, CTA, and theme toggle.
 * Swap brand, links, and CTA to match your project.
 */
export const SiteHeader = () => (
  <Navbar
    brand={
      <span className="text-xl font-bold tracking-tight">
        Acme<span className="text-primary">.</span>
      </span>
    }
    links={[
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#faq", label: "FAQ" },
    ]}
    actions={
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button size="sm" className="hidden sm:inline-flex" asChild>
          <Link href="/kitchen-sink">Get Started</Link>
        </Button>
      </div>
    }
  />
);
