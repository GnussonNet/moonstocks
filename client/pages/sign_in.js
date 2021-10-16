import publicRoute from '@components/auth/PublicRoute';

import { getLayout } from '@components/layouts/public/Layout';
import AuthContext from '@stores/AuthContext';

import styles from '@styles/modules/pages/Home.module.scss';
import { useContext } from 'react';

var Sign_In = () => {
  const { authReady, session } = useContext(AuthContext);

  return (
    <section className={styles.page}>
      {authReady && (
        <>
          <h1>Sign In</h1>
          <p>{session && session.email}</p>
        </>
      )}
    </section>
  );
};

Sign_In = publicRoute(Sign_In);
Sign_In.getLayout = getLayout;
export default Sign_In;
