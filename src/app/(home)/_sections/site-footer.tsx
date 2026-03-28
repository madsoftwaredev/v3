import { Footer } from "@/components/ui/footer";

/**
 * Site footer — multi-column links with copyright.
 * Replace brand, links, and socials per project.
 */
export const SiteFooter = () => (
  <Footer
    brand={
      <span className="text-xl font-bold tracking-tight">
        Acme<span className="text-primary">.</span>
      </span>
    }
    description="The modern frontend starter kit. Built with Next.js, Tailwind CSS v4, and Radix UI."
    linkGroups={[
      {
        title: "Product",
        links: [
          { href: "#features", label: "Features" },
          { href: "#pricing", label: "Pricing" },
          { href: "/kitchen-sink", label: "Components" },
          { href: "#", label: "Changelog" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "#", label: "Documentation" },
          { href: "#faq", label: "FAQ" },
          { href: "#", label: "Blog" },
          { href: "#", label: "Support" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "#", label: "About" },
          { href: "#", label: "Careers" },
          { href: "#", label: "Privacy" },
          { href: "#", label: "Terms" },
        ],
      },
    ]}
    copyright={`© ${new Date().getFullYear()} Acme Inc. All rights reserved.`}
  />
);
