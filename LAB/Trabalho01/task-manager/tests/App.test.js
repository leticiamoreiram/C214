import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './src/components/App'; // Certifique-se de que o caminho para o componente App está correto

test('adiciona uma nova tarefa', () => {
  render(<App />);

  const titleInput = screen.getByPlaceholderText('Título');
  const descriptionInput = screen.getByPlaceholderText('Descrição');
  const addButton = screen.getByText('Adicionar');

  fireEvent.change(titleInput, { target: { value: 'Nova Tarefa' } });
  fireEvent.change(descriptionInput, { target: { value: 'Descrição da nova tarefa' } });
  fireEvent.click(addButton);

  // Atualize os seletores para corresponder aos elementos corretos
  const taskTitle = screen.getByText('Title: Nova Tarefa');
  const taskDescription = screen.getByText('Description: Descrição da nova tarefa');

  expect(taskTitle).toBeInTheDocument();
  expect(taskDescription).toBeInTheDocument();
});
