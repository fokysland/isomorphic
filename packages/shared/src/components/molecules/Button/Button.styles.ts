import styled from 'styled-components/native';

import { ContainerProps } from './Button.interface';

export const Container = styled.TouchableOpacity<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 54px;

  box-shadow: ${({ theme }) => theme.shadows.main};
  background-color: ${({ theme, color }) => theme.colors[color]};
  
  width: 100%;
  border-radius: 10px;
`;
