"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/ui/navbar";

/**
 * Site header — MAD Software branding with nav to real pages.
 */
export const SiteHeader = () => (
  <Navbar
    brand={
      <span className="text-xl font-bold tracking-tight">
        MAD<span className="text-primary">.</span>
      </span>
    }
    links={[
      { href: "#what", label: "What's Included" },
      { href: "#stack", label: "Tech Stack" },
      { href: "#faq", label: "FAQ" },
      { href: "/kitchen-sink", label: "Kitchen Sink" },
    ]}
    actions={
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button size="sm" className="hidden sm:inline-flex" asChild>
          <a href="https://github.com/madsoftware/v3" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    }
  />
);
