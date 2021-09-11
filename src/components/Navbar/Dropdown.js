import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, User, Settings } from 'react-feather';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown no-select">
        <ul>
          <li>
            <NavLink exact to="/" className="dropdown-item">
              <Home />
              <h3>Overview</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchlists" className="dropdown-item">
              <Briefcase />
              <h3>Watchlists</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className="dropdown-item">
              <BarChart2 />
              <h3>Statistics</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/time_to_sell" className="dropdown-item">
              <Clock />
              <h3>Time to sell</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/alerts" className="dropdown-item">
              <Bell />
              <h3>Alerts</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sold_stocks" className="dropdown-item">
              <DollarSign />
              <h3>Sold stocks</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" className="dropdown-item">
              <User />
              <h3>Account</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="dropdown-item">
              <Settings />
              <h3>Settings</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
