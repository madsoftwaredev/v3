"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/ui/navbar";

/**
 * Site header — sticky navbar with anchor links + page links.
 */
export const SiteHeader = () => (
  <Navbar
    brand={
      <Link href="/" className="text-xl font-bold tracking-tight">
        MAD<span className="text-primary">.</span>
      </Link>
    }
    links={[
      { href: "#what", label: "What's Included" },
      { href: "#stack", label: "Tech Stack" },
      { href: "#faq", label: "FAQ" },
      { href: "/dashboard", label: "Dashboard" },
      { href: "/blog", label: "Blog" },
      { href: "/kitchen-sink", label: "Components" },
    ]}
    actions={
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button size="sm" variant="outline" className="hidden sm:inline-flex" asChild>
          <a href="https://github.com/madsoftware/v3" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    }
  />
);
