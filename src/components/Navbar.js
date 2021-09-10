import { Menu, Star, Plus, Search } from 'react-feather';
import Logo from '../img/logo.png';

const Navbar = () => {
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
          <li>
            <div href="#">
              <Menu />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
