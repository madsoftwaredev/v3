import Link from "next/link";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/ui/pricing-card";

/**
 * Pricing — 3-tier pricing cards.
 * Replace plans, prices, and features per project.
 */
export const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-muted/30">
    <Container size="lg">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-2">Pricing</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          No hidden fees. No surprises. Pick a plan and start building.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 items-start max-w-5xl mx-auto">
        <PricingCard
          name="Starter"
          price="$0"
          period="/month"
          description="Perfect for side projects"
          features={[
            "All 57+ components",
            "Design token system",
            "Dark mode support",
            "MIT License",
          ]}
          action={
            <Button variant="outline" className="w-full" asChild>
              <Link href="/kitchen-sink">Get Started</Link>
            </Button>
          }
        />
        <PricingCard
          name="Pro"
          price="$49"
          period="/month"
          description="For professional teams"
          features={[
            "Everything in Starter",
            "Premium page templates",
            "Priority support",
            "Figma design file",
            "Lifetime updates",
          ]}
          featured
          badge="Most Popular"
          action={
            <Button className="w-full" asChild>
              <Link href="/kitchen-sink">Start Free Trial</Link>
            </Button>
          }
        />
        <PricingCard
          name="Enterprise"
          price="$199"
          period="/month"
          description="For large organizations"
          features={[
            "Everything in Pro",
            "Custom theme setup",
            "Dedicated Slack channel",
            "SLA guarantee",
            "Custom component builds",
            "White-label license",
          ]}
          action={
            <Button variant="outline" className="w-full" asChild>
              <Link href="/kitchen-sink">Contact Sales</Link>
            </Button>
          }
        />
      </div>
    </Container>
  </section>
);
