import Link from "next/link";
import { ArrowRight, Palette, Type, Component, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/layout";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Home page — entry point to the design system.
 */
export default function Home() {
  return (
    <Container size="lg" className="py-16 md:py-24">
      <div className="flex justify-end mb-8">
        <ThemeToggle />
      </div>

      {/* Hero */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          MAD Software
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Design system and component library. Built with Next.js, Tailwind CSS v4,
          and Radix UI primitives. Every component follows the design tokens.
        </p>
        <div className="flex justify-center gap-3 pt-4">
          <Button asChild size="lg">
            <Link href="/kitchen-sink">
              View Kitchen Sink <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/madsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Palette className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Design Tokens</CardTitle>
            <CardDescription>
              oklch colors, spacing scale, typography, radius, and shadows — all via CSS variables.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Component className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">17+ Components</CardTitle>
            <CardDescription>
              Button, Input, Card, Badge, Dialog, Tabs, Accordion, Select, and more.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Type className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Type Safe</CardTitle>
            <CardDescription>
              Full TypeScript with CVA variants. Every prop is typed, every variant is documented.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Dark Mode</CardTitle>
            <CardDescription>
              Class-based dark mode with next-themes. Toggle between light, dark, and system.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Container>
  );
}
