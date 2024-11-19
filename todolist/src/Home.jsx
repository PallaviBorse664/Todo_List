import { useState } from "react";
import "./App.css";

const Home = () => {
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState(""); 

  // Function to add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };


  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map((t, index) => (
          <div key={index} className="task-item">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(index)}
            />
            <span className={`task-text ${t.completed ? "completed" : ""}`}>
              {t.text}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
