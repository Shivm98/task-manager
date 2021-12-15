import { useState } from "react";
import Button from "./components/Button";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import TaskHeader from "./components/TaskHeader";

function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgresstasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showNewTaskCard, setShowNewTaskCard] = useState(false);

  const toggleNewTaskCard = () => {
    setShowNewTaskCard(!showNewTaskCard);
  };

  const addNewTaskHandler = (newTask) => {
    if (newTask.status === "todo") {
      setTodoTasks([...todoTasks, newTask]);
    } else if (newTask.status === "inprogress") {
      setInProgressTasks([...inProgresstasks, newTask]);
    } else if (newTask.status === "completed")
      setCompletedTasks([...completedTasks, newTask]);
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
          <div className="bg-slate-100 p-4 rounded-md w-96 ">
            <TaskHeader title="to do" count="1" />
            <Button text="+" clickHandler={toggleNewTaskCard} />
            {todoTasks.map((task, index) => (
              <Task key={index} title={task.title} text={task.text} />
            ))}
          </div>

          <div className="bg-slate-100 p-4 rounded-md w-96 ">
            <TaskHeader title="in progress" count="3" />
            <Button text="+" clickHandler={toggleNewTaskCard} />
            {inProgresstasks.map((task, index) => (
              <Task key={index} title={task.title} text={task.text} />
            ))}
          </div>

          <div className="bg-slate-100 p-4 rounded-md w-96 ">
            <TaskHeader title="completed" count="1" />
            <Button text="+" clickHandler={toggleNewTaskCard} />
            {completedTasks.map((task, index) => (
              <Task key={index} title={task.title} text={task.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
