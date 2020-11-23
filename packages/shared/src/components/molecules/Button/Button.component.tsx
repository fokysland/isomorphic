import React from 'react';

import { Text } from '@iso/shared';

import { Container } from './Button.styles';
import { ButtonProps } from './Button.interface';

export const Button = ({
  backgroundColor,
  text,
  textColor,
  style
}: ButtonProps): JSX.Element => {
  return (
    <Container color={backgroundColor} style={style} activeOpacity={0.6}>
      <Text bold={900} text={text} color={textColor} />
    </Container>
  );
};
