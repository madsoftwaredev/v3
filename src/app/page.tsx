import { SiteHeader } from "./(home)/_sections/site-header";
import { HeroSection } from "./(home)/_sections/hero-section";
import { LogosSection } from "./(home)/_sections/logos-section";
import { FeaturesSection } from "./(home)/_sections/features-section";
import { StatsSection } from "./(home)/_sections/stats-section";
import { TestimonialsSection } from "./(home)/_sections/testimonials-section";
import { PricingSection } from "./(home)/_sections/pricing-section";
import { FaqSection } from "./(home)/_sections/faq-section";
import { CtaSection } from "./(home)/_sections/cta-section";
import { SiteFooter } from "./(home)/_sections/site-footer";

/**
 * Landing page template — a complete SaaS/agency homepage.
 *
 * Every section is a separate component using design system primitives.
 * To customize: swap copy, images, and links in each section file.
 * To rebrand: edit globals.css design tokens.
 *
 * Section order:
 * 1. Navbar (sticky)
 * 2. Hero (headline + CTAs)
 * 3. Logo cloud (social proof)
 * 4. Features (value props)
 * 5. Stats (credibility numbers)
 * 6. Testimonials (social proof)
 * 7. Pricing (conversion)
 * 8. FAQ (objection handling)
 * 9. CTA (final push)
 * 10. Footer (navigation + legal)
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
