import { Container } from "@/components/layout";
import { Separator } from "@/components/ui/separator";
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

/**
 * Kitchen Sink — every component and design token rendered on one page.
 * Use this to verify visual consistency and test theme changes.
 *
 * Route: /kitchen-sink
 */

const sections = [
  { id: "colors", title: "Colors", component: ColorsSection },
  { id: "typography", title: "Typography", component: TypographySection },
  { id: "spacing", title: "Spacing & Radius", component: SpacingSection },
  { id: "buttons", title: "Buttons", component: ButtonsSection },
  { id: "forms", title: "Form Controls", component: FormsSection },
  { id: "extended-forms", title: "Extended Forms", component: ExtendedFormsSection },
  { id: "cards", title: "Cards", component: CardsSection },
  { id: "feedback", title: "Feedback", component: FeedbackSection },
  { id: "extended-feedback", title: "Progress & States", component: ExtendedFeedbackSection },
  { id: "data", title: "Data Display", component: DataSection },
  { id: "extended-data", title: "Tables & Timeline", component: ExtendedDataSection },
  { id: "dialogs", title: "Dialogs", component: DialogSection },
  { id: "navigation", title: "Navigation", component: NavigationSection },
  { id: "content", title: "Content Blocks", component: ContentSection },
  { id: "marketing", title: "Marketing", component: MarketingSection },
  { id: "misc", title: "Carousel & More", component: MiscSection },
] as const;

export default function KitchenSinkPage() {
  return (
    <Container size="xl" className="py-8 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kitchen Sink</h1>
          <p className="text-muted-foreground mt-1">
            Every component and design token in the system — {sections.length} sections.
          </p>
        </div>
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-2 mb-8 sticky top-0 z-40 bg-background/95 backdrop-blur py-3 -mx-4 px-4 border-b">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-sm px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {s.title}
            </h2>
            <s.component />
            <Separator className="mt-16" />
          </section>
        ))}
      </div>
    </Container>
  );
}
