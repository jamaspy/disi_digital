import React from "react";

const Box = ({ title, description }) => {
  return (
    <div className="my-2 md:my-0 border border-slate-600 rounded max-w-md mx-auto  p-8 flex flex-col items-center justify-center text-slate-600 hover:text-slate-800 flex-1 hover:bg-[#245E67] hover:bg-opacity-50 transition-all duration-200 ease-in-out">
      <p className="text-xl italic mb-4">{title}</p>
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};

export default Box;
