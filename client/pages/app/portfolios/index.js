import useSWR from 'swr';
import Link from 'next/link';

import { getLayout } from '@components/layouts/app/Layout';
import styles from '@styles/modules/pages/Portfolios.module.scss';
import { useAuthContext } from '@stores/AuthContext';

const fetcher = (url, token) => fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, { headers: new Headers({ Authorization: 'Bearer ' + token }) }).then((r) => r.json());

var Portfolios = () => {
  const { session } = useAuthContext();
  const { data, error } = useSWR([`/user/portfolios`, session.jwt_token], fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section className={styles.page}>
      <h1>Portfolios</h1>
      <hr />
      <div className={styles.portfolios}>
        {data && data.map((portfolio) => {
          return (
            <Link key={portfolio._id} href={`/app/portfolios/${portfolio._id}`}>
              <a className={styles.portfolio}>
                <h2>{portfolio.name}</h2>
                <p>{portfolio.stocks.length}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

Portfolios.getLayout = getLayout;

export default Portfolios;
