import { getLayout } from '@components/layouts/app/Layout';
import { useAuthContext } from '@stores/AuthContext';
import styles from '@styles/modules/pages/Test.module.scss';

var Profile = () => {
  const { session, signOut } = useAuthContext();
  return (
    <section className={styles.page}>
      <h1>Profile</h1>
      <p>{session && session.name}</p>
      <button onClick={signOut}>Sign Out</button>
    </section>
  );
};

Profile.getLayout = getLayout;

export default Profile;
