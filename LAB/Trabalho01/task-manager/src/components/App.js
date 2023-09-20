// src/components/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: taskIdCounter };
    setTasks([...tasks, taskWithId]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const updateTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: getNextStatus(task.status) };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case 'A fazer':
        return 'Em andamento';
      case 'Em andamento':
        return 'Concluída';
      case 'Concluída':
        return 'A fazer';
      default:
        return currentStatus;
    }
  };

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
