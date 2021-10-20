import Link from 'next/link';
import { useRouter } from 'next/router';

import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings, User } from 'react-feather';

import styles from '@styles/modules/layouts/SideMenu.module.scss';
import { useAuthContext } from '@stores/AuthContext';

function SideMenu() {
  const { session } = useAuthContext();
  const router = useRouter();
  const baseUrl = '/app';

  return (
    <div className={styles.side_menu}>
      <ul className={styles.menu_items}>
        <li className={[styles.menu_item, styles.item_user].join(' ')}>
          <Link href={`${baseUrl}/profile`}>
            <a>
              <div className="user">
                <h5>{session && session.name}</h5>
                <p>Premium</p>
              </div>
              <User />
            </a>
          </Link>
        </li>
        <hr />
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/`}>
            <a className={router.pathname == `${baseUrl}` ? styles.active : ''}>
              <Home />
              <div className="title">
                <h5>Overview</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/portfolios`}>
            <a className={router.pathname == `${baseUrl}/portfolios` || router.pathname == `${baseUrl}/portfolios/` ? styles.active : ''}>
              <Briefcase />
              <div className="title">
                <h5>Portfolios</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/statistics`}>
            <a className={router.pathname == `${baseUrl}/statistics` ? styles.active : ''}>
              <BarChart2 />
              <div className="title">
                <h5>Statistics</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/time_to_sell`}>
            <a className={router.pathname == `${baseUrl}/time_to_sell` ? styles.active : ''}>
              <Clock />
              <div className="title">
                <h5>Time to Sell</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/alerts`}>
            <a className={router.pathname == `${baseUrl}/alerts` ? styles.active : ''}>
              <Bell />
              <div className="title">
                <h5>Alerts</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/sold_stocks`}>
            <a className={router.pathname == `${baseUrl}/sold_stocks` ? styles.active : ''}>
              <DollarSign />
              <div className="title">
                <h5>Sold Stocks</h5>
              </div>
            </a>
          </Link>
        </li>
        <hr />
        <li className={styles.menu_item}>
          <Link href={`${baseUrl}/settings`}>
            <a className={router.pathname == `${baseUrl}/settings` ? styles.active : ''}>
              <Settings />
              <div className="title">
                <h5>Settings</h5>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
