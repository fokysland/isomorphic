import React from 'react';
import { AppRegistry } from 'react-native';
import _Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default class Document extends _Document {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('App', () => Main);
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      };

      const initProps = await _Document.getInitialProps(ctx);

      return {
        ...initProps,
        styles: (
          <>
            {initProps.styles}
            {sheet.getStyleElement()}
            <style
              dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
            />
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html style={{ minHeight: '100vh' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ minHeight: '100vh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
