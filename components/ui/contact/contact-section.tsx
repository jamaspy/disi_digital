import ContactForm from "./contact-form";

export const ContactSection = () => {
  return (
    <div className="dark:bg-zinc-950 bg-neutral-100 p-10 pb-12">
      <h2 className=" pt-10 text-left text-xl md:text-4xl font-bold dark:text-neutral-200 text-neutral-900">
        Contact Us
      </h2>
      <div className=" max-w-3xl mx-auto mt-12 px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
