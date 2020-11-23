import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider as WebThemeProvider } from 'styled-components';
import { ThemeProvider as NativeThemeProvider } from 'styled-components/native';

import { lightTheme } from '@iso/shared';

import { GlobalStyles } from '../styles/Global.styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WebThemeProvider theme={lightTheme}>
      <NativeThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </NativeThemeProvider>
    </WebThemeProvider>
  );
};

export default App;
