import publicRoute from '@components/auth/PublicRoute';

import { getLayout } from '@components/layouts/public/Layout';

import styles from '@styles/modules/pages/Home.module.scss';

var Sign_In = () => {
  return (
    <section className={styles.page}>
      <h1>Sign In</h1>
    </section>
  );
};

Sign_In = publicRoute(Sign_In);
Sign_In.getLayout = getLayout;
export default Sign_In;
