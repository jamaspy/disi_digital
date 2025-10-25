import { EmploymentHistory } from "./employment-history";
import { ExpandableProjects } from "./expanding-projects";

export const AboutSection = () => {
  return (
    <div className="h-full dark:bg-zinc-950 bg-neutral-100 p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-xl font-semibold dark:text-neutral-200 text-neutral-900">
            Developer Experience
          </p>
          <EmploymentHistory />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-4">
          <p className="text-xl font-semibold dark:text-neutral-200 text-neutral-900">
            Recent Projects
          </p>
          <ExpandableProjects />
        </div>
      </div>
    </div>
  );
};
