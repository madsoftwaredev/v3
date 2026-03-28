import type { ReactNode } from "react";
import { dashboardNav } from "@/lib/constants";
import { DashboardHeader } from "./_components/dashboard-header";
import { Sidebar } from "./_components/sidebar";

/**
 * Dashboard layout — sidebar on desktop, hamburger on mobile.
 * All dashboard routes (dashboard, settings, etc.) are nested inside this layout.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar — hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar groups={dashboardNav} />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
