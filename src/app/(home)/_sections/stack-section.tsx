import { Container } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * Tech stack — the actual dependencies this template uses.
 */

const stack = [
  { name: "Next.js 16", desc: "App Router, React 19, Turbopack" },
  { name: "Tailwind CSS v4", desc: "@theme inline, oklch colors, no config file" },
  { name: "Radix UI", desc: "Accessible primitives for every interactive component" },
  { name: "TypeScript 5", desc: "Strict mode, path aliases, explicit types" },
  { name: "TanStack Query", desc: "Server state, caching, background refetch, mutations" },
  { name: "TanStack Table", desc: "Headless tables with sorting, filtering, pagination" },
  { name: "React Hook Form", desc: "Performant forms with Zod validation" },
  { name: "Zod", desc: "Schema validation — shared between client and server" },
  { name: "Framer Motion", desc: "Animations and page transitions" },
  { name: "date-fns", desc: "Date formatting and manipulation" },
  { name: "nuqs", desc: "Type-safe URL search params as state" },
  { name: "usehooks-ts", desc: "40+ typed React hooks — no hand-rolling" },
  { name: "next-themes", desc: "Dark mode with class strategy and system detection" },
  { name: "Vitest + RTL", desc: "Unit testing with React Testing Library" },
  { name: "Playwright", desc: "End-to-end browser testing" },
  { name: "Sonner", desc: "Toast notifications styled with design tokens" },
  { name: "cmdk", desc: "Command palette with search and keyboard nav" },
  { name: "Lucide React", desc: "Icon library — consistent, tree-shakeable" },
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
