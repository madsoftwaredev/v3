import { Container } from "@/components/layout";
import { FaqSection as FaqComponent } from "@/components/ui/faq";

/**
 * FAQ — real questions someone would ask about this template.
 */
export const FaqSection = () => (
  <section id="faq" className="bg-muted/30 py-20 md:py-28">
    <Container size="lg">
      <FaqComponent
        title="Questions"
        description="Things you'd want to know before using this."
        items={[
          {
            question: "Is this free?",
            answer:
              "Yes. MIT license. Use it for personal projects, client work, SaaS — whatever. No attribution required.",
          },
          {
            question: "How do I make it look like my product?",
            answer:
              "Edit the oklch color values in src/app/globals.css and update src/lib/constants.ts with your name and URL. That's it. Every component, page, and token updates automatically. Zero hardcoded colors in the codebase.",
          },
          {
            question: "Do I have to use all of it?",
            answer:
              "No. Components are independent — they only share the cn() utility and design tokens. Pages live in route groups, so you can delete entire sections without breaking anything.",
          },
          {
            question: "What pages are included?",
            answer:
              "Login, register, forgot password (with success state), dashboard with collapsible sidebar, tabbed settings, blog list and detail, 404, and an error boundary. All with loading skeletons.",
          },
          {
            question: "How does data fetching work?",
            answer:
              "There's a typed fetch client in src/lib/api.ts — wraps native fetch, no axios. TanStack Query hooks (useApiQuery, useApiMutation) handle caching, retries, and invalidation. Server actions are set up too. Placeholder data is clearly marked.",
          },
          {
            question: "What about testing?",
            answer:
              "Vitest + React Testing Library for units, Playwright for E2E, and example tests to show the patterns. GitHub Actions runs lint, typecheck, format, tests, and build on every PR.",
          },
          {
            question: "Can I use just the components in an existing project?",
            answer:
              "Yes. Copy from src/components/ui/, add the design tokens to your globals.css, install the Radix dependencies. Every component is self-contained.",
          },
          {
            question: "Who built this?",
            answer:
              "MAD Software. We build products and got tired of rebuilding the same foundation every time. So we built it properly once and open-sourced it.",
          },
        ]}
      />
    </Container>
  </section>
);
