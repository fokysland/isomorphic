import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;
