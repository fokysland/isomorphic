import React from 'react';

import { Text } from '@iso/shared';

import { Container } from './Bandage.styles';
import { BandageProps } from './Bandage.interface';

export const Bandage = ({ text, style }: BandageProps): JSX.Element => {
  return (
    <Container style={style}>
      <Text text={text} bold={700} />
    </Container>
  );
};
