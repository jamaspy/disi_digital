import React from "react";

import { Navbar } from "@/components/ui/navbar";
import { FancyCard, Step } from "@/components/ui/fancy-card";
import { FancyWorld } from "@/components/ui/fancy-world";
import { HeroHeading } from "@/components/ui/hero";
import Image from "next/image";
import { ServicesSection } from "@/components/ui/services";
import { AboutSection } from "@/components/ui/about";
const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroHeading />
      <ServicesSection />
      <AboutSection />
    </>
  );
};

export default Main;
