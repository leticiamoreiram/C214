import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../src/components/App';

test('adiciona uma nova tarefa à lista', () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const titleInput = getByPlaceholderText('Título');
  const descriptionInput = getByPlaceholderText('Descrição');
  const addButton = getByText('Adicionar');

  fireEvent.change(titleInput, { target: { value: 'Nova Tarefa' } });
  fireEvent.change(descriptionInput, { target: { value: 'Descrição da nova tarefa' } });
  fireEvent.click(addButton);

  const taskTitle = getByText('Nova Tarefa');
  const taskDescription = getByText('Descrição da nova tarefa');

  expect(taskTitle).toBeInTheDocument();
  expect(taskDescription).toBeInTheDocument();
});

test('atualiza o status de uma tarefa', () => {
  const { getByText } = render(<App />);

  const updateButton = getByText('Update Status');
  fireEvent.click(updateButton);

  const taskStatus = getByText('Em andamento');

  expect(taskStatus).toBeInTheDocument();
});

test('exclui uma tarefa da lista', () => {
  const { getByText, queryByText } = render(<App />);

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  const taskTitle = queryByText('Nova Tarefa');
  const taskDescription = queryByText('Descrição da nova tarefa');

  expect(taskTitle).toBeNull();
  expect(taskDescription).toBeNull();
});
