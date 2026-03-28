import { Container } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * Tech stack — the actual dependencies this template uses.
 */

const stack = [
  { name: "Next.js 16", desc: "App Router, React 19, Turbopack" },
  { name: "Tailwind CSS v4", desc: "@theme inline, oklch colors, no config file" },
  { name: "Radix UI", desc: "Accessible primitives for every interactive component" },
  { name: "TypeScript 5", desc: "Strict mode, no any, explicit return types" },
  { name: "class-variance-authority", desc: "Type-safe component variants" },
  { name: "next-themes", desc: "Class-based dark mode with system detection" },
  { name: "Lucide React", desc: "Icon library — consistent, tree-shakeable" },
  { name: "Sonner", desc: "Toast notifications styled with design tokens" },
  { name: "cmdk", desc: "Command palette (⌘K) with search and actions" },
  { name: "Embla Carousel", desc: "Lightweight carousel with keyboard nav" },
  { name: "react-resizable-panels", desc: "Split pane layouts with drag handles" },
  { name: "tailwind-merge + clsx", desc: "Class merging with conflict resolution" },
] as const;

export const StackSection = () => (
  <section id="stack" className="bg-muted/30 py-20 md:py-28">
    <Container size="lg">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-primary mb-2 text-sm font-semibold">Tech Stack</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Built on tools you already know
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          No proprietary abstractions. No lock-in. Just the best open-source tools wired together
          properly.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item) => (
          <Card key={item.name}>
            <CardHeader className="p-4">
              <CardTitle className="text-sm font-semibold">{item.name}</CardTitle>
              <CardDescription className="text-xs">{item.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);
