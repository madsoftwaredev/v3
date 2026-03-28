import { Container } from "@/components/layout";
import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import { FileCode2, LayoutDashboard, Paintbrush, Rocket } from "lucide-react";

/**
 * How to use — four steps from clone to production.
 */
export const HowSection = () => (
  <section className="py-20 md:py-28">
    <Container size="md">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-primary mb-2 text-sm font-semibold">Get Started</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Clone, rebrand, build, ship
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">Four steps. No configuration hell.</p>
      </div>

      <div className="mx-auto max-w-lg">
        <Timeline>
          <TimelineItem icon={<FileCode2 className="h-4 w-4" />}>
            <TimelineTitle>Clone and install</TimelineTitle>
            <TimelineDescription>
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">
                git clone https://github.com/madsoftwaredev/v3 && npm install
              </code>
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<Paintbrush className="h-4 w-4" />}>
            <TimelineTitle>Rebrand in one file</TimelineTitle>
            <TimelineDescription>
              Edit the oklch colors in{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">globals.css</code>{" "}
              and update{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">constants.ts</code>{" "}
              with your brand. Every component updates automatically.
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<LayoutDashboard className="h-4 w-4" />}>
            <TimelineTitle>Pick your pages</TimelineTitle>
            <TimelineDescription>
              Auth, dashboard, blog, and settings pages are ready to use. Delete what you don&apos;t
              need, customize what you do.
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<Rocket className="h-4 w-4" />} isLast>
            <TimelineTitle>Connect and deploy</TimelineTitle>
            <TimelineDescription>
              Wire up your API with the typed fetch client and TanStack Query hooks. Push to Vercel.
              Done.
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </div>
    </Container>
  </section>
);
