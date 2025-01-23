"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableProjects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={600}
                  height={600}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top mx-auto"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-xs"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top mx-auto"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-pink-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Talent Intelligence Dashboards.",
    title: "Preacta",
    src: "/preacta2.png",
    ctaText: "View Details",
    ctaLink: "https://dash-preacta.vercel.app",
    content: () => {
      return (
        <>
          <p>
            Preacta is a data driven Tech Recruitment company that offers Talent
            Intelligence Dashboards to help companies make better hiring
            decisions. We created a subscription based platform that allows
            companies to access real-time data on the recruitment pipelines.
          </p>
          <p className="font-semibold">Tech Stack</p>
          <ul className="list-disc list-inside">
            <li className="ml-2">Typescript & NextJS</li>
            <li className="ml-2">TailwindCSS</li>
            <li className="ml-2">AWS EC2</li>
            <li className="ml-2">Azure Data Warehouse</li>
            <li className="ml-2">SQL Server</li>
            <li className="ml-2">Xata</li>
            <li className="ml-2">authJS</li>
            <li className="ml-2">Stripe</li>
            <li className="ml-2">Vercel</li>
          </ul>
        </>
      );
    },
  },
  {
    description: "Non-For-Profit Full Stack App.",
    title: "Georgies House",
    src: "/georgie.png",
    ctaText: "View Details",
    ctaLink: "https://www.georgieshouse.org.au/",
    content: () => {
      return (
        <>
          <p>
            Georgies House is a newly formed charity that wanted to harness the
            power of technology to help teenagers on the Northern Beaches. We
            created secure platform where youngest can access resources,
            support, track their mood and journal. Furthermore we developed a
            bespoke self-hosted, bespoke CMS to manage events and knowledge base
            articles.
          </p>
          <p className="font-semibold">Tech Stack</p>
          <ul className="list-disc list-inside">
            <li className="ml-2">Typescript & NextJS</li>
            <li className="ml-2">TailwindCSS</li>
            <li className="ml-2">Sanity</li>
            <li className="ml-2">Xata</li>
            <li className="ml-2">authJS</li>
            <li className="ml-2">Vercel</li>
          </ul>
        </>
      );
    },
  },
  {
    description: "Digital Sales Room.",
    title: "Stackshow",
    src: "/stackshow.jpg",
    ctaText: "View Details",
    ctaLink: "https://stackshow.io/",
    content: () => {
      return (
        <>
          <p>
            Stackshow is a startup aiming to created a Digital Sales Room. We
            created a full stack application that allows users to generate
            digital collateral through a drag & drop interface and share it with
            their clients. The platform also allows users to track the
            engagement of their clients and manage their pipeline.
          </p>
          <p className="font-semibold">Tech Stack</p>
          <ul className="list-disc list-inside">
            <li className="ml-2">Typescript & NextJS</li>
            <li className="ml-2">TailwindCSS</li>
            <li className="ml-2">Beautiful DnD</li>
            <li className="ml-2">React Table</li>
            <li className="ml-2">Xata</li>
            <li className="ml-2">Resend</li>
            <li className="ml-2">authJS</li>
            <li className="ml-2">Vercel</li>
          </ul>
        </>
      );
    },
  },
  {
    description: "Subscription Spin Class Streaming.",
    title: "RevelWell",
    src: "/revel.png",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
            RevelWell is a subscription based platform that offers streaming of
            spin classes & yoga. We created a platform that allows users to
            access live and on-demand spinning classes. The platform also
            allowed The RevelWell team to upload content and manage
            subscriptions. We achieve this by integrating with MUX for video
            streaming and Stripe for payments.
          </p>
          <p className="font-semibold">Tech Stack</p>
          <ul className="list-disc list-inside">
            <li className="ml-2">GatsbyJS</li>
            <li className="ml-2">TailwindCSS</li>
            <li className="ml-2">MUX</li>
            <li className="ml-2">Stripe</li>
            <li className="ml-2">Contentful</li>
            <li className="ml-2">Resend</li>
            <li className="ml-2">authJS</li>
            <li className="ml-2">Vercel</li>
          </ul>
        </>
      );
    },
  },
  {
    description: "Digital Escape Room Experience.",
    title: "Escape Room",
    src: "/escape.png",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
            We created an Electron app that could be ran completely offline. The
            app was a digital escape room experience that allowed users to solve
            puzzles and escape the room. This involved multiple types of
            multi-media, animations and intricate styling. This was a fun
            project that allowed us to flex our creative muscles.
          </p>
          <p className="font-semibold">Tech Stack</p>
          <ul className="list-disc list-inside">
            <li className="ml-2">NextJS</li>
            <li className="ml-2">TailwindCSS</li>
            <li className="ml-2">Sass CSS</li>
            <li className="ml-2">Electron</li>
          </ul>
        </>
      );
    },
  },
];
