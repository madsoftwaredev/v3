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
              "Yes. MIT license. Use it for personal projects, client work, SaaS products — whatever you want. No attribution required.",
          },
          {
            question: "How do I rebrand it?",
            answer:
              "Edit the oklch color values in src/app/globals.css and update src/lib/constants.ts with your brand name and URL. Every component, every page, every token updates automatically. Zero hardcoded colors in the entire codebase.",
          },
          {
            question: "Do I need all 58 components and 9 pages?",
            answer:
              "No. Delete what you don't need. Components are independent — they only share the cn() utility and design tokens. Pages are organized in route groups, so you can remove entire groups without side effects.",
          },
          {
            question: "What page templates are included?",
            answer:
              "Login, register, forgot password (with success state), dashboard with collapsible sidebar, tabbed settings (profile, appearance, notifications), blog list and detail, custom 404, and a global error boundary. All with loading skeletons.",
          },
          {
            question: "How does data fetching work?",
            answer:
              "There's a typed fetch client (src/lib/api.ts) that wraps native fetch — no axios. TanStack Query hooks (useApiQuery, useApiMutation) handle caching, retries, and cache invalidation. Server actions are also set up for form submissions. All placeholder data is clearly marked for replacement.",
          },
          {
            question: "What about testing?",
            answer:
              "Vitest with React Testing Library for unit tests, Playwright for E2E tests, and example tests to show the patterns. A GitHub Actions CI pipeline runs lint, typecheck, format check, tests, and build on every PR.",
          },
          {
            question: "Can I use this with an existing project?",
            answer:
              "Yes. Copy the components from src/components/ui/, add the design tokens to your globals.css, and install the Radix dependencies. Every component is self-contained. You can also cherry-pick individual page templates.",
          },
          {
            question: "Who built this?",
            answer:
              "MAD Software. We build digital products and got tired of rebuilding the same foundation for every project. So we built it once, properly, and open-sourced it.",
          },
        ]}
      />
    </Container>
  </section>
);
