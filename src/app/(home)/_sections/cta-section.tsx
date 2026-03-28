import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CtaSection as CtaComponent } from "@/components/ui/cta-section";

/**
 * CTA — direct call to action.
 */
export const CtaSection = () => (
  <section className="py-20 md:py-28">
    <Container size="lg">
      <CtaComponent
        variant="filled"
        title="Stop setting up. Start shipping."
        description="Clone the repo and have a complete, production-ready frontend in minutes. Auth, dashboard, forms, data fetching, tests — all wired up."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="xl" variant="secondary" asChild>
              <a href="https://github.com/madsoftware/v3" target="_blank" rel="noopener noreferrer">
                Clone on GitHub
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/kitchen-sink">Browse Components</Link>
            </Button>
          </div>
        }
      />
    </Container>
  </section>
);
