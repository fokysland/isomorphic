import React from 'react';

import { useTheme } from 'styled-components/native';

import { Container, Input } from './TextInput.styles';
import { TextInputProps } from './TextInput.interface';

export const TextInput = ({ value, onChange, placeholder }: TextInputProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
      />
    </Container>
  );
};
