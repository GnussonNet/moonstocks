import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Moonstocks</title>
        <meta name="description" content="Moonstocks is a free stocks watchlist tool, build for peoples who buys and sells Magic Formula stocks." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131217" />
        <meta name="msapplication-TileColor" content="#131217" />
        <meta name="theme-color" content="#131217" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
