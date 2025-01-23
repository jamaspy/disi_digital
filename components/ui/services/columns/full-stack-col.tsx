import React from "react";
import { Step } from "../../fancy-card";
import Image from "next/image";

export const FullStackCol = () => {
  return (
    <div className="col-span-3 border-r border-t border-neutral-600 flex-1 p-10">
      <div className="flex flex-row justify-between h-full">
        <div className="w-1/2 flex-1">
          <h2 className="text-left text-xl md:text-4xl font-bold text-black dark:text-neutral-200">
            Full Stack Web Apps
          </h2>
          <div className="text-neutral-200 mt-4 relative z-20">
            Full stack web applications with endless functionality using the
            latest technologies:
            <ul className="list-none  mt-2">
              <Step title="Headless CMS" />
              <Step title="eCommerce Cart" />
              <Step title="Blog & Messaging Service" />
              <Step title="AI Interfacing" />
              <Step title="Authentication" />
              <Step title="User Management" />
              <Step title="Serverless Database" />
              <Step title="Edge Functions" />
            </ul>
          </div>
        </div>
        <div className="w-1/2 ml-2 relative rounded-md overflow-hidden xl:inline-block hidden">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-opacity-5 dark:dark:bg-zinc-950  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />
          <Image src="/georgie.png" fill alt="saas" />
        </div>
      </div>
    </div>
  );
};
