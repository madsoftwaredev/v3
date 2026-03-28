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
 * What's included — focused on what you don't have to build.
 */
export const FeaturesSection = () => (
  <section id="what" className="py-20 md:py-28">
    <Container size="lg">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-primary mb-2 text-sm font-semibold">What&apos;s Included</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The parts you won&apos;t have to write
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Not a UI kit. A working codebase — components, pages, data fetching, and a design system
          all wired up and ready to extend.
        </p>
      </div>

      <FeatureGrid
        columns={3}
        features={[
          {
            icon: <Blocks className="h-5 w-5" />,
            title: "58 UI Components",
            description:
              "Buttons, cards, dialogs, tables, command palette, toasts, carousels — built on Radix UI with CVA variants. Just import and use.",
          },
          {
            icon: <LayoutDashboard className="h-5 w-5" />,
            title: "9 Page Templates",
            description:
              "Login, register, forgot password, dashboard with sidebar, settings with tabs, blog, 404, and error boundary. Delete what you don't need.",
          },
          {
            icon: <Paintbrush className="h-5 w-5" />,
            title: "Rebrand in One File",
            description:
              "Every color is a CSS variable in globals.css. Change the values, everything updates. Zero hardcoded colors anywhere.",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Forms & Data Fetching",
            description:
              "React Hook Form with Zod, TanStack Query for server state, a typed fetch client. The patterns are set — just plug in your API.",
          },
          {
            icon: <Moon className="h-5 w-5" />,
            title: "Dark Mode",
            description:
              "Light, dark, and system — class-based via next-themes. Every component is built for both. No extra work.",
          },
          {
            icon: <TestTube className="h-5 w-5" />,
            title: "Testing & CI",
            description:
              "Vitest + React Testing Library, Playwright for E2E, GitHub Actions pipeline. Pre-commit hooks run lint and format automatically.",
          },
          {
            icon: <FileCode2 className="h-5 w-5" />,
            title: "Strict TypeScript",
            description:
              "Strict mode throughout. CVA for type-safe variants with autocomplete. No any, no shortcuts.",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            title: "Accessible by Default",
            description:
              "Radix UI handles keyboard nav, focus traps, and ARIA. Security headers baked into next.config.ts.",
          },
        ]}
      />
    </Container>
  </section>
);
