import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Alerts = () => {
  return (
    <section className={styles.page}>
      <h1>Alerts</h1>
    </section>
  );
};

Alerts.getLayout = getLayout;

export default Alerts;
