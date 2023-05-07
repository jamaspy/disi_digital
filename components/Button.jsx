import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-[#245E67] rounded px-4 py-2 hover:bg-slate-800 text-white disabled:cursor-not-allowed disabled:hover:bg-gray-600"
    >
      {children}
    </button>
  );
};
export default Button;
