"use client";

import {
  Bell,
  LayoutDashboard,
  LogOut,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/** Icon map — maps string names from constants to Lucide components */
const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Settings,
  Palette,
  Bell,
};

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

interface NavGroup {
  title: string;
  items: readonly NavItem[];
}

interface SidebarProps {
  groups: readonly NavGroup[];
  className?: string;
}

/**
 * Dashboard sidebar — collapsible, with grouped navigation items.
 * Uses the pathname to highlight the active link.
 */
export function Sidebar({ groups, className }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "bg-card flex h-full flex-col border-r transition-[width] duration-200",
        collapsed ? "w-16" : "w-64",
        className,
      )}
    >
      {/* Header */}
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!collapsed && <span className="text-sm font-semibold">Dashboard</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(collapsed && "mx-auto")}
        >
          {collapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
          <span className="sr-only">{collapsed ? "Expand" : "Collapse"} sidebar</span>
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-2">
        {groups.map((group) => (
          <div key={group.title} className="px-3 py-2">
            {!collapsed && (
              <p className="text-muted-foreground mb-2 px-2 text-xs font-medium tracking-wider uppercase">
                {group.title}
              </p>
            )}
            <nav className="space-y-1">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon] ?? LayoutDashboard;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      collapsed && "justify-center px-0",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </ScrollArea>

      {/* Footer */}
      <Separator />
      <div className="p-3">
        <Button
          variant="ghost"
          className={cn("w-full justify-start gap-3", collapsed && "justify-center px-0")}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Sign out</span>}
        </Button>
      </div>
    </aside>
  );
}
