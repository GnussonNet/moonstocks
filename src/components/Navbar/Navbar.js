import { Menu, Star, Plus, Search } from 'react-feather';
import Logo from '../../img/logo.png';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Gnusson logo" />
        <ul>
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
        </ul>
      </div>

      {dropdown && <Dropdown passDropdown={setDropdown} />}
    </nav>
  );
};

export default Navbar;
