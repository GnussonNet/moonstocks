import authenticatedRoute from '@components/auth/AuthenticatedRoute';

import { getLayout } from '@components/layouts/app/Layout';

import styles from '@styles/modules/pages/Test.module.scss';

var Test1 = () => {
  return (
    <section className={styles.page}>
      <h1>Logged In</h1>
      <h1>Test1</h1>
      <h1>Test1</h1>
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
};

Test1 = authenticatedRoute(Test1);

Test1.getLayout = getLayout;

// export default authenticatedRoute(Test1);
export default Test1;
