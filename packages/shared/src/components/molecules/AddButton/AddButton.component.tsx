import React from 'react';

import { Cross } from '@iso/shared';

import { Container } from './AddButton.styles';
import { AddButtonProps } from './AddButton.interface';

export const AddButton = ({ onAdd, style }: AddButtonProps): JSX.Element => {
  return (
    <Container onPress={onAdd} activeOpacity={0.7} style={style}>
      <Cross size={20} color="black" />
    </Container>
  );
};
