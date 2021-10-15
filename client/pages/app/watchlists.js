import authenticatedRoute from '@components/auth/AuthenticatedRoute';
import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Watchlists = () => {
  return (
    <section className={styles.page}>
      <h1>Watchlists</h1>
    </section>
  );
};

Watchlists = authenticatedRoute(Watchlists);

Watchlists.getLayout = getLayout;

export default Watchlists;
