import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskItem from '../src/components/TaskItem';

test('atualiza o status da tarefa', () => {
  const task = { id: 1, title: 'Tarefa 1', description: 'Descrição 1', status: 'A fazer' };
  const updateTaskStatusMock = jest.fn();
  const { getByText } = render(
    <TaskItem task={task} updateTaskStatus={updateTaskStatusMock} />
  );

  const updateButton = getByText('Update Status');
  fireEvent.click(updateButton);

  expect(updateTaskStatusMock).toHaveBeenCalledWith(1);
});


test('exclui a tarefa', () => {
    const task = { id: 1, title: 'Tarefa 1', description: 'Descrição 1', status: 'A fazer' };
    const deleteTaskMock = jest.fn();
    const { getByText } = render(<TaskItem task={task} deleteTask={deleteTaskMock} />);
  
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
  
    expect(deleteTaskMock).toHaveBeenCalledWith(1);
  });
