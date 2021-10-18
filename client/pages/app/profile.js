import authenticatedRoute from '@components/auth/AuthenticatedRoute';
import { getLayout } from '@components/layouts/app/Layout';
import AuthContext from '@stores/AuthContext';
import styles from '@styles/modules/pages/Test.module.scss';
import { useContext } from 'react';

var Profile = () => {
  const { signIn, authReady, session } = useContext(AuthContext);
  return (
    authReady && (
      <section className={styles.page}>
        <h1>Profile</h1>
        <p>{session && session.name}</p>
        <button onClick={signIn}>Sign In</button>
      </section>
    )
  );
};

Profile = authenticatedRoute(Profile);

Profile.getLayout = getLayout;

export default Profile;
