import React from "react";
import ServicesGrid from "./services-grid";
import {
  DeployHostCol,
  FullStackCol,
  SaasPlatformCol,
  WebDesignCol,
} from "./columns";

export const ServicesSection = () => {
  return (
    <ServicesGrid>
      <SaasPlatformCol />
      <WebDesignCol />
      <FullStackCol />
      <DeployHostCol />
    </ServicesGrid>
  );
};
