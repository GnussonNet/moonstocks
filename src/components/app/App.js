import { Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings, ChevronLeft, Plus, Star, Menu, Search, ArrowUp, User, Info } from 'react-feather';
import Logo from '../../img/logo.png';
import UserImage from '../../img/user.jpeg';

import React, { useState, useEffect, useRef } from 'react';

function App() {
  function toggleMenu() {
    var element = document.querySelector('.main-menu');
    element.classList.toggle('expanded');
  }

  window.addEventListener('scroll', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar>
        <NavItem icon={<Search />} class="button-search" />
        <NavItem icon={<Plus />} />
        <NavItem icon={<Star />} />
        <NavItem icon={<Menu />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
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
                  <img src={UserImage} alt="Profile" />
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





function Navbar(props) {
  // function toggleSearch() {
  //   var element = document.querySelector('.navbar');
  //   element.classList.toggle('expanded');
  // }

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={Logo} alt="Logo" />
      </div>
      <ul className="navbar-nav">{props.children}</ul>
      <div className="navbar-search-container">
        <div className="navbar-search">
          <Search />
          <input name="navbar-search-input" type="text" placeholder="Search for stock" />
        </div>
        <div className="navbar-search-results"></div>
      </div>
    </nav>
  );
}


function NavItem(props) {
  const [open, setOpen] = useState(false);

  let dropdownMenu = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!dropdownMenu.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <li className={`navbar-nav-item ${ props.class }`} ref={dropdownMenu}>
      {/* eslint-disable-next-line */}
      <a className="navbar-icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}



function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <>
        {/* eslint-disable-next-line */}
        <a className="dropdown-item">
          <span className="dropdown-item-icon">{props.leftIcon}</span>
          {props.children}
        </a>
      </>
    );
  }

  return (
    <div className="nav-item-dropdown">
      <DropdownItem leftIcon={<User />}>My Profile</DropdownItem>
      <DropdownItem leftIcon={<Briefcase />}>Watchlists</DropdownItem>
      <DropdownItem leftIcon={<Info />}>About</DropdownItem>
      <DropdownItem leftIcon={<Settings />}>Settings</DropdownItem>
    </div>
  );
}

export default App;
