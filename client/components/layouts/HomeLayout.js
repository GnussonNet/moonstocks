import Link from 'next/link';
import Head from 'next/head';

import Navbar from '@components/layouts/Navbar';

import styles from '@styles/modules/layouts/HomeLayout.module.scss';
import navbarStyles from '@styles/modules/layouts/Navbar.module.scss';

function Layout({ children }) {
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
        <li className={navbarStyles.text}>
          <Link href="/sign_in">Sign In</Link>
        </li>
        <li className={navbarStyles.text}>
          <Link href="/create_account">Crete free Account</Link>
        </li>
        </Navbar>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Layout;
