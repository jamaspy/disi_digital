import Image from "next/image";
import React from "react";
import clouds from "../public/disi_logo_trans.png";

const Hero = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center relative pt-4">
      <div className="max-w-xs text-center">
        <Image
          alt="clouds"
          width={200}
          height={200}
          src={clouds}
          placeholder="blur"
          className="mx-auto"
        />
        <p className="text-slate-600 text-3xl mt-2 drop-shadow">disi digital</p>
        <p className="text-slate-600 text-xs mt-2 drop-shadow">
          design | develop | deploy
        </p>
      </div>
      <p></p>
    </div>
  );
};

export default Hero;
