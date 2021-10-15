import authenticatedRoute from '@components/auth/AuthenticatedRoute';
import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Profile = () => {
  return (
    <section className={styles.page}>
      <h1>Profile</h1>
    </section>
  );
};

Profile = authenticatedRoute(Profile);

Profile.getLayout = getLayout;

export default Profile;