import Image from "next/image";
import React from "react";
import clouds from "../public/doodle.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative pt-4">
      <Image
        alt="clouds"
        src={clouds}
        placeholder="blur"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* <div className="max-w-lg z-10 text-center text-black flex flex-col items-center justify-around">
        <p className="text-4xl">AI Powered Web Design</p>
        <hr class=" w-full my-2 bg-black" />
        <p className="text-xl">design | develop | host | seo</p>
      </div> */}
    </div>
  );
};

export default Hero;
