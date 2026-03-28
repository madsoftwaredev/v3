import { SiteHeader } from "./(home)/_sections/site-header";
import { HeroSection } from "./(home)/_sections/hero-section";
import { StatsSection } from "./(home)/_sections/stats-section";
import { FeaturesSection } from "./(home)/_sections/features-section";
import { StackSection } from "./(home)/_sections/stack-section";
import { HowSection } from "./(home)/_sections/how-section";
import { FaqSection } from "./(home)/_sections/faq-section";
import { CtaSection } from "./(home)/_sections/cta-section";
import { SiteFooter } from "./(home)/_sections/site-footer";

/**
 * Homepage — showcases this template for what it actually is:
 * a Next.js frontend starter kit by MAD Software.
 *
 * Section order:
 * 1. Navbar
 * 2. Hero (what this is + CTAs)
 * 3. Stats (real numbers)
 * 4. Features (what's included)
 * 5. Tech Stack (actual dependencies)
 * 6. How to use (3 steps)
 * 7. FAQ (real questions)
 * 8. CTA (clone it)
 * 9. Footer
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <StackSection />
        <HowSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
