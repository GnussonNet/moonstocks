import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Moonstocks</title>
          <link rel="preload" href="/fonts/Montserrat-Light.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Montserrat-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Montserrat-Medium.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Montserrat-Bold.ttf" as="font" crossOrigin="" />
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
