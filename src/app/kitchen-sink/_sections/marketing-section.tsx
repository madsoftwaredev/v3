"use client";

import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/ui/pricing-card";
import { CtaSection } from "@/components/ui/cta-section";
import { FaqSection } from "@/components/ui/faq";
import { Newsletter } from "@/components/ui/newsletter";
import { Separator } from "@/components/ui/separator";

/**
 * Marketing components — Pricing, CTA, FAQ, Newsletter.
 */
export const MarketingSection = () => (
  <div className="space-y-8">
    {/* Pricing Cards */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Pricing Cards</h3>
      <div className="grid gap-6 sm:grid-cols-3 items-start">
        <PricingCard
          name="Starter"
          price="$0"
          period="/month"
          description="For personal projects"
          features={["5 projects", "Basic analytics", "Community support"]}
          action={<Button variant="outline" className="w-full">Get Started</Button>}
        />
        <PricingCard
          name="Pro"
          price="$29"
          period="/month"
          description="For growing teams"
          features={["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains", "Team collaboration"]}
          action={<Button className="w-full">Get Started</Button>}
          featured
          badge="Popular"
        />
        <PricingCard
          name="Enterprise"
          price="$99"
          period="/month"
          description="For large organizations"
          features={["Everything in Pro", "SSO & SAML", "Dedicated support", "SLA guarantee", "Custom integrations"]}
          action={<Button variant="outline" className="w-full">Contact Sales</Button>}
        />
      </div>
    </div>

    <Separator />

    {/* CTA Sections */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">CTA Sections</h3>
      <div className="space-y-6">
        <CtaSection
          title="Ready to get started?"
          description="Join thousands of developers building with our design system."
          actions={
            <>
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">Talk to Sales</Button>
            </>
          }
        />
        <CtaSection
          variant="filled"
          title="Ship faster with our components"
          description="Stop reinventing the wheel. Use production-ready components."
          actions={
            <Button size="lg" variant="secondary">Get Started Free</Button>
          }
        />
      </div>
    </div>

    <Separator />

    {/* FAQ */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">FAQ</h3>
      <FaqSection
        title="Common Questions"
        description="Everything you need to know."
        items={[
          { question: "Is this free to use?", answer: "Yes, the design system is completely free and open source. Use it in personal and commercial projects." },
          { question: "Can I customize the colors?", answer: "Absolutely. Edit the CSS variables in globals.css to change any color. All components automatically pick up the new values." },
          { question: "Does it support dark mode?", answer: "Yes, full dark mode support is built in. Toggle between light, dark, and system preference." },
          { question: "What about accessibility?", answer: "All interactive components use Radix UI primitives which provide full keyboard navigation, screen reader support, and ARIA attributes." },
        ]}
      />
    </div>

    <Separator />

    {/* Newsletter */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Newsletter</h3>
      <Newsletter
        title="Stay in the loop"
        description="Get notified about new components and updates."
      />
    </div>
  </div>
);
