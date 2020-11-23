import React from 'react';

import { Text, TaskCard, CreateTask } from '@iso/shared';

import { Container, Grid } from './Tasks.styles';

export const TasksPage = (): JSX.Element => {
  return (
    <Container>
      <Text
        text="Tasks"
        size="headline"
        bold={700}
        style={{ marginBottom: 80 }}
      />

      <Grid>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <CreateTask />
      </Grid>
    </Container>
  );
};
