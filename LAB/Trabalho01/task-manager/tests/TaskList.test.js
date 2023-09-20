import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../src/components/TaskList';

test('exibe a lista de tarefas corretamente', () => {
  const tasks = [
    { id: 1, title: 'Tarefa 1', description: 'Descrição 1', status: 'A fazer' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição 2', status: 'Em andamento' },
  ];

  const { getByText } = render(<TaskList tasks={tasks} />);

  expect(getByText('Tarefa 1')).toBeInTheDocument();
  expect(getByText('Tarefa 2')).toBeInTheDocument();
  expect(getByText('Descrição 1')).toBeInTheDocument();
  expect(getByText('Descrição 2')).toBeInTheDocument();
});
