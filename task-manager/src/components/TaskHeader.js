import React from "react";

const TaskHeader = ({ title, count }) => {
  return (
    <div className="flex justify-between">
      <div className="text-base     capitalize">{title}</div>
      <div className="text-base bg-slate-200  text-green-600 p-2 w-8 h-8 rounded-md flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default TaskHeader;
