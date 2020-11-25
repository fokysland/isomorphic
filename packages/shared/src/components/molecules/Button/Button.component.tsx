import React from 'react';

import { Text } from '@iso/shared';

import { Container } from './Button.styles';
import { ButtonProps } from './Button.interface';

export const Button = ({
  backgroundColor = 'main',
  text,
  textColor = 'text',
  style,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <Container
      onPress={onClick}
      color={backgroundColor}
      style={style}
      activeOpacity={0.6}
      accessibilityRole='button'
    >
      <Text bold={900} text={text} color={textColor} />
    </Container>
  );
};
