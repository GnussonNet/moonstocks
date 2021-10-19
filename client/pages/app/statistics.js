import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Statistics = () => {
  return (
    <section className={styles.page}>
      <h1>Statistics</h1>
    </section>
  );
};

Statistics.getLayout = getLayout;

export default Statistics;
