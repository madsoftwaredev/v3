import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

/**
 * robots.txt generation — allow all crawlers, point to sitemap.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/settings"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
