import { Container } from "@/components/layout";
import { FaqSection as FaqComponent } from "@/components/ui/faq";

/**
 * FAQ — common questions in an accordion.
 * Replace questions and answers per project.
 */
export const FaqSection = () => (
  <section id="faq" className="py-20 md:py-28">
    <Container size="lg">
      <FaqComponent
        title="Frequently asked questions"
        description="Can't find what you're looking for? Reach out to our team."
        items={[
          {
            question: "Is this really free?",
            answer:
              "Yes. The core design system is completely free and open source under the MIT license. Use it in personal and commercial projects without restrictions.",
          },
          {
            question: "How do I customize the theme?",
            answer:
              "Edit the CSS variables in src/app/globals.css. Change the oklch values under :root for light mode and .dark for dark mode. Every component in the system automatically picks up the new values — no per-component changes needed.",
          },
          {
            question: "Can I use this with an existing project?",
            answer:
              "Absolutely. The components are designed to be copied into any Next.js project. Install the dependencies, copy the components you need, and add the design tokens to your globals.css.",
          },
          {
            question: "What about accessibility?",
            answer:
              "All interactive components are built on Radix UI primitives, which provide full keyboard navigation, screen reader support, focus management, and proper ARIA attributes out of the box.",
          },
          {
            question: "Do I need to use all 57 components?",
            answer:
              "No. Every component is independent — import only what you need. There are no hidden dependencies between components (except shared utilities like cn() and design tokens).",
          },
          {
            question: "How do I add new components?",
            answer:
              "Create a new file in src/components/ui/, use the cn() helper for class merging, reference design tokens for all colors/spacing, and export from the barrel index. Follow the patterns in existing components.",
          },
        ]}
      />
    </Container>
  </section>
);
