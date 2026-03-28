import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CtaSection as CtaComponent } from "@/components/ui/cta-section";

/**
 * CTA — full-width call-to-action before the footer.
 * Replace headline, description, and button per project.
 */
export const CtaSection = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <Container size="lg">
      <CtaComponent
        variant="filled"
        title="Ready to build something great?"
        description="Clone the repo, swap the tokens, and ship your next project in record time."
        actions={
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/kitchen-sink">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        }
      />
    </Container>
  </section>
);
