import React from "react";

import { Navbar } from "@/components/ui/navbar";
import { FancyCard, Step } from "@/components/ui/fancy-card";
import { FancyWorld } from "@/components/ui/fancy-world";
import { HeroHeading } from "@/components/ui/hero";
import Image from "next/image";
import { ServicesSection } from "@/components/ui/services";
import { AboutSection } from "@/components/ui/about";
import { PricingSection } from "@/components/ui/pricing";
import { ContactSection } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroHeading />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Main;
