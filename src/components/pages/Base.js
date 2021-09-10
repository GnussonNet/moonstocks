import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings } from 'react-feather';
import Logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Base = (props) => {
  return (
    <main>
      <div className="main-container">
        <section id="base">
          <div className="container">
            <div className="side-menu-container">
              <div className="side-menu no-select">
                <ul>
                  <li>
                    <div className="side-menu-account">
                      <h3>Filip Magnusson</h3>
                      <p>Premium user</p>
                    </div>
                    <div className="side-menu-account-image">
                      <img src={Logo} alt="User profile" />
                    </div>
                  </li>
                  <hr className="side-menu-divider" />
                  <li>
                    <NavLink exact to="/" className="side-menu-item">
                      <Home />
                      <h3>Overview</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/watchlists" className="side-menu-item">
                      <Briefcase />
                      <h3>Watchlists</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/statistics" className="side-menu-item">
                      <BarChart2 />
                      <h3>Statistics</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/time_to_sell" className="side-menu-item">
                      <Clock />
                      <h3>Time to sell</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/alerts" className="side-menu-item">
                      <Bell />
                      <h3>Alerts</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sold_stocks" className="side-menu-item">
                      <DollarSign />
                      <h3>Sold stocks</h3>
                    </NavLink>
                  </li>
                  <hr className="side-menu-divider" />
                  <li>
                    <NavLink to="/settings" className="side-menu-item">
                      <Settings />
                      <h3>Settings</h3>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-content">
              { props.children }
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Base;
