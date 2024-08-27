import React from "react";
import { TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from "react-icons/ti";
export const Footer = () => {
  return (
    <footer className="w-full p-12 flex bg-zinc-950 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <TiSocialGithub className="text-4xl text-zinc-950 dark:text-neutral-200 dark:hover:text-pink-600" />
        <TiSocialLinkedin className="text-4xl text-zinc-950 dark:text-neutral-200 dark:hover:text-pink-600" />
        <TiSocialInstagram className="text-3xl text-zinc-950 dark:text-neutral-200 dark:hover:text-pink-600" />
      </div>
    </footer>
  );
};
