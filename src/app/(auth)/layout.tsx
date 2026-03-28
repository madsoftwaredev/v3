import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Auth layout — centered card on a minimal background.
 * No navbar, no sidebar. Just the form + a theme toggle.
 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
