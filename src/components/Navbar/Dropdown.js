import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, User, Settings } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Dropdown = (props) => {
  const [dropdown, setDropdown] = useState(true);
  const handleNavLinkClick = () => {
    setDropdown(!dropdown);
    props.passDropdown(!dropdown);
  };

  const node = useRef();

  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      handleNavLinkClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={node} className="dropdown-container">
      <div className="dropdown no-select">
        <ul>
          <li>
            <NavLink exact to="/" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <Home />
              <h3>Overview</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchlists" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <Briefcase />
              <h3>Watchlists</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <BarChart2 />
              <h3>Statistics</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/time_to_sell" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <Clock />
              <h3>Time to sell</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/alerts" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <Bell />
              <h3>Alerts</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sold_stocks" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <DollarSign />
              <h3>Sold stocks</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" className="dropdown-item" onClick={() => handleNavLinkClick()}>
              <User />
              <h3>Account</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="dropdown-item" onClick={() => handleNavLinkClick()}>
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
