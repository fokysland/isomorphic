import React from 'react';

import { Container } from './Text.styles';
import { TextProps } from './Text.interface';

export const Text = ({
  text,
  color = 'text',
  bold = 300,
  size = 'normal',
  style
}: TextProps): JSX.Element => {
  return (
    <Container color={color} bold={bold} size={size} style={style}>
      {text}
    </Container>
  );
};
