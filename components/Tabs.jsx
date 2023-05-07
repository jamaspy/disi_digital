import { Dialog, Tab, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

import art1 from "../public/art/art1.png";
import art2 from "../public/art/art2.png";
import art3 from "../public/art/art3.png";

import logo1 from "../public/logo/logo1.png";
import logo2 from "../public/logo/logo2.png";
import logo3 from "../public/logo/logo3.png";

import web1 from "../public/web/web_01.png";
import web2 from "../public/web/web_02.png";
import web3 from "../public/web/web_03.png";

const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState({ component: null, description: "" });
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full flex md:py-20 pt-40 flex-col items-center justify-center bg-[#245E67] text-slate-700">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
          style={{ fontFamily: "Space Grotesk" }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex-1">
                    <Image
                      src={image.component}
                      className="rounded-3xl h-full w-full"
                      alt={image.description}
                    />
                  </div>
                  <Dialog.Title className="text-center my-4 text-xl font-sans">
                    {image.description}
                  </Dialog.Title>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#165DC7] 0 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Tab.Group className="flex flex-col  w-full" as="div">
        <Tab.List className="w-full flex  flex-row items-center justify-around">
          <Tab className="p-4 focus:outline-none">
            {({ selected }) => (
              <p
                className={`text-xl hover:text-slate-400 ${
                  selected
                    ? "text-zinc-300 font-semibold underline"
                    : "text-zinc-300"
                }`}
              >
                logos
              </p>
            )}
          </Tab>
          <Tab className="p-4 focus:outline-none">
            {({ selected }) => (
              <p
                className={`text-xl hover:text-slate-400 ${
                  selected
                    ? "text-zinc-300 font-semibold underline"
                    : "text-zinc-300"
                }`}
              >
                web
              </p>
            )}
          </Tab>
          <Tab className="p-4 focus:outline-none">
            {({ selected }) => (
              <p
                className={`text-xl hover:text-slate-400 ${
                  selected
                    ? "text-zinc-300 font-semibold underline"
                    : "text-zinc-300"
                }`}
              >
                art
              </p>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="text-black  mx-auto">
          <Tab.Panel>
            <div className="flex flex-wrap flex-col md:flex-row w-full justify-around gap-4 p-4">
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: logo1,
                    description: "Logo ideas for a Gin company",
                  });
                  openModal();
                }}
              >
                <Image
                  src={logo1}
                  alt={image.description}
                  className="rounded-3xl"
                />
              </div>
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: logo2,
                    description: "Logo ideas for a high-end honey company",
                  });
                  openModal();
                }}
              >
                <Image
                  src={logo2}
                  alt={image.description}
                  className="rounded-3xl"
                />
              </div>
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: logo3,
                    description:
                      "Logo ideas for a dog walking and sitting company",
                  });
                  openModal();
                }}
              >
                <Image
                  src={logo3}
                  alt={image.description}
                  className="rounded-3xl"
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap flex-col md:flex-row w-full justify-around gap-4 p-4">
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: web1,
                    description:
                      "A website ideas for a freelance content writer",
                  });
                  openModal();
                }}
              >
                <Image
                  src={web1}
                  alt={image.description}
                  className="rounded-3xl h-full w-full"
                />
              </div>

              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: web2,
                    description:
                      "A website ideas for a digital marketing agency based in the Northern Beaches",
                  });
                  openModal();
                }}
              >
                <Image
                  src={web2}
                  alt={image.description}
                  className="rounded-3xl h-full w-full"
                />
              </div>
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: web3,
                    description: "A website ideas for a cafe called Sardine",
                  });
                  openModal();
                }}
              >
                <Image
                  src={web3}
                  alt={image.description}
                  className="rounded-3xl h-full w-full"
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap flex-col md:flex-row w-full justify-around gap-4 p-4">
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: art1,
                    description: "Artwork 1",
                  });
                  openModal();
                }}
              >
                <Image
                  src={art1}
                  alt={image.description}
                  className="rounded-3xl h-full w-full"
                />
              </div>
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: art2,
                    description: "Artwork 2",
                  });
                  openModal();
                }}
              >
                <Image
                  src={art2}
                  alt={image.description}
                  className="rounded-3xl h-full w-full"
                />
              </div>
              <div
                className="flex-1"
                onClick={() => {
                  setImage({
                    component: art3,
                    description: "Artwork 3",
                  });
                  openModal();
                }}
              >
                <Image
                  src={art3}
                  alt={image.description}
                  className="rounded-3xl h-full w-full"
                />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
