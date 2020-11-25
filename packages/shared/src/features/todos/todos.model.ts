import { createEffect, createEvent, createStore, guard } from 'effector-root';
import { createGate } from 'effector-react';
import { Todo } from '@iso/shared';

import { getTodos } from './todos.api';

export const $todos = createStore<Todo[]>([]);
export const $completedTasksCounter = createStore(0);
const $amountOfRequests = createStore(0);

export const addTodo = createEvent<Omit<Todo, 'id'>>();
export const doTodo = createEvent<string>();

export const fetchTodoFx = createEffect<unknown, Todo[]>();

fetchTodoFx.use(async () => {
  const rawTodos = await getTodos();
  return rawTodos.map(todo => ({
    date: new Date(),
    id: todo.id,
    title: todo.title
  }));
});

$todos
  .on(addTodo, (todos, todo) => {
    return [{ ...todo, id: Date.now().toString() }, ...todos];
  })
  .on(doTodo, (todos, id) => todos.filter(todo => todo.id !== id))
  .on(fetchTodoFx.done, (todos, { result }) => [...todos, ...result]);

$completedTasksCounter.on(doTodo, counter => counter + 1);

$amountOfRequests.on(fetchTodoFx.done, () => 1);

export const TodosGate = createGate();

guard({
  source: TodosGate.open,
  filter: $amountOfRequests.map(amount => amount === 0),
  target: fetchTodoFx
});
