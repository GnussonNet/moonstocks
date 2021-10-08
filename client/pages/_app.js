import Head from 'next/head';
import Layout from '@components/layouts/Layout';
import '@styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Moonstocks</title>
        <meta name="description" content="Moonstocks is a free stocks watchlist tool, build for peoples who buys and sells Magic Formula stocks." />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
