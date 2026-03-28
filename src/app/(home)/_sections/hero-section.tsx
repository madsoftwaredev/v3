import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout";

/**
 * Hero — bold headline, subtitle, dual CTAs, subtle grid background.
 * Replace copy, badge text, and CTA links per project.
 */
export const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Grid background with radial fade */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        backgroundSize: "4rem 4rem",
        maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
      }}
    />

    <Container size="lg" className="pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs">
          <Sparkles className="h-3 w-3" />
          Introducing v3.0
        </Badge>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Build faster.{" "}
          <span className="text-primary">Ship&nbsp;smarter.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl md:text-xl leading-relaxed">
          The modern SaaS starter kit with 57 production-ready components,
          design tokens, dark mode, and everything you need to launch fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button size="xl" asChild>
            <Link href="/kitchen-sink">
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="#pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);
