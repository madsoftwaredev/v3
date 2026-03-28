import { Container } from "@/components/layout";
import { StatsBar } from "@/components/ui/stats-bar";

/**
 * Stats — real numbers from this project.
 */
export const StatsSection = () => (
  <section className="bg-muted/30 border-y py-16">
    <Container size="lg">
      <StatsBar
        stats={[
          { value: "58", label: "Components" },
          { value: "9", label: "Page Templates" },
          { value: "0", label: "Config Files" },
          { value: "1", label: "File to Rebrand" },
        ]}
      />
    </Container>
  </section>
);
