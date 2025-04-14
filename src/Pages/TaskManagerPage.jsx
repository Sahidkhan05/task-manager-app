import React, { useState } from "react";

const TaskManagerPage = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = task.filter((_, index) => index !== indexToDelete);
    setTask(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
        Task Manager
      </h1>

      <div className="bg-blue-500 rounded shadow mx-auto max-w-md p-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter your task"
          className="w-full bg-white rounded  shadow p-2"
        />

        <button
          onClick={handleAddTask}
          className="w-60 bg-black text-white p-2 rounded mt-10 block mx-auto  "
        >
          Add Task
        </button>
      </div>

      <div className="max-w-md mx-auto mt-6">
        {task.map((t, index) => (
          <div
            key={index}
            className="bg-blue-500 rounded p-2 mb-2 shadow text-white flex justify-between items-center"
          >
            <span>{t}</span>
            

            <button
              onClick={() => handleDelete(index)}
              className="bg-black text-white px-6 py-2 rounded-full"
              > Delete</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagerPage;
