"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { dashboardNav } from "@/lib/constants";
import { Sidebar } from "./sidebar";

/**
 * Dashboard header — top bar with mobile sidebar trigger and theme toggle.
 */
export function DashboardHeader() {
  return (
    <header className="bg-card flex h-14 items-center gap-4 border-b px-4 lg:px-6">
      {/* Mobile sidebar trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Sidebar groups={dashboardNav} />
        </SheetContent>
      </Sheet>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right actions */}
      <ThemeToggle />
    </header>
  );
}
