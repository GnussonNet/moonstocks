import useSWR from 'swr';
import Link from 'next/link';

import { Briefcase, MoreVertical } from 'react-feather';
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
      <h1 className={styles.title}>Portfolios</h1>
      <div className={styles.portfolios}>
        {data &&
          data.map((portfolio) => {
            return (
              <Link key={portfolio._id} href={`/app/portfolios/${portfolio._id}`}>
                <a className={styles.portfolio}>
                  <div className={styles.icon_container}>
                    <Briefcase />
                  </div>
                  <div className={styles.text}>
                    <h4>{portfolio.name}</h4>
                    <p>Total stocks: {portfolio.stocks.length}</p>
                  </div>
                  <button className={styles.more_icon_container}>
                    <MoreVertical className={styles.more_icon} />
                  </button>
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
