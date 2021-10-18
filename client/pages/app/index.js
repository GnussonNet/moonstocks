import { getLayout } from '@components/layouts/app/Layout';

import styles from '@styles/modules/pages/Test.module.scss';

var App = () => {
  return (
    <section className={styles.page}>
      <h1>Overview</h1>
    </section>
  );
};

App.getLayout = getLayout;

export default App;
