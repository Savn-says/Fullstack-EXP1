import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // store input value
  const [tasks, setTasks] = useState([]); // store all tasks

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask(""); // clear input
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
