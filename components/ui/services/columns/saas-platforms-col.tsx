import React from "react";
import { Step } from "../../fancy-card";
import Image from "next/image";

export const SaasPlatformCol = () => {
  return (
    <div className="col-span-3 xl:col-span-4 border-r border-neutral-600 flex-1 p-10">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full xl:w-1/3">
          <h2 className="text-left text-xl md:text-4xl font-bold text-black dark:text-neutral-200">
            SaaS Platforms
          </h2>
          <div className="text-neutral-200 mt-4 relative z-20">
            Specialists in subscription based SaaS platforms:
            <ul className="list-none  mt-2">
              <Step title="Serverless Databases" />
              <Step title="Interactive Dashboards" />
              <Step title="Subscription Management" />
              <Step title="AI Integrations" />
              <Step title="Video Streaming" />
              <Step title="Secure Hosting" />
            </ul>
          </div>
        </div>
        <div className="w-full xl:w-2/3 relative hidden xl:flex flex-row-reverse gap-4 ml-2 rounded-md overflow-hidden mt-8 lg:mt-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:dark:bg-zinc-950  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />
          <Image
            src="/preacta2.png"
            width={500}
            height={500}
            className="flex-1 inline mx-auto"
            alt="saas"
          />
          <Image
            src="/preacta.png"
            width={500}
            height={500}
            className="flex-1 hidden xl:inline-flex mx-auto"
            alt="saas"
          />
        </div>
      </div>
    </div>
  );
};
