import React from "react";
import { FancyWorld } from "../../fancy-world";
import { FancyCard } from "../../fancy-card";

export const DeployHostCol = () => {
  return (
    <div className="col-span-3 flex-1 border-t">
      <span className="hidden lg:block">
        <FancyWorld />
      </span>
      <span className="lg:hidden block">
        <FancyCard
          title="Deployment & Hosting"
          description="Continuous deployment and hosting solutions for your website:"
          steps={[
            "Secure & Fast Edge Hosting",
            "Continuous Deployment",
            "99.99% Uptime",
            "Custom Domains",
            "24/7 Monitoring",
          ]}
          footer="We leverage Vercel's Edge Network for fast and secure hosting."
        />
      </span>
    </div>
  );
};
