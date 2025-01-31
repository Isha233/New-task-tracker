// src/components/AddTask.js
import React, { useState } from 'react'; // Ensure useState is imported

const AddTask = ({ onAdd }) => {
  const [taskText, setTaskText] = useState(''); // useState is now defined

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText) return;
    onAdd(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;