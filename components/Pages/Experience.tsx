import React from 'react';
import Wrapper from './Wrapper';

export const ExperiencePage = () => {
  return (
    <Wrapper id="experience">
      <div className="flex items-center justify-center min-h-[80vh] ">
        <div className="flex-1 flex flex-col px-8  max-w-[980px] mx-auto">
          <p className="text-4xl md:text-5xl font-black">
            Experience<span className="text-highlight">.</span>
          </p>
          <hr className="my-4 border-highlight max-w-md" />
          <div className="flex flex-col md:flex-row gap-12 items-start justify-center ">
            <div className="flex-1">
              <div className="w-full border-b border-highlight pb-4 mt-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">The Forage</p>
                    <p className="text-sm font-light text-highlight">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Sep 23 - Present</p>
                    <p className="text-sm font-light md:text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  A web based application offering virtual work experience
                  programs using Typescript, NextJS, Tailwind & tRPC.
                </p>
              </div>
              <div className="w-full border-b border-highlight pb-4 mt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">T-Shirt Ventures</p>
                    <p className="text-sm font-light text-highlight">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Jun 2022 - Sep 2023</p>
                    <p className="text-sm font-light md:text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  The dedicated Frontend Developer working on 2 HealthTech
                  platforms written in Typescript using NextJS. Styled using
                  TailwindCSS and interfacing with the backend through GraphQL
                  and Prisma. I was responsible for creating reusable, scalable
                  components from Figma designs for new features.
                </p>
              </div>
              <div className="w-full border-b border-highlight pb-4 mt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">SQUIZ</p>
                    <p className="text-sm font-light text-highlight">
                      Snr Web Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Jan 2022 - Jun 2022</p>
                    <p className="text-sm font-light md:text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  Web developer interacting directly with Clients to create and
                  maintain features with in the CMS. Often working on multiple
                  concurrent projects using vanilla HTML, CSS and Javascript to
                  create new pages and features for government and blue chip
                  clients globally. React component for translated into the CMS
                  and Storybook was used for component development.
                </p>
              </div>
              <div className="w-full border-b border-highlight pb-4 my-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">AgriDigital</p>
                    <p className="text-sm font-light text-highlight">
                      Frontend Engineer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Aug 2019 - Jan 2022</p>
                    <p className="text-sm font-light md:text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  Frontend Engineer working on a cloud-based commodity
                  management platform for web & mobile. Creating reusable
                  components, forms, and dashboards using React/React Native,
                  Typescript, Tailwind, and Material UI as well as Redux & React
                  Query for state management. I also lead the design and
                  implementation of the Design System, utilising Figma,
                  Storybook & npm as well as creating initial feature designs in
                  Figma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
