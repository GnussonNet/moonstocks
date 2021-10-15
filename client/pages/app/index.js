import authenticatedRoute from '@components/auth/AuthenticatedRoute';

import { getLayout } from '@components/layouts/app/Layout';

import styles from '@styles/modules/pages/Test.module.scss';

var App = () => {
  return (
    <section className={styles.page}>
      <h1>Logged In</h1>
      <h1>App</h1>
    </section>
  );
};

App = authenticatedRoute(App);

App.getLayout = getLayout;

// export default authenticatedRoute(Test1);
export default App;
