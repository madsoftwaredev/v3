/**
 * Site-wide constants — single source of truth for metadata, navigation, and config.
 * Update these values to rebrand the entire starter kit.
 */

export const siteConfig = {
  name: "MAD Software",
  description:
    "Next.js starter kit with a 57-component design system, design tokens, and dark mode.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  creator: "MAD Software",
  github: "https://github.com/madsoftwaredev/v3",
} as const;

/** Primary navigation links — used by Navbar across all layouts */
export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/kitchen-sink", label: "Components" },
] as const;

/** Dashboard sidebar navigation */
export const dashboardNav = [
  {
    title: "Overview",
    items: [{ href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" }],
  },
  {
    title: "Settings",
    items: [
      { href: "/settings", label: "General", icon: "Settings" },
      { href: "/settings/appearance", label: "Appearance", icon: "Palette" },
      { href: "/settings/notifications", label: "Notifications", icon: "Bell" },
    ],
  },
] as const;
