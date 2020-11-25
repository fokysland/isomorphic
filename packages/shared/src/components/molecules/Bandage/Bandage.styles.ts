import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.colors.main};
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;
