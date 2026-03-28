import {
  Blocks, FileCode2, Moon, Paintbrush, Keyboard, Gauge,
} from "lucide-react";
import { Container } from "@/components/layout";
import { FeatureGrid } from "@/components/ui/feature-grid";

/**
 * What's included — real features of this template.
 */
export const FeaturesSection = () => (
  <section id="what" className="py-20 md:py-28">
    <Container size="lg">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-2">What&apos;s Included</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you keep rebuilding, already done
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          We got tired of setting up the same Tailwind config, the same Button component,
          the same dark mode toggle. So we built it once, properly.
        </p>
      </div>

      <FeatureGrid
        columns={3}
        features={[
          {
            icon: <Blocks className="h-5 w-5" />,
            title: "57 Components",
            description:
              "Button, Card, Dialog, Command Palette, Carousel, Resizable Panels, Toast — and 50 more. All built on Radix UI primitives.",
          },
          {
            icon: <Paintbrush className="h-5 w-5" />,
            title: "Design Token System",
            description:
              "Every color, radius, and shadow is a CSS variable. Change globals.css and the entire system updates. oklch color space for perceptual uniformity.",
          },
          {
            icon: <Moon className="h-5 w-5" />,
            title: "Dark Mode",
            description:
              "Class-based dark mode via next-themes. Light, dark, and system preference. Every component has tested dark mode styles.",
          },
          {
            icon: <FileCode2 className="h-5 w-5" />,
            title: "TypeScript + CVA",
            description:
              "Every component is fully typed. Variants use class-variance-authority so you get autocomplete for every prop.",
          },
          {
            icon: <Keyboard className="h-5 w-5" />,
            title: "Accessible",
            description:
              "Radix UI handles keyboard navigation, focus management, screen reader support, and ARIA attributes. WCAG AA compliant.",
          },
          {
            icon: <Gauge className="h-5 w-5" />,
            title: "Zero Runtime CSS",
            description:
              "Tailwind CSS v4 with no CSS-in-JS runtime. CSS variables for theming. Fast by default — nothing to optimize away.",
          },
        ]}
      />
    </Container>
  </section>
);
