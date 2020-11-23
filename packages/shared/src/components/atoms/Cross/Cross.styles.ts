import styled from 'styled-components/native';
import { Color } from '@iso/shared';

export const Container = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  
  position: relative;
`;

export const Tick = styled.View<{ color: Color, size: number }>`
  height: 100%;
  width: 5px;
  
  position: absolute;
  left: ${({ size }) => size / 2 - 2.5}px;
  
  background-color: ${({ color, theme }) => theme.colors[color]};
`;
