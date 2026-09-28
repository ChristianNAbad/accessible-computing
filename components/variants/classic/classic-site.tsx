import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/ui/marquee";
import { Services } from "@/components/sections/services";
import { AboutStory } from "@/components/sections/about-story";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";

/**
 * The Classic: the site as it stands today. Same composition as the live
 * homepage (app/page.tsx) so it can be compared against the other concepts
 * on equal terms. Tokens and fonts come from app/globals.css and the root
 * layout; nothing here is themed separately.
 */
export function ClassicSite() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Services />
        <AboutStory />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
