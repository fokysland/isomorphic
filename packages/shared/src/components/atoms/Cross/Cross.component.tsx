import React from 'react';

import { CrossProps } from './Croos.interface';
import { Container, Tick } from './Cross.styles';

export const Cross = ({ color, size }: CrossProps): JSX.Element => {
  return (
    <Container size={size}>
      <Tick color={color} size={size} />
      <Tick
        color={color}
        size={size}
        style={{ transform: [{ rotate: '90deg' }] }}
      />
    </Container>
  );
};
