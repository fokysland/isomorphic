import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { Text, TextInput, Button, login } from '@iso/shared';

import { Container, Content, DoMore } from './Login.styles';

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      login(email.trim());
      router.push('/tasks').then();
    }
  };

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
          value={email}
          onChange={setEmail}
        />

        <Text
          size="large"
          text="Password"
          bold={700}
          style={{ marginBottom: 20, marginTop: 30 }}
        />
        <TextInput
          placeholder="Enter password..."
          isPassword
          value={password}
          onChange={setPassword}
        />

        <Button style={{ marginTop: 120 }} text="Login" onClick={handleLogin} />
      </Content>
      <DoMore />
    </Container>
  );
};
