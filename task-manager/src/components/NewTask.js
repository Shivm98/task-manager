import React, { useState } from "react";
import Button from "./Button";

const NewTask = ({ addNewTaskHandler, toggleNewTaskCard }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    toggleNewTaskCard();
    addNewTaskHandler({ title, text, status });
  };
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-600 z-10 opacity-60"></div>
      <form
        onSubmit={submitHandler}
        className="bg-white p-10 w-200 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-2 z-20"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          type="text"
          className="bg-slate-100 p-1"
        />
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="bg-slate-100 p-1"
        >
          <option selected value="todo">
            todo
          </option>
          <option value="inprogress">in progress</option>
          <option value="completed">completed</option>
        </select>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="text"
          type="text"
          className="bg-slate-100 p-1"
        />
        <Button text="Add" />
      </form>
    </div>
  );
};

export default NewTask;
