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
import { COMPANY } from "@/lib/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
        foundingDate: String(COMPANY.founded),
        founder: {
          "@type": "Person",
          name: "Christian N. Abad",
          url: COMPANY.linkedin,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Matthews",
          addressRegion: "NC",
          postalCode: "28105",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY.phone,
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        name: COMPANY.name,
        url: COMPANY.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
