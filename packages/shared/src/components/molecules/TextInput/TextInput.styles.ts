import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

export const Input = styled.TextInput`
  height: 60px;
  border: 0;
  
  outline-width: 0;
  
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 700;
  
  padding-left: 20px;
`;
