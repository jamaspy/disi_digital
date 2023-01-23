import { Tab } from "@headlessui/react";
import React from "react";
const Tabs = () => {
  return (
    <div className="w-full bg-blue-200 flex flex-col items-center justify-center">
      <Tab.Group className="flex flex-col bg-red-500 w-full" as="div">
        <Tab.List className="w-full flex flex-row items-center justify-around">
          <Tab className="p-4">work</Tab>
          <Tab className="p-4">about</Tab>
          <p className="text-2xl">disi</p>
          <Tab className="p-4">hosting</Tab>
          <Tab className="p-4">contact</Tab>
        </Tab.List>
        <Tab.Panels className="bg-green-400">
          <Tab.Panel>Work</Tab.Panel>
          <Tab.Panel>About</Tab.Panel>
          <Tab.Panel>Hosting</Tab.Panel>
          <Tab.Panel>Contact</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
