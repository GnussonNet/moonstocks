import authenticatedRoute from '@components/auth/AuthenticatedRoute';
import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Time_To_Sell = () => {
  return (
    <section className={styles.page}>
      <h1>Time To Sell</h1>
    </section>
  );
};

Time_To_Sell = authenticatedRoute(Time_To_Sell);

Time_To_Sell.getLayout = getLayout;

export default Time_To_Sell;