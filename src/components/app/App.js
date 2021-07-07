import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings, ChevronLeft, Plus, Star, Menu, Search, ArrowUp } from 'react-feather';
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
          <div className="main-content">

            <div className="main-content-header">
              <div className="header-text">
                <h1>Overview</h1>
                <p>On this page you will get an overview of all active stocks in your watchlists.</p>
              </div>
              <div className="header-total">
                <h5>Total Gain</h5>
                <div className="total-price">
                  <p>14.7% / 230 391 KR</p> <ArrowUp />
                </div>
              </div>
            </div>

            <hr />

            <div className="main-content-favorites">
              <h5>Favorites</h5>
              <div className="favorites">

                <div className="card">
                  <p className="card-category">Crypto Currency</p>
                  <p className="card-name">Bitcoin</p>
                  <div className="card-price positive">
                    <p>0.72% / 201331.95 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-category">NasDaq</p>
                  <p className="card-name">SnesTech, Inc</p>
                  <div className="card-price negative">
                    <p>7.272% / 0.12 $</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-category">Omx</p>
                  <p className="card-name">Kindred Group</p>
                  <div className="card-price negative">
                    <p>-1.75% / 2.55 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-category">Omx</p>
                  <p className="card-name">Intrum</p>
                  <div className="card-price positive">
                    <p>0.78% / 2.20 KR</p>
                    <ArrowUp />
                  </div>
                </div>


              </div>
            </div>

            <hr />

            <div className="main-content-watchlists">
              <h5>Watchlists</h5>
              <div className="watchlists">

                <div className="card">
                  <p className="card-name">My Favorites</p>
                  <div className="card-price positive">
                    <p>0.72% / 201331.95 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-name">My Watchlist</p>
                  <div className="card-price negative">
                    <p>7.272% / 0.12 $</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-name">Magic Formula</p>
                  <div className="card-price negative">
                    <p>-1.75% / 2.55 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-name">Crypto Currencies</p>
                  <div className="card-price positive">
                    <p>0.78% / 2.20 KR</p>
                    <ArrowUp />
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
