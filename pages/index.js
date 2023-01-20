import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Button, Modal } from "../components";
import clouds from "../public/beach.jpg";

import Link from "next/link";
import tile1 from "../public/tile1.png";
import tile2 from "../public/tile2.png";
import tile3 from "../public/tile3.png";

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <div className="bg-[#0F1017]">
      <Head>
        <title>disi digital</title>
        <meta
          name="description"
          content="disi digital - web development for the Northern Beaches NSW"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0F1017]">
        {/* HERO */}
        <div className="min-h-screen flex flex-col items-center justify-center relative pt-4">
          <Image
            alt="clouds"
            src={clouds}
            placeholder="blur"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 flex flex-row justify-around items-center w-full text-[#d5d5d3]">
            <span className="group ">
              <p className="font-light  ">work</p>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-700"></span>
            </span>

            <span className="group ">
              <p className="font-light">about</p>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-700"></span>
            </span>
            <p className="text-2xl">disi</p>
            <span className="group">
              <a className="font-light">hosting</a>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-700"></span>
            </span>
            <span className="group ">
              <p className="font-light">contact</p>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-700"></span>
            </span>
          </div>
          <div className="max-w-lg z-10 text-center text-[#d5d5d3] flex flex-col items-center justify-around">
            <p className="text-3xl">AI Powered Web Design</p>
            <hr class=" w-full my-2 bg-gray-800" />
            <p className="text-xl">design | development | hosting | seo</p>
          </div>
        </div>

        {/* HERO END*/}
        {/* INTRO */}
        <div className="flex flex-col md:flex-row relative w-full mt-12">
          {show && <Modal setShow={setShow} />}
          <div className="flex-1 bg-[#0F1017] text-white p-4">
            <div className="flex flex-col md:flex-row justify-around max-w-4xl gap-12 mx-auto">
              <div class="group relative max-w-md">
                <img src="/tile1.png" alt="dev logo" />
                <div class="absolute p-4 text-center top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-0 group-hover:h-full group-hover:opacity-75 duration-500">
                  <p className="text-lg italic">AI Drive Design</p>
                  <p className="text-sm font-light">
                    Using the latest AI driven content and image we can create
                    an truly unique design for your business.
                  </p>
                </div>
              </div>
              <div class="group relative max-w-md">
                <img src="/tile2.png" alt="dev logo" />
                <div class="absolute p-4 text-center top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-0 group-hover:h-full group-hover:opacity-75 duration-500">
                  <p className="text-lg italic">Cutting Edge Development</p>
                  <p className="text-sm font-light">
                    Bleeding edge ReactJS libraries to create blazing fast SEO
                    optimised websites.
                  </p>
                </div>
              </div>
              <div class="group relative max-w-md">
                <img src="/tile3.png" alt="dev logo" />
                <div class="absolute p-4 text-center top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-0 group-hover:h-full group-hover:opacity-75 duration-500">
                  <p className="text-lg italic">Deploymeny & Hosting</p>
                  <p className="text-sm font-light">
                    Continuous deployment and hosting on Vercel allowing for
                    zero downtime and real time updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#0F1017] text-[#d5d5d3] max-w-xl border text-md md:mx-auto p-8 mt-24 mx-4">
          <p className="mb-8">
            Are you looking for a reliable web development agency to help you
            create a modern, high-performing website? Look no further than disi.
            We specialize in using <span className="font-bold">ReactJS</span>{" "}
            frameworks like <span className="font-bold">NextJS</span> and
            <span className="font-bold">GatsbyJS</span> to build websites that
            are both visually stunning and highly functional.
          </p>

          <p className="mb-8">
            Our team of experts is well-versed in using the latest technologies
            and best practices to ensure that your website is built to the
            highest standards. We use{" "}
            <span className="font-bold">TailwindCSS</span> to create beautiful,
            responsive designs that look great on any device, and we offer
            hosting and continuous deployment services using{" "}
            <span className="font-bold">Vercel</span>.
          </p>

          <p className="mb-8">
            In addition to our technical expertise, we also pride ourselves on
            our commitment to customer service. We understand that creating a
            website can be a daunting task, and we&lsquo;re here to guide you
            through the process every step of the way. Whether you&lsquo;re a
            small business owner or a large corporation, we&lsquo;ll work
            closely with you to understand your needs and create a website that
            meets your specific requirements.
          </p>
          <p>
            So why wait? If you&lsquo;re ready to take your website to the next
            level, contact us today and let us show you what we can do. With
            disi, you can be sure that you&lsquo;re getting the best in web
            development services.
          </p>
        </div>
      </div>
      <div className="max-w-xl flex flex-row mx-auto mt-12 p-8 gap-4 items-center">
        <form className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="font-medium text-[#d5d5d3]">
              Your Name
            </label>
            <input
              className="rounded-md p-2"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full mt-4">
            <label htmlFor="email" className="font-medium text-[#d5d5d3]">
              Your Email Adress
            </label>
            <input
              className="rounded-md p-2"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full my-4">
            <label htmlFor="message" className="font-medium text-[#d5d5d3]">
              Your Message
            </label>
            <textarea
              className="rounded-md p-2"
              rows={5}
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button>Send</Button>
        </form>
      </div>
      <footer className="bg-[#0F1017] text-white flex flex-col items-center justify-center p-4 text-xs mt-12">
        {/* <Image alt="disi logo" src={logo} width={60} height={60} /> */}
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
