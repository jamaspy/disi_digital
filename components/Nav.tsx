import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="bg-primary flex flex-col items-center gap-12 fixed inset-y-0 left-0 min-h-screen w-12 z-30">
      <a href="#home">
        <Image
          alt="disi digital stag logo"
          width={40}
          height={40}
          src="/disi_logo_trans.png"
          className="mx-auto my-4"
        />
      </a>
      <a
        href="#about"
        className="-rotate-180 w-12 hover:border-secondary-500  border-l-4 border-primary flex items-center justify-center py-4 cursor-pointer transition-all duration-200 ease-in-out"
      >
        <p className="[writing-mode:vertical-lr] font-light text-primary-900">
          About
        </p>
      </a>
      <a
        href="#experience"
        className="-rotate-180 w-12 hover:border-secondary-500  border-l-4 border-primary flex items-center justify-center py-4 cursor-pointer transition-all duration-200 ease-in-out"
      >
        <p className="[writing-mode:vertical-lr] font-light text-primary-900">
          Experience
        </p>
      </a>
      <a
        href="#contact"
        className="-rotate-180 w-12 hover:border-secondary-500  border-l-4 border-primary flex items-center justify-center py-4 cursor-pointer transition-all duration-200 ease-in-out"
      >
        <p className="[writing-mode:vertical-lr] font-light text-primary-900">
          Contact
        </p>
      </a>
    </nav>
  );
};

export default Nav;
