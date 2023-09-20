// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, updateTaskStatus, deleteTask }) {
  return (
    <li>
      <span>Title: {task.title}</span>
      <span>Description: {task.description}</span>
      <span>Status: {task.status}</span>
      <button onClick={() => updateTaskStatus(task.id)}>Update Status</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
