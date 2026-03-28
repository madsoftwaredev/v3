import { Container } from "@/components/layout";
import { Testimonial } from "@/components/ui/testimonial";

/**
 * Testimonials — 3-column grid of client quotes.
 * Replace with real testimonials per project.
 */
export const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28">
    <Container size="lg">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-2">Testimonials</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by developers
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Here&apos;s what people are saying about working with our tools.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Testimonial
          quote="We rebuilt our entire dashboard in a week using this system. The token architecture is brilliant — we changed our brand colors in 5 minutes."
          author="Sarah Chen"
          role="VP of Engineering, TechCorp"
          initials="SC"
        />
        <Testimonial
          quote="Finally, a component library that doesn't fight you. The Radix primitives underneath mean accessibility is handled, and the Tailwind integration is seamless."
          author="Marcus Rivera"
          role="Senior Frontend Dev, StartupHQ"
          initials="MR"
        />
        <Testimonial
          quote="Our design team loves it. They change tokens in one file and see the entire app update. No more design drift between Figma and code."
          author="Emily Nakamura"
          role="Design Lead, DesignCo"
          initials="EN"
        />
      </div>
    </Container>
  </section>
);
