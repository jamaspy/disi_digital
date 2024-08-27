import React from "react";
import { ImSpinner10 } from "react-icons/im";
const LoadingPage = () => {
  return (
    <div className="min-h-screen w-full dark:bg-zinc-950 bg-white flex flex-col items-center justify-center p-8">
      <p className="text-3xl font-extralight text-neutral-200 flex flex-row items-center gap-2">
        <ImSpinner10 className="animate-spin" /> Setting Things Up.
      </p>
    </div>
  );
};

export default LoadingPage;
