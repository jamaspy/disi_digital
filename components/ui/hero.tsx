"use client";

import { motion } from "framer-motion";
import { LuChevronDownCircle } from "react-icons/lu";
import { AuroraBackground } from "./aurora-background";

export const HeroHeading = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-full"
      >
        <p className="text-5xl md:text-7xl font-bold dark:text-neutral-200 text-neutral-900 text-center">
          disi digital.
        </p>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 text-neutral-900 py-4">
          web app & website creators
        </p>
        <a href="#services">
          <LuChevronDownCircle className="text-neutral-500 text-4xl animate-bounce absolute bottom-1" />
        </a>
      </motion.div>
    </AuroraBackground>
  );
};
