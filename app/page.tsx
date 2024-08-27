import React from "react";
import { HeroHeading } from "@/components/ui/hero";
import { ServicesSection } from "@/components/ui/services";
import { AboutSection } from "@/components/ui/about";
import { PricingSection } from "@/components/ui/pricing";
import { ContactSection } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { ArticlesSection } from "@/components/ui/articles";
const Main = () => {
  return (
    <>
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
