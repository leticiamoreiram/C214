// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'A fazer',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() === '') {
      return; // Não adiciona tarefas em branco
    }
    addTask(newTask);
    setNewTask({
      title: '',
      description: '',
      status: 'A fazer',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div>
      <h2>Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newTask.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={newTask.description}
          onChange={handleChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default TaskForm;
