import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from '../src/components/TaskForm';

test('adiciona uma nova tarefa', () => {
  const addTaskMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TaskForm addTask={addTaskMock} />);

  const titleInput = getByPlaceholderText('Título');
  const descriptionInput = getByPlaceholderText('Descrição');
  const addButton = getByText('Adicionar');

  fireEvent.change(titleInput, { target: { value: 'Nova Tarefa' } });
  fireEvent.change(descriptionInput, { target: { value: 'Descrição da nova tarefa' } });
  fireEvent.click(addButton);

  expect(addTaskMock).toHaveBeenCalledWith({
    title: 'Nova Tarefa',
    description: 'Descrição da nova tarefa',
    status: 'A fazer',
  });
});
