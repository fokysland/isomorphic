import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 51px;
  height: 51px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.colors.main};
`;
