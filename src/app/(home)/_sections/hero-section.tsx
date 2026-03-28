import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout";

/**
 * Hero — what this project actually is.
 */
export const HeroSection = () => (
  <section className="relative overflow-hidden">
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
      <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">
        <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs">
          Open Source · MIT License
        </Badge>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          A Next.js starter <span className="text-primary">you&apos;ll actually use</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
          57 production-ready components, a full design token system, dark mode, and a kitchen sink
          page — so you can stop setting up and start building.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button size="xl" asChild>
            <Link href="/kitchen-sink">
              Browse Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <a href="https://github.com/madsoftware/v3" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);
