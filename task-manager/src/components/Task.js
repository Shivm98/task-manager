import React from "react";

const Task = ({ title, text }) => {
  return (
    <div className="bg-white mt-4 p-2 rounded-md shadow-md">
      <div className="font-medium text-md text-black-200 text-slate-700 capitalize">
        {title}
      </div>
      <div className="text-sm font-normal mt-2 text-slate-400">{text}</div>
    </div>
  );
};

export default Task;
