import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="border border-white rounded px-4 py-2 hover:bg-zinc-700 text-white disabled:cursor-not-allowed disabled:hover:bg-slate-200"
    >
      {children}
    </button>
  );
};
export default Button;
