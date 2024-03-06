import React from 'react';
import Wrapper from './Wrapper';

export const ExperiencePage = () => {
  return (
    <Wrapper id="experience">
      <div className="flex items-center justify-center min-h-[80vh] ">
        <div className="flex-1 flex flex-col px-8  max-w-[980px] mx-auto">
          <p className="text-5xl font-black">
            Experience<span className="text-highlight">.</span>
          </p>
          <hr className="my-4 border-highlight max-w-md" />
          <div className="flex flex-col md:flex-row gap-12 items-start justify-center ">
            <div className="flex-1">
              <div className="w-full border-b border-highlight pb-4 mt-8">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">The Forage</p>
                    <p className="text-sm font-light text-highlight">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Aug 23 - Present</p>
                    <p className="text-sm font-light text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  Irure laborum ad id nisi veniam enim mollit magna qui enim
                  Lorem ad. Officia officia consequat officia excepteur sunt
                  nostrud occaecat voluptate reprehenderit est pariatur laborum.
                </p>
              </div>
              <div className="w-full border-b border-highlight pb-4 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">T-Shirt Ventures</p>
                    <p className="text-sm font-light text-highlight">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Aug 23 - Present</p>
                    <p className="text-sm font-light text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  Irure laborum ad id nisi veniam enim mollit magna qui enim
                  Lorem ad. Officia officia consequat officia excepteur sunt
                  nostrud occaecat voluptate reprehenderit est pariatur laborum.
                </p>
              </div>
              <div className="w-full border-b border-highlight pb-4 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">SQUIZ</p>
                    <p className="text-sm font-light text-highlight">
                      Snr Web Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Aug 23 - Present</p>
                    <p className="text-sm font-light text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  Irure laborum ad id nisi veniam enim mollit magna qui enim
                  Lorem ad. Officia officia consequat officia excepteur sunt
                  nostrud occaecat voluptate reprehenderit est pariatur laborum.
                </p>
              </div>
              <div className="w-full border-b border-highlight pb-4 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold">AgriDigital</p>
                    <p className="text-sm font-light text-highlight">
                      Snr Web Developer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-light">Aug 23 - Present</p>
                    <p className="text-sm font-light text-right">Sydney</p>
                  </div>
                </div>
                <p className="mt-2 font-light">
                  Irure laborum ad id nisi veniam enim mollit magna qui enim
                  Lorem ad. Officia officia consequat officia excepteur sunt
                  nostrud occaecat voluptate reprehenderit est pariatur laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
