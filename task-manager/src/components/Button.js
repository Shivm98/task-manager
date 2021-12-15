import React from "react";

const Button = ({ clickHandler, text }) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-slate-200 p-2 w-auto mt-4 text-center rounded-md text-green-600 font-bold text-xl w-full"
    >
      {text}
    </button>
  );
};

export default Button;
