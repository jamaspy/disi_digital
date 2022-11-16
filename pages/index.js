import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Bs, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { Button, Modal } from "../components";
import clouds from "../public/cloud.jpg";
import me from "../public/me.jpeg";
export default function Home() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="">
      <Head>
        <title>disi digital</title>
        <meta
          name="description"
          content="disi digital - web development for the Northern Beaches NSW"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        {/* HERO */}
        <div className="min-h-screen flex flex-col items-center justify-center relative">
          <Image
            alt="clouds"
            src={clouds}
            placeholder="blur"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="z-10 text-slate-900">
            <h1 className="text-8xl ">disi</h1>
            <p>develop | deploy | host</p>
          </div>
        </div>
        {/* HERO END*/}
        {/* INTRO */}
        <div className="flex flex-col md:flex-row relative w-full">
          {show && <Modal setShow={setShow} />}
          <div className="flex-1 bg-black text-white p-4">
            <div className="h-full flex flex-col items-start justify-center">
              <p className="font-bold">Welcome to disi digital</p>
              <p className="mt-4">
                My name is James, I am a Senior Web Developer with experience
                creating web applications, websites and subscriptions based
                content streaming services.
              </p>
              <p className="mt-4">
                I am based in beautiful Avalon on the Northern beaches and
                alongside my day job I worked with small to medium business to
                design, develop and deploy optimised, performant and cutting
                edge platforms.
              </p>
              <p className="mt-4 mb-8">
                If you have an idea for something new, or you are looking for
                help with something existing please, get in touch for a chat.
              </p>
              <Button onClick={() => setShow(!show)}>Contact me</Button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white">
            <Image alt="clouds" src={me} placeholder="blur" />
          </div>
        </div>
        {/* INTRO END */}
      </div>

      <footer className="bg-black text-white flex flex-col items-center justify-center p-4 text-xs">
        <div className="flex flex-row items-center justify-center mb-2">
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
