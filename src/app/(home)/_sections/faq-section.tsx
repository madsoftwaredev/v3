import { Container } from "@/components/layout";
import { FaqSection as FaqComponent } from "@/components/ui/faq";

/**
 * FAQ — real questions someone would ask about this template.
 */
export const FaqSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-muted/30">
    <Container size="lg">
      <FaqComponent
        title="Questions"
        description="Things you'd want to know before using this."
        items={[
          {
            question: "Is this free?",
            answer:
              "Yes. MIT license. Use it for personal projects, client work, SaaS products — whatever you want. No attribution required.",
          },
          {
            question: "How do I change the colors?",
            answer:
              "Edit the CSS variables in src/app/globals.css. The :root block has light mode values, .dark has dark mode values. All colors use oklch. Change them and every component updates — there are zero hardcoded colors in the entire codebase.",
          },
          {
            question: "Can I use this with an existing Next.js project?",
            answer:
              "Yes. Copy the components you need from src/components/ui/, add the design tokens to your globals.css, install the Radix dependencies, and you're set. Every component is self-contained.",
          },
          {
            question: "Do I need all 57 components?",
            answer:
              "No. Import only what you use. There are no hidden dependencies between components — they only share the cn() utility and design tokens.",
          },
          {
            question: "What's the kitchen sink page?",
            answer:
              "It's a single page that renders every component and every variant in the system. Use it to verify visual consistency after changing tokens, or as a reference when building pages.",
          },
          {
            question: "Who built this?",
            answer:
              "MAD Software. We build digital products and got tired of rebuilding the same foundation for every project. So we made it once, properly, and open-sourced it.",
          },
        ]}
      />
    </Container>
  </section>
);
