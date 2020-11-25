import React from 'react';

import { useEvent, useStore } from 'effector-react';

import { useRouter } from 'next/router';

import {
  Text,
  CreateTask,
  TaskCard,
  TodosGate,
  $todos,
  doTodo as doTodoEvent,
  Bandage,
  $completedTasksCounter, AddButton
} from '@iso/shared';

import { useSizes } from '../../hooks/useSizes';

import { Container, Grid, BandageContainer, AddButtonContainer } from './Tasks.styles';

export const TasksPage = (): JSX.Element => {
  const todos = useStore($todos);
  const counter = useStore($completedTasksCounter);

  const doTodo = useEvent(doTodoEvent);

  const router = useRouter();

  const { isMobile } = useSizes();

  const text = isMobile ? counter.toString() : `Completed tasks: ${counter}`;

  const handleCreate = () => {
    router.push('/create').then();
  };

  return (
    <Container>
      <TodosGate />

      <BandageContainer>
        <Bandage text={text} />
      </BandageContainer>

      <AddButtonContainer>
        <AddButton onAdd={handleCreate} />
      </AddButtonContainer>

      <Text
        text="Tasks"
        size="headline"
        bold={700}
        style={{ marginBottom: 80 }}
      />

      <Grid>
        {todos.map(todo => (
          <TaskCard key={todo.id} {...todo} onDone={doTodo} />
        ))}

        <CreateTask onCreate={handleCreate} />
      </Grid>
    </Container>
  );
};
