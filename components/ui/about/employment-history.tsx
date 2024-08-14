import React from "react";
import { useId } from "react";

export function EmploymentHistory() {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 relative z-20">
              {feature.title}
            </p>
            <p className="text-xs font-thin text-neutral-800 dark:text-neutral-400 relative z-20">
              {feature.date}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-sm font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "disi digital.",
    date: "Present",
    description:
      "Developing full stack applications and websites for international clients.",
  },
  {
    title: "The Forage",
    date: "Present",
    description:
      "A EdTech application offering virtual work experience programs using Typescript, NextJS, Tailwind & tRPC.",
  },
  {
    title: "T-shirt Ventures",
    date: "2022 - 2023",
    description:
      "HealthTech applications written in Typescript using NextJS,interfacing with the backend through GraphQL.",
  },
  {
    title: "SQUIZ",
    date: "2022 - 2022",  
    description:
      "Enterprise CMS platform, working on the frontend using React, Redux, and GraphQL.",
  },
  {
    title: "AgriDigital",
    date: "2019 - 2022",
    description:
      "AgTech cloud-based commodity management platform for web & mobile using React, React Native.",
  },
  {
    title: "General Assembly",
    date: "2019 - 2019",
    description:
      "Full Time Web Development Immersive course, learning the full stack development.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
