
import React from 'react';

const task = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
      <div
        onClick={() => onToggle(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {task.text}
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default task;