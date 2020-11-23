import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: ${({ theme }) => theme.base_space}px;
  }
`;
