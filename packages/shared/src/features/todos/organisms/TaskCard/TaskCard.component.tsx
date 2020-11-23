import React from 'react';

import { Button, Text } from '@iso/shared';

import { Container } from './TaskCard.styles';
import { TaskCardProps } from './TaskCard.interface';

export const TaskCard = ({}: TaskCardProps): JSX.Element => {
  return (
    <Container>
      <Text text="Do a workout" size="large" bold={700} />
      <Text
        text="5 november 2020"
        bold={700}
        color="text_gray"
        style={{ marginBottom: 25, marginTop: 5 }}
      />
      <Button
        text="Done"
        backgroundColor="white"
        textColor="done"
      />
    </Container>
  );
};
