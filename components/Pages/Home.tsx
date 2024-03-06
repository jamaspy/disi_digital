import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
export const HomePage = () => {
  return (
    <Wrapper id="home">
      <div className="flex flex-col lg:flex-row gap-8 relative">
        <div className="relative flex flex-col w-full items-start justify-start pl-12 md:pl-0 lg:ml-12 pt-16 md:pt-24">
          <p className="text-6xl lg:text-8xl font-black text-primary-900">
            Hello, I&rsquo;m James<span className="text-highlight">.</span>
          </p>
          <p className="text-xl lg:text-4xl font-bold mt-4 ">
            I&rsquo;m a{' '}
            <span className="text-highlight">Frontend Developer</span>
          </p>
          <p className="max-w-2xl mt-4 text-md lg:text-xl font-light pr-4">
            I&rsquo;ve spent the last 6 years building and scaling web
            applications for some very cool tech companies in Sydney, Australia.
            My Best Mate Cooper 🐶 has been with me along the way and we would
            love to connect.
          </p>
          <a
            href="#contact"
            className="bg-highlight hover:bg-secondary-500  text-primary-900 font-bold px-4 py-2 mt-4 rounded-md hover:bg-secondary-600 transition-all duration-200 ease-in-out"
          >
            Contact me{' '}
          </a>
        </div>

        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D3CEC1"
            d="M48.6,-61.9C55.2,-52.4,47.3,-29.7,43.1,-13.5C38.9,2.7,38.4,12.3,34.2,19.9C30,27.5,22,33,11.6,40.6C1.2,48.1,-11.6,57.5,-26.9,58.6C-42.2,59.6,-60,52.3,-62.9,39.9C-65.9,27.5,-53.9,10.1,-49.1,-7.2C-44.3,-24.4,-46.7,-41.4,-39.7,-50.9C-32.7,-60.4,-16.3,-62.3,2.3,-65.1C21,-67.8,42,-71.5,48.6,-61.9Z"
            transform="translate(100 100)"
          />
        </svg> */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D3CEC1"
            d="M15.9,-9C27.9,-4,49.7,-2,55.8,6.1C61.9,14.2,52.2,28.4,40.3,35.4C28.4,42.5,14.2,42.5,6.9,35.6C-0.4,28.7,-0.7,14.9,-14.3,7.8C-27.9,0.7,-54.7,0.4,-62.5,-7.7C-70.2,-15.8,-58.8,-31.6,-45.2,-36.6C-31.6,-41.5,-15.8,-35.7,-6.9,-28.8C2,-21.9,4,-14,15.9,-9Z"
            transform="translate(100 100)"
          />
        </svg>
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D3CEC1"
            d="M32.7,-39.5C42,-31.1,48.8,-20.5,51.1,-8.8C53.3,2.8,50.9,15.4,45.2,26.7C39.4,38,30.3,48.1,18.4,53.8C6.5,59.5,-8.1,60.9,-24.6,58.7C-41.1,56.5,-59.5,50.7,-65.7,38.6C-71.9,26.5,-65.8,8,-59.1,-7.1C-52.5,-22.1,-45.2,-33.7,-35.3,-41.9C-25.3,-50.1,-12.6,-55,-0.5,-54.4C11.7,-53.9,23.4,-47.8,32.7,-39.5Z"
            transform="translate(100 100)"
          />
        </svg> */}
      </div>
    </Wrapper>
  );
};
