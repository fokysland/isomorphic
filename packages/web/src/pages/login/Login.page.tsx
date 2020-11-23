import React, { useState } from 'react';

import { Text, TextInput, Button } from '@iso/shared';

import { Container, Content, DoMore } from './Login.styles';

export const Login = (): JSX.Element => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Content>
        <Text
          size="headline"
          text="Welcome to a todo app"
          bold={700}
          style={{ marginBottom: 80 }}
        />

        <Text
          size="large"
          text="Email"
          bold={700}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          placeholder="Enter email..."
          value={value}
          onChange={setValue}
        />

        <Text
          size="large"
          text="Password"
          bold={700}
          style={{ marginBottom: 20, marginTop: 30 }}
        />
        <TextInput
          placeholder="Enter password..."
          value={value}
          onChange={setValue}
        />

        <Button
          style={{ marginTop: 120 }}
          text="Login"
          backgroundColor="main"
        />
      </Content>

      <DoMore />
    </Container>
  );
};
