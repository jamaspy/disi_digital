import React from "react";
import { ExpandableProjects } from "../expanding-projects";
import { EmploymentHistory } from "./employment-history";

export const AboutSection = () => {
  return (
    <div className="h-full bg-zinc-950 p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-xl font-semibold">Developer Experience</p>
          <EmploymentHistory />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-4">
          <p className="text-xl font-semibold">Recent Projects</p>
          <ExpandableProjects />
        </div>
      </div>
    </div>
  );
};
