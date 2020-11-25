import React from 'react';

import { useTheme } from 'styled-components/native';

import { Container, Input } from './TextInput.styles';
import { TextInputProps } from './TextInput.interface';

export const TextInput = ({
  value,
  onChange,
  placeholder,
  style,
  multiline = false,
  isPassword = false
}: TextInputProps): JSX.Element => {
  const theme = useTheme();

  const props = isPassword
    ? ({
        textContentType: 'password',
        autoCompleteType: 'password',
        secureTextEntry: true,
        keyboardType: 'default',
        returnKeyType: 'done',
        spellCheck: false,
        maxLength: 48
      } as const)
    : ({} as const);

  console.log(props);

  return (
    <Container style={style}>
      <Input
        {...props}
        multiline={multiline}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
      />
    </Container>
  );
};
