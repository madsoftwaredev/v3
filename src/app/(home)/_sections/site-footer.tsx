import { Footer } from "@/components/ui/footer";

/**
 * Site footer — MAD Software branding with links to all sections.
 */
export const SiteFooter = () => (
  <Footer
    brand={
      <span className="text-xl font-bold tracking-tight">
        MAD<span className="text-primary">.</span>
      </span>
    }
    description="A Next.js starter kit by MAD Software. 58 components, 9 page templates, full design token system. Open source, MIT licensed."
    linkGroups={[
      {
        title: "Template",
        links: [
          { href: "/kitchen-sink", label: "Components" },
          { href: "/dashboard", label: "Dashboard" },
          { href: "/blog", label: "Blog" },
          { href: "/login", label: "Auth Pages" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "https://github.com/madsoftware/v3", label: "GitHub" },
          { href: "#what", label: "What's Included" },
          { href: "#stack", label: "Tech Stack" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        title: "MAD Software",
        links: [
          { href: "https://madsoftware.com", label: "Website" },
          { href: "https://github.com/madsoftware", label: "GitHub" },
        ],
      },
    ]}
    copyright={`\u00A9 ${new Date().getFullYear()} MAD Software. MIT License.`}
  />
);
