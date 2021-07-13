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

  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

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
                    <h3>Filip Magnusson</h3>
                    <p className="greyedOut">Premium user</p>
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
                <p className="greyedOut">On this page you will get an overview of all active stocks in your watchlists.</p>
              </div>
              <div className="header-total">
                <h3>Total Gain</h3>
                <div className="total-price positive">
                  <p className="text-light">14.7% / 230 391 KR</p> 
                  <ArrowUp />
                </div>
              </div>
            </div>

            <hr />

            <div className="main-content-favorites">
              <h5>Favorites</h5>
              <div className="favorites">

                <div className="card">
                  <p className="card-category">Crypto Currency</p>
                  <h3 className="card-name">Bitcoin</h3>
                  <div className="card-price positive">
                    <p className="text-light">0.72% / 201331.95 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-category">NasDaq</p>
                  <h3 className="card-name">SnesTech, Inc</h3>
                  <div className="card-price negative">
                    <p className="text-light">7.272% / 0.12 $</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-category">Omx</p>
                  <h3 className="card-name">Kindred Group</h3>
                  <div className="card-price negative">
                    <p className="text-light">-1.75% / 2.55 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <p className="card-category">Omx</p>
                  <h3 className="card-name">Intrum</h3>
                  <div className="card-price positive">
                    <p className="text-light">0.78% / 2.20 KR</p>
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
                  <h3 className="card-name">My Favorites</h3>
                  <div className="card-price positive">
                    <p className="text-light">0.72% / 201331.95 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <h3 className="card-name">My Watchlist</h3>
                  <div className="card-price negative">
                    <p className="text-light">7.272% / 0.12 $</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <h3 className="card-name">Magic Formula</h3>
                  <div className="card-price negative">
                    <p className="text-light">-1.75% / 2.55 KR</p>
                    <ArrowUp />
                  </div>
                </div>

                <div className="card">
                  <h3 className="card-name">Crypto Currencies</h3>
                  <div className="card-price positive">
                    <p className="text-light">0.78% / 2.20 KR</p>
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
