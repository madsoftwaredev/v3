import {
  Blocks,
  FileCode2,
  LayoutDashboard,
  Moon,
  Paintbrush,
  ShieldCheck,
  TestTube,
  Zap,
} from "lucide-react";
import { Container } from "@/components/layout";
import { FeatureGrid } from "@/components/ui/feature-grid";

/**
 * What's included — the full feature set of the starter kit.
 */
export const FeaturesSection = () => (
  <section id="what" className="py-20 md:py-28">
    <Container size="lg">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-primary mb-2 text-sm font-semibold">What&apos;s Included</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you keep rebuilding, already done
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Components, page templates, auth flows, data fetching, validation, testing — the full
          stack, wired together properly.
        </p>
      </div>

      <FeatureGrid
        columns={3}
        features={[
          {
            icon: <Blocks className="h-5 w-5" />,
            title: "58 Components",
            description:
              "Buttons, Cards, Dialogs, Tables, Command Palette, Carousel, Toasts — all built on Radix UI with CVA variants and design tokens.",
          },
          {
            icon: <LayoutDashboard className="h-5 w-5" />,
            title: "9 Page Templates",
            description:
              "Login, register, forgot password, dashboard with sidebar, settings with tabs, blog list and detail, 404, and error boundary.",
          },
          {
            icon: <Paintbrush className="h-5 w-5" />,
            title: "Design Token System",
            description:
              "Every color, radius, and shadow is a CSS variable in oklch. Change globals.css and the entire app rebrands.",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Data Fetching & Forms",
            description:
              "TanStack Query hooks for API calls, React Hook Form with Zod validation, typed fetch client — no axios needed.",
          },
          {
            icon: <Moon className="h-5 w-5" />,
            title: "Dark Mode",
            description:
              "Class-based via next-themes. Light, dark, and system detection. Every component has tested dark mode styles.",
          },
          {
            icon: <TestTube className="h-5 w-5" />,
            title: "Testing & CI",
            description:
              "Vitest + React Testing Library for units, Playwright for E2E, GitHub Actions CI pipeline. Pre-commit hooks with Husky.",
          },
          {
            icon: <FileCode2 className="h-5 w-5" />,
            title: "TypeScript + CVA",
            description:
              "Strict mode TypeScript. Class-variance-authority for type-safe component variants with full autocomplete.",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            title: "Accessible",
            description:
              "Radix UI handles keyboard nav, focus management, and ARIA. Security headers in next.config.ts. WCAG AA compliant.",
          },
        ]}
      />
    </Container>
  </section>
);
