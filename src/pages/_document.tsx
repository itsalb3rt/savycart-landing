import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://api.fontshare.com" />
          <link
            rel="preconnect"
            href="https://cdn.fontshare.com"
            crossOrigin=""
          />
          <link
            href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={AppConfig.description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
