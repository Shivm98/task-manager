import { useState } from "react";
import Button from "./components/Button";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import TaskHeader from "./components/TaskHeader";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showNewTaskCard, setShowNewTaskCard] = useState(false);

  const toggleNewTaskCard = () => {
    setShowNewTaskCard(!showNewTaskCard);
  };

  const addNewTaskHandler = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, status) => {
    var id = ev.dataTransfer.getData("text");
    console.log(id);
    let newTasks = tasks.filter((task) => {
      if (task.text === id) {
        task.status = status;
      }
      return task;
    });

    setTasks([...tasks, newTasks]);
  };

  return (
    <div className="App">
      <div className="container m-auto p-10">
        {showNewTaskCard ? (
          <NewTask
            addNewTaskHandler={addNewTaskHandler}
            toggleNewTaskCard={toggleNewTaskCard}
          />
        ) : null}
        <h1 className="text-3xl font-bold ">Projects</h1>

        <div className="container flex  gap-2 mt-3">
          <div
            className="bg-slate-100 p-4 rounded-md w-96 "
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => {
              onDrop(e, "todo");
            }}
          >
            <TaskHeader title="to do" count="1" />
            <Button text="+" clickHandler={toggleNewTaskCard} />
            {tasks.map((task, index) => {
              return task.status === "todo" ? (
                <Task key={index} title={task.title} text={task.text} />
              ) : null;
            })}
          </div>

          <div
            className="bg-slate-100 p-4 rounded-md w-96 "
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => {
              onDrop(e, "inprogress");
            }}
          >
            <TaskHeader title="in progress" count="3" />
            <Button text="+" clickHandler={toggleNewTaskCard} />
            {tasks.map((task, index) => {
              return task.status === "inprogress" ? (
                <Task key={index} title={task.title} text={task.text} />
              ) : null;
            })}
          </div>

          <div
            className="bg-slate-100 p-4 rounded-md w-96 "
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => {
              onDrop(e, "completed");
            }}
          >
            <TaskHeader title="completed" count="1" />
            <Button text="+" clickHandler={toggleNewTaskCard} />
            {tasks.map((task, index) => {
              return task.status === "completed" ? (
                <Task key={index} title={task.title} text={task.text} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
