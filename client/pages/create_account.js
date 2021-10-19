import { getLayout } from '@components/layouts/public/Layout';

import styles from '@styles/modules/pages/Home.module.scss';

var Create_Account = () => {
  return (
    <section className={styles.page}>
      <h1>Create Account</h1>
    </section>
  );
};

Create_Account.getLayout = getLayout;
export default Create_Account;