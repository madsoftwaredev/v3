import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ColorsSection } from "./_sections/colors-section";
import { TypographySection } from "./_sections/typography-section";
import { SpacingSection } from "./_sections/spacing-section";
import { ButtonsSection } from "./_sections/buttons-section";
import { FormsSection } from "./_sections/forms-section";
import { CardsSection } from "./_sections/cards-section";
import { FeedbackSection } from "./_sections/feedback-section";
import { DataSection } from "./_sections/data-section";
import { DialogSection } from "./_sections/dialog-section";
import { NavigationSection } from "./_sections/navigation-section";
import { ContentSection } from "./_sections/content-section";
import { MarketingSection } from "./_sections/marketing-section";
import { ExtendedFeedbackSection } from "./_sections/extended-feedback-section";
import { ExtendedDataSection } from "./_sections/extended-data-section";
import { ExtendedFormsSection } from "./_sections/extended-forms-section";
import { MiscSection } from "./_sections/misc-section";
import { ComposableSection } from "./_sections/composable-section";
import { MenusSection } from "./_sections/menus-section";
import { ResizableSection } from "./_sections/resizable-section";
import { CommandToastSection } from "./_sections/command-toast-section";

/**
 * Kitchen Sink — the complete design system reference.
 * Every component, token, and variant rendered on one page.
 *
 * Route: /kitchen-sink
 */

const categories = [
  {
    label: "Foundations",
    sections: [
      { id: "colors", title: "Colors", desc: "Semantic color tokens", component: ColorsSection },
      { id: "typography", title: "Typography", desc: "Type scale & weights", component: TypographySection },
      { id: "spacing", title: "Spacing", desc: "Scale, radius & shadows", component: SpacingSection },
    ],
  },
  {
    label: "Actions",
    sections: [
      { id: "buttons", title: "Buttons", desc: "9 variants × 5 sizes", component: ButtonsSection },
      { id: "forms", title: "Forms", desc: "Inputs, selects, toggles", component: FormsSection },
      { id: "extended-forms", title: "Extended Forms", desc: "Radio, slider, upload, search", component: ExtendedFormsSection },
    ],
  },
  {
    label: "Display",
    sections: [
      { id: "cards", title: "Cards", desc: "Content containers", component: CardsSection },
      { id: "feedback", title: "Feedback", desc: "Alerts, badges, avatars", component: FeedbackSection },
      { id: "extended-feedback", title: "Progress & States", desc: "Loaders, empty, error", component: ExtendedFeedbackSection },
      { id: "data", title: "Data Display", desc: "Tabs & accordion", component: DataSection },
      { id: "extended-data", title: "Tables & Timeline", desc: "Table, list, timeline, scroll", component: ExtendedDataSection },
    ],
  },
  {
    label: "Overlays",
    sections: [
      { id: "dialogs", title: "Dialogs", desc: "Modal & confirmation", component: DialogSection },
      { id: "composable", title: "Primitives", desc: "Popover, toggle, hover card", component: ComposableSection },
      { id: "menus", title: "Menus", desc: "Context menu & menubar", component: MenusSection },
      { id: "command-toast", title: "Command & Toast", desc: "⌘K palette & notifications", component: CommandToastSection },
    ],
  },
  {
    label: "Layout",
    sections: [
      { id: "resizable", title: "Resizable", desc: "Split pane panels", component: ResizableSection },
      { id: "misc", title: "Carousel & More", desc: "Carousel, aspect ratio, sheet", component: MiscSection },
      { id: "navigation", title: "Navigation", desc: "Navbar, footer, breadcrumbs", component: NavigationSection },
    ],
  },
  {
    label: "Sections",
    sections: [
      { id: "content", title: "Content Blocks", desc: "Hero, features, testimonials", component: ContentSection },
      { id: "marketing", title: "Marketing", desc: "Pricing, CTA, FAQ, newsletter", component: MarketingSection },
    ],
  },
];

type Section = { id: string; title: string; desc: string; component: () => React.JSX.Element };
type Category = { label: string; sections: Section[] };

const allSections = (categories as Category[]).flatMap((c) => c.sections);

export default function KitchenSinkPage() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold">Kitchen Sink</h1>
            </div>
            <Badge variant="secondary" className="hidden md:inline-flex text-xs">
              {allSections.length} sections · 57 components
            </Badge>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto max-w-screen-2xl flex">
        {/* Sidebar nav */}
        <aside className="hidden lg:block w-56 shrink-0 border-r sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4">
          <nav className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {cat.label}
                </p>
                <ul className="space-y-0.5">
                  {cat.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile nav */}
        <div className="lg:hidden sticky top-14 z-40 w-full border-b bg-background/95 backdrop-blur">
          <nav className="flex gap-1.5 overflow-x-auto px-4 py-2 scrollbar-none">
            {allSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
          {/* Intro */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Component Reference</h2>
            <p className="mt-2 text-muted-foreground text-lg leading-relaxed">
              Every component and design token in the system, organized by category.
              Use this page to verify visual consistency and test theme changes.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat.label}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-10">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {cat.label}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="space-y-16">
                  {cat.sections.map((s) => (
                    <section key={s.id} id={s.id} className="scroll-mt-28">
                      <div className="mb-6">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          {s.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          {s.desc}
                        </p>
                      </div>
                      <div className="rounded-xl border bg-card p-6 md:p-8">
                        <s.component />
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              Built with Next.js, Tailwind CSS v4, and Radix UI.{" "}
              <Link href="/" className="text-primary hover:underline underline-offset-4">
                Back to homepage
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
