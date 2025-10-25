import { AboutSection } from "@/components/ui/about";
import { ArticlesSection } from "@/components/ui/articles";
import { ContactSection } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { HeroHeading } from "@/components/ui/hero";
import { PricingSection } from "@/components/ui/pricing";
import { ServicesSection } from "@/components/ui/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.disi.au",
  },
};

const Main = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "disi digital",
    url: "https://www.disi.au",
    logo: "https://www.disi.au/disi_logo_trans.png",
    description:
      "Northern Beaches Digital Agency specializing in web development, SaaS platforms, and full-stack solutions.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "NSW",
      addressCountry: "AU",
      addressLocality: "Northern Beaches",
    },
    sameAs: [
      // Add your social media links here
      // "https://twitter.com/yourhandle",
      // "https://linkedin.com/company/yourcompany",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    areaServed: {
      "@type": "Place",
      name: "Australia",
    },
    knowsAbout: [
      "Web Development",
      "SaaS Development",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroHeading />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Main;
