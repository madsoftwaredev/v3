import { Container } from "@/components/layout";
import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import { Code2, LayoutDashboard, Paintbrush, Rocket } from "lucide-react";

/**
 * How to use — from clone to coding in four steps.
 */
export const HowSection = () => (
  <section className="py-20 md:py-28">
    <Container size="md">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-primary mb-2 text-sm font-semibold">Get Started</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          From zero to coding in minutes
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          No scaffolding to figure out. No config rabbit holes. Just clone and start building.
        </p>
      </div>

      <div className="mx-auto max-w-lg">
        <Timeline>
          <TimelineItem icon={<Code2 className="h-4 w-4" />}>
            <TimelineTitle>Clone and install</TimelineTitle>
            <TimelineDescription>
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">
                git clone https://github.com/madsoftwaredev/v3 && npm install
              </code>
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<Paintbrush className="h-4 w-4" />}>
            <TimelineTitle>Make it yours</TimelineTitle>
            <TimelineDescription>
              Drop your colors into{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">globals.css</code>{" "}
              and update{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">constants.ts</code>
              . Every component inherits the change — nothing else to touch.
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<LayoutDashboard className="h-4 w-4" />}>
            <TimelineTitle>Delete what you don&apos;t need</TimelineTitle>
            <TimelineDescription>
              Auth, dashboard, blog, settings — take what fits, remove the rest. Route groups keep
              things isolated so nothing breaks when you cut.
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<Rocket className="h-4 w-4" />} isLast>
            <TimelineTitle>Build your feature, ship it</TimelineTitle>
            <TimelineDescription>
              Plug your API into the typed fetch client and TanStack Query hooks. The plumbing is
              done. Write the code that matters.
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </div>
    </Container>
  </section>
);
