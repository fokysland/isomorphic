import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 40px 90px 40px 90px;
  width: 100%;
  
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
`;
