import type { Metadata } from "next";
import { siteConfig } from "./constants";

/**
 * Creates a Next.js Metadata object with sensible defaults.
 * Merges provided overrides with site-wide defaults from `siteConfig`.
 *
 * @example
 * // In a page:
 * export const metadata = createMetadata({
 *   title: "Dashboard",
 *   description: "View your stats and recent activity.",
 * });
 */
export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title ?? siteConfig.name;
  const description = overrides.description ?? siteConfig.description;

  return {
    title: {
      default: typeof title === "string" ? title : siteConfig.name,
      template: `%s — ${siteConfig.name}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: typeof title === "string" ? title : siteConfig.name,
      description: typeof description === "string" ? description : undefined,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      ...((overrides.openGraph as object) ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : siteConfig.name,
      description: typeof description === "string" ? description : undefined,
      images: [siteConfig.ogImage],
      ...((overrides.twitter as object) ?? {}),
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
