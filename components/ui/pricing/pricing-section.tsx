import { PriceCard } from "../price-card";

export const PricingSection = () => {
  return (
    <section className="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] dark:bg-zinc-950 bg-neutral-100 relative">
      <h2 className="pl-10 pt-10 text-left text-xl md:text-4xl font-bold dark:text-neutral-200 text-neutral-900">
        Ways of working
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-10  w-full overflow-hidden">
        <div className="border rounded-lg overflow-hidden border-neutral-700">
          <PriceCard
            title="Hourly Rate"
            description="Starting at $200AUD per hour"
            steps={[
              "Rate dependent on complexity",
              "Minimum 3 Hour Charge",
              "Daily/Weekly Running Cost Updates",
              "Work Tracked & Itemised in Toggl",
              "Ideal for well defined tasks",
            ]}
            footer="footer"
          />
        </div>
        <div className="border rounded-lg overflow-hidden border-neutral-700">
          <PriceCard
            title="Retained Services"
            description="Allocated hours per month"
            steps={[
              "Rate dependent on complexity",
              "Minimum 10 Hour Retainer",
              "New Projects & Maintenance",
              "Work Tracked & Itemised in Toggl",
              "Best for ongoing support",
            ]}
            footer="footer"
          />
        </div>
        <div className="border rounded-lg overflow-hidden border-neutral-700">
          <PriceCard
            title="Project Based"
            description="Quoted per project"
            steps={[
              "Minimum $4,000AUD",
              "Scoping & Planning",
              "Design, Development & Testing",
              "Deployed & Hosted",
              "Best for a complete solution",
            ]}
            footer="footer"
          />
        </div>
      </div>
    </section>
  );
};
