import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  width: 100%;
  
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
`;
