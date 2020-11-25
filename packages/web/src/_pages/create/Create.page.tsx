import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { Button, Text, TextInput, addTodo } from '@iso/shared';

import { ExitButton } from '../../components/molecules';

import { Container, UpperContainer } from './Create.styles';

export const CreatePage = () => {
  const router = useRouter();

  const [taskName, setTaskName] = useState('');

  const handleCreate = () => {
    if (taskName.trim() !== '') {
      addTodo({ title: taskName.trim(), date: new Date() });
      router.push('/tasks').then();
    }
  };

  const handleExit = () => {
    router.push('/tasks').then();
  };

  return (
    <Container>
      <UpperContainer>
        <Text
          text="Tasks"
          size="headline"
          bold={700}
        />
        <ExitButton onExit={handleExit} />
      </UpperContainer>

      <Text
        text="Task name"
        size="large"
        bold={700}
        style={{ marginBottom: 30 }}
      />

      <TextInput
        value={taskName}
        onChange={setTaskName}
        placeholder="Enter task name..."
        multiline
        style={{ marginBottom: 100 }}
      />

      <Button text="Create" onClick={handleCreate} backgroundColor="main" />
    </Container>
  );
};
