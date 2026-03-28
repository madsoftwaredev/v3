import { Container } from "@/components/layout";
import { LogoCloud } from "@/components/ui/logo-cloud";

/**
 * Logo cloud — social proof strip.
 * Replace with real client/partner logos (SVGs or images).
 */
export const LogosSection = () => (
  <section className="border-y bg-muted/30">
    <Container size="lg">
      <LogoCloud
        title="Trusted by teams at"
        logos={[
          <span key="1" className="text-xl font-bold tracking-tight">Vercel</span>,
          <span key="2" className="text-xl font-bold tracking-tight">Stripe</span>,
          <span key="3" className="text-xl font-bold tracking-tight">Linear</span>,
          <span key="4" className="text-xl font-bold tracking-tight">Notion</span>,
          <span key="5" className="text-xl font-bold tracking-tight">Figma</span>,
          <span key="6" className="text-xl font-bold tracking-tight">Raycast</span>,
        ]}
      />
    </Container>
  </section>
);
