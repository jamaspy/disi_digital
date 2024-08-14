import React from "react";

import { Navbar } from "@/components/ui/navbar";
import { FancyCard, Step } from "@/components/ui/fancy-card";
import { FancyWorld } from "@/components/ui/fancy-world";
import { HeroHeading } from "@/components/ui/hero";
import Image from "next/image";
import { ServicesSection } from "@/components/ui/services";
import { AboutSection } from "@/components/ui/about";
import { PricingSection } from "@/components/ui/pricing";
const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroHeading />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
    </>
  );
};

export default Main;
