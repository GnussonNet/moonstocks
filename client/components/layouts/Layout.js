import Link from 'next/link';
import { Search, Plus, Star } from 'react-feather';

import Navbar from '@components/layouts/Navbar';
import SideMenu from '@components/layouts/SideMenu';

import styles from '@styles/modules/layouts/Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar>
        <li>
          <Link href="/">
            <Search />
          </Link>
        </li>
        <li>
          <Link href="/test">
            <Plus />
          </Link>
        </li>
        <li>
          <Link href="/test">
            <Star />
          </Link>
        </li>
      </Navbar>
      <main className={styles.main}>
        <div className={styles.side_menu_container}>
          <SideMenu></SideMenu>
        </div>
        <div className={styles.content_container}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
