import { Container } from "@/components/layout";
import {
  Timeline, TimelineItem, TimelineTitle, TimelineDescription,
} from "@/components/ui/timeline";
import { FileCode2, Paintbrush, Rocket } from "lucide-react";

/**
 * How to use — real steps to get started with this template.
 */
export const HowSection = () => (
  <section className="py-20 md:py-28">
    <Container size="md">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-2">Get Started</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Clone, customize, ship
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Three steps. No configuration hell.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <Timeline>
          <TimelineItem icon={<FileCode2 className="h-4 w-4" />}>
            <TimelineTitle>Clone the repo</TimelineTitle>
            <TimelineDescription>
              <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                git clone https://github.com/madsoftware/v3 && npm install
              </code>
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<Paintbrush className="h-4 w-4" />}>
            <TimelineTitle>Edit one file to rebrand</TimelineTitle>
            <TimelineDescription>
              Open <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">src/app/globals.css</code> and
              change the oklch color values. Every component updates automatically.
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem icon={<Rocket className="h-4 w-4" />} isLast>
            <TimelineTitle>Build your pages</TimelineTitle>
            <TimelineDescription>
              Import components from <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">@/components/ui</code>.
              Compose them into pages. Ship.
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </div>
    </Container>
  </section>
);
