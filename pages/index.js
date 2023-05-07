import Image from "next/image";

import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import Boxes from "../components/Boxes/";
import Form from "../components/Form";
import Header from "../components/Head";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";

import { description } from "../content/description";

import squareDoodle from "../public/me.png";

export default function Home() {
  return (
    <div className="bg-primary">
      <Header title="disi" description="ai powered design" />
      <div className="flex flex-col-reverse lg:flex-row bg-[#245E67]">
        <div
          className="w-full"
          // style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)" }}
        >
          <Hero />
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row bg-[#245E67]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)" }}
      >
        <div className="flex-1  p-8 text-slate-300 flex flex-col items-start justify-center">
          <p className="mb-8 font-semibold text-lg">
            Welcome to the home of disi digital.
          </p>
          <p>
            We are seasoned JAM Stack experts and your one-stop solution for
            innovative and robust full stack applications, websites, e-commerce
            platforms, and video streaming subscription services.
          </p>
          <p className="my-8">
            With years of experience under our belts, we have honed our skills
            in designing, developing, and deploying high-performance projects
            from scratch, leveraging the power of cutting edge tech such as
            NextJS, Tailwind, Vercel, Stripe.
          </p>
          <p>
            Our passion lies in crafting seamless and engaging user experiences
            that not only meet, but exceed client expectations. So, let&lsquo;s
            embark on a journey together to transform your digital presence and
            elevate your business to new heights!
          </p>
        </div>

        <div className="md:p-12 pb-24 flex items-center justify-center flex-1">
          <div className="w-full">
            <Image src={squareDoodle} className="rounded-3xl" alt="man" />
          </div>
        </div>
      </div>
      <div className="bg-primary w-full px-4 py-12 md:py-24 flex md:flex-row flex-col gap-4">
        <Boxes />
      </div>
      <div style={{ clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)" }}>
        <Tabs />
      </div>

      <div className="flex flex-col lg:flex-row bg-primary">
        <div className="flex-1 p-8 py-12">
          <Form />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 mb-4 md:mb-0">
          <p className="text-3xl italic text-slate-800 max-w-md">
            &ldquo;Design adds value faster than it adds costs.&rdquo;
          </p>
        </div>
      </div>
      <footer className="bg-[#245E67]  text-[#F8F2CF] flex flex-col items-center justify-center p-4 text-xs">
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
