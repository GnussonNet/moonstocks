import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings, ChevronLeft, Plus, Star, Menu, Search } from 'react-feather';
import Logo from '../../img/logo.png';
import User from '../../img/user.jpeg';

function App() {
  function toggleSearch() {
    var element = document.querySelector('.navbar');
    element.classList.toggle('expanded');
  }

  function toggleMenu() {
    var element = document.querySelector('.main-menu');
    element.classList.toggle('expanded');
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={Logo} alt="Logo" />
        </div>
        <ul className="navbar-nav">
          <li className="navbar-nav-item button-search">
            {/* eslint-disable-next-line */}
            <a onClick={toggleSearch} className="navbar-icon-button">
              <Search />
            </a>
          </li>
          <li className="navbar-nav-item">
            {/* eslint-disable-next-line */}
            <a className="navbar-icon-button">
              <Plus />
            </a>
          </li>
          <li className="navbar-nav-item">
            {/* eslint-disable-next-line */}
            <a className="navbar-icon-button">
              <Star />
            </a>
          </li>
          <li className="navbar-nav-item">
            {/* eslint-disable-next-line */}
            <a className="navbar-icon-button">
              <Menu />
            </a>
          </li>
        </ul>
        <div className="navbar-search-container">
          <div className="navbar-search">
            <Search />
            <input name="navbar-search-input" type="text" placeholder="Search for stock" />
          </div>
          <div className="navbar-search-results"></div>
        </div>
      </nav>
      <main>
        <div className="main-container">
          <div className="main-menu-container">
            <div className="main-menu">
              <div className="menu-account">
                <div onClick={toggleMenu} className="menu-account-user">
                  <div className="menu-account-user-name">
                    <h5>Filip Magnusson</h5>
                    <p>Premium user</p>
                  </div>
                  <img src={User} alt="Profile" />
                  <ChevronLeft />
                </div>
              </div>

              <hr />

              <div className="menu-items">
                <li className="menu-item">
                  <Home />
                  <p>Overview</p>
                </li>
                <li className="menu-item">
                  <Briefcase />
                  <p>Watchlists</p>
                </li>
                <li className="menu-item">
                  <BarChart2 />
                  <p>Stats</p>
                </li>
                <li className="menu-item">
                  <Clock />
                  <p>Time to Sell</p>
                </li>
                <li className="menu-item">
                  <Bell />
                  <p>Alerts</p>
                </li>
                <li className="menu-item">
                  <DollarSign />
                  <p>Sold Stocks</p>
                </li>
              </div>

              <hr />

              <div className="menu-settings">
                <li className="menu-item">
                  <Settings />
                  <p>Settings</p>
                </li>
              </div>
            </div>
          </div>
          <div className="main-content"></div>
        </div>
      </main>
    </>
  );
}

export default App;
