import { Footer } from "@/components/ui/footer";

/**
 * Site footer — MAD Software branding with real links.
 */
export const SiteFooter = () => (
  <Footer
    brand={
      <span className="text-xl font-bold tracking-tight">
        MAD<span className="text-primary">.</span>
      </span>
    }
    description="A Next.js frontend template by MAD Software. Open source, MIT licensed."
    linkGroups={[
      {
        title: "Template",
        links: [
          { href: "/kitchen-sink", label: "Kitchen Sink" },
          { href: "#what", label: "What's Included" },
          { href: "#stack", label: "Tech Stack" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "https://github.com/madsoftware/v3", label: "GitHub" },
          { href: "https://nextjs.org/docs", label: "Next.js Docs" },
          { href: "https://tailwindcss.com/docs", label: "Tailwind Docs" },
          { href: "https://www.radix-ui.com", label: "Radix UI" },
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
    copyright={`© ${new Date().getFullYear()} MAD Software. MIT License.`}
  />
);
