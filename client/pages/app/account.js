import { getLayout } from '@components/layouts/app/Layout';
import { useAuthContext } from '@stores/AuthContext';
import styles from '@styles/modules/pages/Test.module.scss';

var Account = () => {
  const { session, signOut } = useAuthContext();
  return (
    <section className={styles.page}>
      <h1>Account</h1>
      <p>{session && session.name}</p>
      <button className="btn-primary" onClick={signOut}>Sign Out</button>
    </section>
  );
};

Account.getLayout = getLayout;

export default Account;
