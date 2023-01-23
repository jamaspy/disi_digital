import React from "react";

const Box = ({ title, description }) => {
  return (
    <div className="my-2 md:my-0 border rounded max-w-md mx-auto  p-8 flex flex-col items-center justify-center text-[#F7F5CF] flex-1 hover:bg-[#1C3D6A] hover:bg-opacity-50 transition-all duration-200 ease-in-out">
      <p className="text-xl italic mb-4">{title}</p>
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};

export default Box;
