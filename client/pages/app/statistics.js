import authenticatedRoute from '@components/auth/AuthenticatedRoute';
import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Statistics = () => {
  return (
    <section className={styles.page}>
      <h1>Statistics</h1>
    </section>
  );
};

Statistics = authenticatedRoute(Statistics);

Statistics.getLayout = getLayout;

export default Statistics;