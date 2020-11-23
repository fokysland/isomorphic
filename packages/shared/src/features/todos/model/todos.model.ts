import { createEffect, createEvent, createStore } from 'effector';
import { Todo } from '@iso/shared';
import { getTodos } from '../todos.api';

export const $todos = createStore<Todo[]>([]);

export const addTodo = createEvent<Omit<Todo, 'id'>>();
export const doTodo = createEvent<string>();

export const fetchTodoFx = createEffect<unknown, Todo[]>();

fetchTodoFx.use(async () => {
  const rawTodos = await getTodos();
  return rawTodos.map((todo) => ({
    date: new Date(),
    id: todo.id,
    title: todo.title,
  }));
});

$todos
  .on(addTodo, (todos, todo) => {
    return [...todos, { ...todo, id: Date.now().toString() }];
  })
  .on(doTodo, (todos, id) => todos.filter((todo) => todo.id !== id));
