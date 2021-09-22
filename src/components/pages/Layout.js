import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings } from 'react-feather';
import Logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const Layout = (props) => {
  const { user } = useAuth();

  return (
    <main>
      <div className="main-container">
        <section id="layout">
          <div className="container">
            <div className="side-menu-container">
              <div className="side-menu no-select">
                <ul>
                  <li>
                    <NavLink exact to="/account" className="side-menu-item">
                      <div className="side-menu-account">
                        <h5>{ user ? user.name : 'Users Name'}</h5>
                        <p>Premium user</p>
                      </div>
                      <div className="side-menu-account-image">
                        <img src={Logo} alt="User profile" />
                      </div>
                    </NavLink>
                  </li>
                  <hr className="side-menu-divider" />
                  <li>
                    <NavLink exact to="/overview" className="side-menu-item">
                      <Home />
                      <h5>Overview</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/watchlists" className="side-menu-item">
                      <Briefcase />
                      <h5>Watchlists</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/statistics" className="side-menu-item">
                      <BarChart2 />
                      <h5>Statistics</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/time_to_sell" className="side-menu-item">
                      <Clock />
                      <h5>Time to sell</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/alerts" className="side-menu-item">
                      <Bell />
                      <h5>Alerts</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sold_stocks" className="side-menu-item">
                      <DollarSign />
                      <h5>Sold stocks</h5>
                    </NavLink>
                  </li>
                  <hr className="side-menu-divider" />
                  <li>
                    <NavLink to="/settings" className="side-menu-item">
                      <Settings />
                      <h5>Settings</h5>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-content">{props.children}</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
