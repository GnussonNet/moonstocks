import Link from 'next/link';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings, User, Search, Plus } from 'react-feather';
import Image from 'next/image';

import { AuthContextProvider, useAuthContext } from '@stores/AuthContext';

import styles from '@styles/modules/layouts/Layout.module.scss';
import { Modal } from '@components/modal';

function Layout({ children }) {
  const { authReady, isSignedIn, session } = useAuthContext();

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (authReady && isSignedIn) {
      setLoading(false);
    } else if (authReady && !isSignedIn) {
      router.push('/sign_in');
    }
  }, [isSignedIn, authReady]);

  const newPortfolio = () => {
    console.log('New Portfolio');
    console.log(modalData.input_name);
  };

  const newStock = () => {
    console.log('New Stock');
  };

  const baseUrl = '/app';
  const router = useRouter();

  if (!authReady || loading) {
    return <div />;
  } else {
    return (
      <>
        {/* Head */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>Moonstocks</title>
          <meta name="description" content="Moonstocks is a free stocks watchlist tool, build for peoples who buys and sells Magic Formula stocks." />
        </Head>

        {/* Content */}
        <div className={styles.app}>
          <div className={styles.side_menu}>
            <div className={styles.top}>
              <Image className={styles.image} src="/icon.svg" alt="Moonstocks" width="30px" height="30px" />
              <h4 className={styles.title}>Moonstocks</h4>
            </div>
            <div className={styles.main}>
              <Link href={`${baseUrl}/`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <Home />
                  </div>
                  <h4 className={styles.item_title}>Overview</h4>
                </a>
              </Link>
              <Link href={`${baseUrl}/portfolios`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}/portfolios` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <Briefcase />
                  </div>
                  <h4 className={styles.item_title}>Portfolios</h4>
                </a>
              </Link>
              <Link href={`${baseUrl}/statistics`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}/statistics` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <BarChart2 />
                  </div>
                  <h4 className={styles.item_title}>Statistics</h4>
                </a>
              </Link>
              <Link href={`${baseUrl}/time_to_sell`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}/time_to_sell` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <Clock />
                  </div>
                  <h4 className={styles.item_title}>Time to Sell</h4>
                </a>
              </Link>
              <Link href={`${baseUrl}/alerts`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}/alerts` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <Bell />
                  </div>
                  <h4 className={styles.item_title}>Alerts</h4>
                </a>
              </Link>
              <Link href={`${baseUrl}/sold_stocks`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}/sold_stocks` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <DollarSign />
                  </div>
                  <h4 className={styles.item_title}>Sold Stocks</h4>
                </a>
              </Link>
              <Link href={`${baseUrl}/settings`}>
                <a className={`${styles.menu_item} ${router.pathname == `${baseUrl}/settings` ? styles.active : ''}`}>
                  <div className={styles.item_icon}>
                    <Settings />
                  </div>
                  <h4 className={styles.item_title}>Settings</h4>
                </a>
              </Link>
            </div>
            <div className={styles.bottom}>
              <hr />
              <Link href={`${baseUrl}/account`}>
                <a className={styles.menu_item}>
                  <div className={styles.item_icon}>
                    <User />
                  </div>
                  <h4 className={styles.item_title}>Account</h4>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title_bar}>
              <div className={styles.searchbar}>
                <Search className={styles.icon} />
                <input className={styles.input} type="text" placeholder="Search for portfolios and stocks..." disabled />
                <button className={styles.button} disabled>
                  Search
                </button>
              </div>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    setModalData({ type: 'newPortfolio', button_function: newPortfolio });
                    openModal();
                  }}
                  className={`${styles.button} ${styles.secondary}`}
                >
                  <Plus className={styles.icon} />
                  <h4 className={styles.title}>New Portfolio</h4>
                </button>
                <button
                  onClick={() => {
                    setModalData({ type: 'newStock', button_function: newStock });
                    openModal();
                  }}
                  className={`${styles.button} ${styles.primary}`}
                >
                  <Plus className={styles.icon} />
                  <h4 className={styles.title}>New Stock</h4>
                </button>
              </div>
            </div>
            <div className={styles.main}>{children}</div>
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal} modalData={modalData} setModalData={setModalData} />
        </div>
      </>
    );
  }
}

export const getLayout = (page) => (
  <AuthContextProvider>
    <Layout>{page}</Layout>
  </AuthContextProvider>
);

export default Layout;
