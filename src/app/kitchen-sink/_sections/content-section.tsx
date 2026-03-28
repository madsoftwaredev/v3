"use client";

import { Code, Layers, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/ui/hero";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { Testimonial } from "@/components/ui/testimonial";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { StatsBar } from "@/components/ui/stats-bar";
import { Separator } from "@/components/ui/separator";

/**
 * Content components — Hero, Feature Grid, Testimonial, Logo Cloud, Stats.
 */
export const ContentSection = () => (
  <div className="space-y-8">
    {/* Hero */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Hero</h3>
      <div className="overflow-hidden rounded-lg border">
        <Hero
          badge={<Badge variant="secondary">New Release</Badge>}
          title="Build something extraordinary"
          description="A complete design system with 40+ components, design tokens, dark mode, and full TypeScript support."
          actions={
            <>
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </>
          }
        />
      </div>
    </div>

    <Separator />

    {/* Feature Grid */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Feature Grid</h3>
      <FeatureGrid
        features={[
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Lightning Fast",
            description: "Optimized for performance with zero runtime overhead.",
          },
          {
            icon: <Palette className="h-5 w-5" />,
            title: "Themeable",
            description: "Customize every color, font, and spacing with CSS variables.",
          },
          {
            icon: <Code className="h-5 w-5" />,
            title: "Developer First",
            description: "Full TypeScript support with documented props and examples.",
          },
          {
            icon: <Layers className="h-5 w-5" />,
            title: "Composable",
            description: "Mix and match components to build any interface.",
          },
        ]}
        columns={4}
      />
    </div>

    <Separator />

    {/* Testimonials */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Testimonials</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Testimonial
          quote="This design system saved us weeks of work. The components are polished and the tokens make theming a breeze."
          author="Sarah Chen"
          role="Lead Designer at Acme"
          initials="SC"
        />
        <Testimonial
          quote="Finally, a component library that's actually easy to customize. The oklch colors are a game changer."
          author="Marcus Johnson"
          role="Frontend Engineer"
          initials="MJ"
        />
        <Testimonial
          quote="We shipped our entire marketing site in 3 days using this system. Highly recommended."
          author="Emily Park"
          role="CTO at StartupCo"
          initials="EP"
        />
      </div>
    </div>

    <Separator />

    {/* Logo Cloud */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Logo Cloud</h3>
      <LogoCloud
        title="Trusted by innovative companies"
        logos={[
          <span key="1" className="text-lg font-bold">
            Acme
          </span>,
          <span key="2" className="text-lg font-bold">
            Globex
          </span>,
          <span key="3" className="text-lg font-bold">
            Initech
          </span>,
          <span key="4" className="text-lg font-bold">
            Hooli
          </span>,
          <span key="5" className="text-lg font-bold">
            Pied Piper
          </span>,
        ]}
      />
    </div>

    <Separator />

    {/* Stats Bar */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Stats Bar</h3>
      <StatsBar
        stats={[
          { value: "40+", label: "Components" },
          { value: "100%", label: "TypeScript" },
          { value: "AA", label: "Accessible" },
          { value: "0", label: "Runtime Deps" },
        ]}
      />
    </div>
  </div>
);
