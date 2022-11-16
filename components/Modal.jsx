import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";
import { Button } from "./";
function Modal({ setShow }) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const SuccessMsg = ({ closeToast, toastProps }) => (
    <div className="flex flex-col items-start">
      <p className="font-semibold">Thanks, Email Sent!</p>
      <p className="font-base">I&apos;ll be in touch soon. 🦄</p>
    </div>
  );
  const ErrorMsg = ({ closeToast, toastProps }) => (
    <div className="flex flex-col items-start">
      <p className="font-semibold mb-1">Sorry, Email Failed! 😔</p>
      <p>
        Please, try again or DM me on{" "}
        <a
          href="https://www.instagram.com/desi_web_things/"
          target="_blank"
          rel="noreferrer"
          className="font-base text-blue-400 underline"
        >
          Instagram.
        </a>
      </p>
    </div>
  );

  const showToaster = (status) => {
    if (status === "success") {
      return toast.success(<SuccessMsg />, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      return toast.error(<ErrorMsg />, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });
    const data = await res.json();

    if (data.status === "Email Sent") {
      setEmailSent(true);
      setIsSending(false);
      setEmail("");
      setMessage("");
      setName("");
      showToaster("success");
      setShow(false);
    } else {
      showToaster("error");
      setEmailSent(false);
      setIsSending(false);
    }
  };

  const renderButtonText = () => {
    if (isSending) {
      return (
        <p className="flex flex-row items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin mr-4" />
          Sending...
        </p>
      );
    } else if (emailSent) {
      return "Email Sent";
    } else {
      return "Send";
    }
  };
  const isDisabled = () => {
    if (isSending || emailSent || !email || !message || !name) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="absolute p-8 inset-0 my-4 bg-slate-400 rounded-md flex flex-col items-start justify-center mx-2 h-full">
      <FaRegWindowClose
        className="text-2xl self-end hover:text-white cursor-pointer"
        onClick={() => setShow(false)}
      />
      <form className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="font-medium">
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
          <label htmlFor="email" className="font-medium">
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
          <label htmlFor="message" className="font-medium">
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
        <Button disabled={isDisabled()} onClick={handleSubmit}>
          {renderButtonText()}
        </Button>
      </form>
    </div>
  );
}

export default Modal;
