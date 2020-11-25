import React from 'react';

import { Cross, Text } from '@iso/shared';

import { Container } from './CreateTask.styles';
import { CreateTaskProps } from './CreateTask.interface';

export const CreateTask = ({ onCreate }: CreateTaskProps): JSX.Element => {
  return (
    <Container activeOpacity={1} onPress={onCreate} accessibilityRole="link">
      <Cross size={20} color="text_gray" />
      <Text text="Create new task" bold={900} style={{ marginTop: 25 }} />
    </Container>
  );
};
