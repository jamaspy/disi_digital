import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-[#1C3D6A]  rounded px-4 py-2 hover:bg-[#104492] text-white disabled:cursor-not-allowed disabled:hover:bg-blue-900"
    >
      {children}
    </button>
  );
};
export default Button;
