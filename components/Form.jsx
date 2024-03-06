'use client';
import React from 'react';

import { toast } from 'react-toastify';
import Button from './Button';
const Form = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [name, setName] = React.useState('');
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
        Please, try again or DM me on{' '}
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
    if (status === 'success') {
      return toast.success(<SuccessMsg />, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      return toast.error(<ErrorMsg />, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });
    const data = await res.json();

    if (data.status === 'Email Sent') {
      setEmailSent(true);
      setIsSending(false);
      setEmail('');
      setMessage('');
      setName('');
      showToaster('success');
    } else {
      showToaster('error');
      setEmailSent(false);
      setIsSending(false);
    }
  };

  const renderButtonText = () => {
    if (isSending) {
      return (
        <p className="flex flex-row items-center justify-center">Sending...</p>
      );
    } else if (emailSent) {
      return 'Email Sent';
    } else {
      return 'Send';
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
    <form className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-medium text-slate-800 ">
          Your Name
        </label>
        <input
          className="rounded-md p-2 font-sans bg-primary text-slate-800 border border-slate-700"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full mt-4">
        <label htmlFor="email" className="font-medium text-slate-800 ">
          Your Email Address
        </label>
        <input
          className="rounded-md p-2 font-sans bg-primary text-slate-800 border border-slate-700"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full mt-4 mb-8">
        <label htmlFor="message" className="font-medium text-slate-800">
          Your Message
        </label>
        <textarea
          className="rounded-md p-2 font-sans bg-primary text-slate-800 border border-slate-700"
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
  );
};

export default Form;
