import { NavLink } from 'react-router-dom';
import { Menu, Star, Plus, Search } from 'react-feather';
import Logo from '../../img/logo.png';
import { useState } from 'react';
import Dropdown from './Dropdown';

import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Gnusson logo" />
        <ul>
          {!user ? (
            <>
              <li className="loginPage">
                <NavLink to="/signin" className="side-menu-item">
                  <h5>Sign In</h5>
                </NavLink>
              </li>
              <li className="loginPage">
                <NavLink to="/create_account" className="side-menu-item">
                  <h5>Create Account</h5>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <div>
                  <Search />
                </div>
              </li>
              <li>
                <div>
                  <Plus />
                </div>
              </li>
              <li>
                <div>
                  <Star />
                </div>
              </li>
              <li className="smallDeviceMenu">
                <div onClick={() => setDropdown(!dropdown)}>
                  <Menu />
                </div>
              </li>
            </>
          )}
        </ul>
      </div>

      {dropdown && <Dropdown passDropdown={setDropdown} />}
    </nav>
  );
};

export default Navbar;
