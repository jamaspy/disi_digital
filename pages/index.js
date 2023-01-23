import Image from "next/image";

import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import Boxes from "../components/Boxes/";
import Form from "../components/Form";
import Header from "../components/Head";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";

import { description } from "../content/description";

import squareDoodle from "../public/square.jpg";

export default function Home() {
  return (
    <div>
      <Header title="disi" description="ai powered design" />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="bg-[#165DC7] lg:w-1/4 w-full p-4 flex lg:flex-col md:flex-row flex-col md:gap-4">
          <Boxes />
        </div>
        <div className="lg:w-3/4 w-full">
          <Hero />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 bg-[#165DC7] p-8 text-[#F7F5CF] flex flex-col items-center justify-center">
          {description.map((item) => (
            <p key={item.id} className="mb-8">
              {item.title}
            </p>
          ))}
        </div>

        <div className=" bg-[#165DC7] p-12 hidden md:flex md:items-center md:justify-center md:flex-1 ">
          <div className="w-full">
            <Image src={squareDoodle} className="rounded-3xl" />
          </div>
        </div>
      </div>
      <Tabs />
      <div className="flex flex-col lg:flex-row bg-[#165DC7]">
        <div className="flex-1 p-8">
          <Form />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 mb-4 md:mb-0">
          <p className="text-3xl italic text-[#F8F2CF] max-w-md">
            &ldquo;Design adds value faster than it adds costs.&rdquo;
          </p>
        </div>
      </div>
      <footer className="bg-[#165DC7]  text-[#F8F2CF] flex flex-col items-center justify-center p-4 text-xs">
        <div className="flex flex-row items-center justify-center my-2">
          <a
            href="https://www.instagram.com/desi_web_things/"
            className="hover:text-pink-600"
          >
            <BsInstagram />
          </a>
          <div className="mx-2 hover:text-pink-600">
            <BsTwitter />
          </div>
          <a
            href="https://www.linkedin.com/in/jamesaspinall/"
            className="hover:text-pink-600"
          >
            <BsLinkedin />
          </a>
        </div>
        <p>© 2022 desi digital</p>
      </footer>
    </div>
  );
}
