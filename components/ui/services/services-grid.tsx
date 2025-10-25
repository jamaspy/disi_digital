import React from "react";

export const ServicesGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="services"
      className="min-h-screen w-full dark:bg-zinc-950 bg-neutral-100 flex flex-col items-start justify-center p-8"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-6 rounded-lg border border-neutral-600 overflow-hidden dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
        {children}
      </div>
    </div>
  );
};

export default ServicesGrid;
