import React from "react";
import { FancyCard } from "../../fancy-card";

export const WebDesignCol = () => {
  return (
    <div className="col-span-3 xl:col-span-2 flex-1 border-neutral-600 border-t lg:border-t-0">
      <FancyCard
        title="Website Design"
        description="Cutting edge design and user experience for your website:"
        steps={[
          "Modern & Responsive Design",
          "SEO Optimized",
          "NextJS & TailwindCSS",
          "Mobile Friendly",
          "Security First",
        ]}
        footer="We average 95% in Google Lighthouse score for our websites."
      />
    </div>
  );
};
