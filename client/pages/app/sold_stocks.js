import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Test.module.scss';

var Sold_Stocks = () => {
  return (
    <section className={styles.page}>
      <h1>Sold Stocks</h1>
    </section>
  );
};

Sold_Stocks.getLayout = getLayout;

export default Sold_Stocks;
