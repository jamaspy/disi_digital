
import React from "react";
import { FancyCard } from "../../fancy-card";
import dynamic from "next/dynamic";

const BasicGlobe = dynamic(() => import("../../basic-globe").then((m) => m.BasicGlobe), {
  ssr: false,
});

export const DeployHostCol = () => {
  return (
    <div className="col-span-3 flex-1 border-t border-neutral-600 relative">
      <span className="hidden lg:block">
        <div className="p-10">
          <h2 className="text-left text-xl md:text-4xl font-bold text-black dark:text-white">
            Deployment & Hosting
          </h2>
          <p className="text-left text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 xl:block hidden">
            Ultra-fast, always secure global application delivery.
          </p>
        </div>
        <BasicGlobe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
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

