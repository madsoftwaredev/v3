import { Container } from "@/components/layout";
import { StatsBar } from "@/components/ui/stats-bar";

/**
 * Stats bar — key numbers to build credibility.
 * Replace values per project.
 */
export const StatsSection = () => (
  <section className="py-16 border-y bg-muted/30">
    <Container size="lg">
      <StatsBar
        stats={[
          { value: "57+", label: "Components" },
          { value: "20", label: "Kitchen Sink Sections" },
          { value: "0", label: "Token Violations" },
          { value: "100%", label: "TypeScript" },
        ]}
      />
    </Container>
  </section>
);
