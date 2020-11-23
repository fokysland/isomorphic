import React from 'react';

import { Emoji, JinguLogo, Text } from '@iso/shared';

import { Container, Column } from './Hello.styles';

export const HelloPage = () => {
  return (
    <Container>
      <Column>
        <Text text="Ilya Izilanov" size="name" />
        <Emoji style={{ marginTop: 100 }} />
      </Column>

      <JinguLogo />
    </Container>
  );
};
