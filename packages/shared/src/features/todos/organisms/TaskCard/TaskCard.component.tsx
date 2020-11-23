import React from 'react';

import { Button, Text } from '@iso/shared';

import { Container } from './TaskCard.styles';
import { TaskCardProps } from './TaskCard.interface';

export const TaskCard = ({
  date,
  id,
  onDone,
  style,
  title,
}: TaskCardProps): JSX.Element => {
  const handleDone = () => {
    onDone(id);
  };

  return (
    <Container style={style}>
      <Text text={title} size="large" bold={700} />
      <Text
        text={date.toLocaleDateString()}
        bold={700}
        color="text_gray"
        style={{ marginBottom: 25, marginTop: 5 }}
      />

      <Button
        onClick={handleDone}
        text="Done"
        backgroundColor="white"
        textColor="done"
      />
    </Container>
  );
};
