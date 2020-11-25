import React from 'react';

import { Container, Tick } from './ExitButton.styles';
import { ExitButtonProps } from './ExitButton.interface';

export const ExitButton = ({
  className,
  onExit
}: ExitButtonProps): JSX.Element => {
  return (
    <Container onClick={onExit} className={className} type="button">
      <Tick />
      <Tick />
    </Container>
  );
};
