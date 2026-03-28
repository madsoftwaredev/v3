import {
  Blocks, Code2, Moon, Paintbrush, Shield, Zap,
} from "lucide-react";
import { Container } from "@/components/layout";
import { FeatureGrid } from "@/components/ui/feature-grid";

/**
 * Features grid — 6 features in a 3-column layout.
 * Swap icons, titles, and descriptions per project.
 */
export const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28">
    <Container size="lg">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-2">Features</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to ship
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          A complete toolkit so you can focus on what matters — your product.
        </p>
      </div>

      <FeatureGrid
        columns={3}
        features={[
          {
            icon: <Blocks className="h-5 w-5" />,
            title: "57+ Components",
            description:
              "From buttons to command palettes. Every component you need, ready to compose.",
          },
          {
            icon: <Paintbrush className="h-5 w-5" />,
            title: "Design Tokens",
            description:
              "Change one CSS variable and the entire system updates. oklch colors, spacing, radius — all tokenized.",
          },
          {
            icon: <Moon className="h-5 w-5" />,
            title: "Dark Mode",
            description:
              "Class-based dark mode with next-themes. Light, dark, and system — out of the box.",
          },
          {
            icon: <Code2 className="h-5 w-5" />,
            title: "TypeScript First",
            description:
              "Every component is fully typed with CVA variants. Autocomplete just works.",
          },
          {
            icon: <Shield className="h-5 w-5" />,
            title: "Accessible",
            description:
              "Built on Radix UI primitives. Keyboard navigation, screen readers, ARIA — handled.",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Zero Runtime",
            description:
              "Tailwind CSS v4 + CSS variables. No runtime CSS-in-JS. Fast by default.",
          },
        ]}
      />
    </Container>
  </section>
);
