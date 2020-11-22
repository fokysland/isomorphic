import React from 'react';
import _Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { AppRegistry } from 'react-native';

export default class Document extends _Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent('App', () => Main);
    const page = await renderPage();
    return { ...page };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head title="Isoworld" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
