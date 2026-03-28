import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout";

/**
 * Hero — the opening pitch for the starter kit.
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
          Skip the setup. <span className="text-primary">Write&nbsp;the&nbsp;code.</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
          A Next.js starter with the boring parts already done — components, auth pages, a
          dashboard, forms, data fetching, dark mode, and a design system you can rebrand in one
          file.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button size="xl" asChild>
            <a
              href="https://github.com/madsoftwaredev/v3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the code
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="/kitchen-sink">Browse Components</Link>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);
