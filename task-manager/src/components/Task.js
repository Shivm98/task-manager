import React from "react";

const Task = ({ title, text }) => {
  const onDragStart = (ev, id) => {
    console.log("dragstart", id);
    ev.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      className="bg-white mt-4 p-2 rounded-md shadow-md"
      onDragStart={(e) => onDragStart(e, text)}
      draggable
    >
      <div className="font-medium text-md text-black-200 text-slate-700 capitalize">
        {title}
      </div>
      <div className="text-sm font-normal mt-2 text-slate-400">{text}</div>
    </div>
  );
};

export default Task;
