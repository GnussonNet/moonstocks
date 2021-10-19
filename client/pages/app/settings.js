import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Settings = () => {
  return (
    <section className={styles.page}>
      <h1>Settings</h1>
    </section>
  );
};

Settings.getLayout = getLayout;

export default Settings;
