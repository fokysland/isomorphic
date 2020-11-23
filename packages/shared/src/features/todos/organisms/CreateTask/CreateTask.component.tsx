import React from 'react';

import { Text } from '@iso/shared';

import { Container } from './CreateTask.styles';
import { CreateTaskProps } from './CreateTask.interface';

export const CreateTask = ({}: CreateTaskProps): JSX.Element => {
  return (
    <Container>
      <Text
        text="Create new task"
        bold={900}
        style={{ marginTop: 25 }}
      />
    </Container>
  );
};
