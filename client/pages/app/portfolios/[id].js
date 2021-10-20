import { useRouter } from 'next/router';

import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Portfolio.module.scss';
import { useAuthContext } from '@stores/AuthContext';
import useSWR from 'swr';

const fetcher = (url, token) => fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, { headers: new Headers({ Authorization: 'Bearer ' + token }) }).then((r) => r.json());

var Portfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { session } = useAuthContext();
  const { data, error } = useSWR([`/user/portfolios/${id}`, session.jwt_token], fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  if (data.stocks.length < 1) {
    return <section className={styles.page}><h1>Portfolios</h1><p>No Stocks...</p></section>
  }

  return (
    <section className={styles.page}>
      <h1>Portfolios</h1>
      {data &&
        data.stocks &&
        data.stocks.map((stock) => {
          return (
            <div key={stock._id} className={styles.stock}>
              <a>
                <h2>{stock.ticker}</h2>
                {/* <p>{stock.lots.length}</p> */}
                <div className={styles.lots}>
                  {stock.lots &&
                    stock.lots.map((lot, index) => {
                      return (
                        <div key={lot._id} className={styles.lot}>
                          <h3>{`Lot: ${index + 1}`}</h3>
                          <p>{`Per Share Cost: ${lot.per_share_cost}`}</p>
                          <p>{`Quantity: ${lot.quantity}`}</p>
                          <p>{`Date: ${lot.date.split("T")[0]}`}</p>
                        </div>
                      );
                    })}
                </div>
              </a>
            </div>
          );
        })}
    </section>
  );
};

Portfolio.getLayout = getLayout;

export default Portfolio;
