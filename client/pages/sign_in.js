import publicRoute from '@components/auth/PublicRoute';

import { getLayout } from '@components/layouts/public/Layout';
import AuthContext from '@stores/AuthContext';

import styles from '@styles/modules/pages/Home.module.scss';
import { useContext } from 'react';

var Sign_In = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <section className={styles.page}>
      <h1>Sign In</h1>
      <button onClick={signIn}>Sign In</button>
    </section>
  );
};

Sign_In.getLayout = getLayout;
export default Sign_In;
