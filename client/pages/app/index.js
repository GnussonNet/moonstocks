import Layout from '@components/layouts/Layout';

import styles from '@styles/modules/pages/Test.module.scss';

export default function Test({ data }) {
  return (
    <section className={styles.page}>
      <h1>{data}</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
    </section>
  );
}

export async function getServerSideProps() {
  const session = 'test';
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const data = 'Logged In';

  return { props: { data } };
}

Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
