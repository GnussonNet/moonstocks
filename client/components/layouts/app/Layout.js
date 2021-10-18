import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Search, Plus, Star } from 'react-feather';

import { AuthContextProvider, useAuthContext } from '@stores/AuthContext';

import Navbar from '@components/layouts/Navbar';
import SideMenu from '@components/layouts/SideMenu';

import styles from '@styles/modules/layouts/Layout.module.scss';
import navbarStyles from '@styles/modules/layouts/Navbar.module.scss';

function Layout({ children }) {
  const { authReady, isSignedIn } = useAuthContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authReady && isSignedIn) {
      setLoading(false);
    } else if (authReady && !isSignedIn) {
      Router.push('/sign_in');
    }
  }, [isSignedIn, authReady]);

  const baseUrl = '/app';

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
        <div className={styles.container}>
          <Navbar>
            <li className={navbarStyles.icon}>
              <Link href={`${baseUrl}/`}>
                <a>
                  <Search />
                </a>
              </Link>
            </li>
            <li className={navbarStyles.icon}>
              <Link href={`${baseUrl}/test1`}>
                <a>
                  <Plus />
                </a>
              </Link>
            </li>
            <li className={navbarStyles.icon}>
              <Link href={`${baseUrl}/test2`}>
                <a>
                  <Star />
                </a>
              </Link>
            </li>
          </Navbar>
          <main className={styles.main}>
            <div className={styles.side_menu_container}>
              <SideMenu></SideMenu>
            </div>
            <div className={styles.content_container}>
              <div className={styles.content}>{children}</div>
            </div>
          </main>
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
