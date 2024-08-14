import React from "react";
import ContactForm from "./contact-form";

export const ContactSection = () => {
  return (
    <div className="bg-zinc-950 p-10 pb-12">
      <h2 className="lg:pl-10 pt-10 text-left text-xl md:text-4xl font-bold text-zinc-950 dark:text-white">
        Contact Us
      </h2>
      <div className=" max-w-3xl mx-auto mt-12 px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
