import React from 'react';
import { Menu, Star, Plus, Search, Home, Briefcase, BarChart2, Clock, Bell, DollarSign, Settings, ChevronLeft } from 'react-feather';
import Logo from '../../img/logo.png';

class App extends React.Component {
  // fake authentication Promise
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 0)); // 0 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ldr-screen');
      const ele1 = document.getElementById('ldr-style');
      if (ele) {
        // fade out
        ele.classList.add('available');
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = '';
          ele1.outerHTML = '';
        }, 250);
      }
    });
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <img src={Logo} alt="Logo of moonstocks" />
            <ul>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Search />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Plus />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Star />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Menu />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="main-container">
            <section id="home">
              <div className="container">
                <div className="side-menu-container">
                  <div className="side-menu">
                    <ul>
                      <li>
                        <div className="side-menu-account">
                          <h3>Filip Magnusson</h3>
                          <p>Premium user</p>
                        </div>
                        <div className="side-menu-account-image">
                          <img src={Logo} />
                        </div>
                      </li>
                      <hr className="side-menu-account-divider" />
                      <li>
                        <div className="side-menu-items">
                          <Home />
                          <h3>Overview</h3>
                        </div>
                      </li>
                      <li>
                        <div className="side-menu-items">
                          <Briefcase />
                          <h3>Watchlists</h3>
                        </div>
                      </li>
                      <li>
                        <div className="side-menu-items">
                          <BarChart2 />
                          <h3>Statistics</h3>
                        </div>
                      </li>
                      <li>
                        <div className="side-menu-items">
                          <Clock />
                          <h3>Time to sell</h3>
                        </div>
                      </li>
                      <li>
                        <div className="side-menu-items">
                          <Bell />
                          <h3>Alerts</h3>
                        </div>
                      </li>
                      <li>
                        <div className="side-menu-items">
                          <DollarSign />
                          <h3>Sold stocks</h3>
                        </div>
                      </li>
                      <hr className="side-menu-settings-divider" />
                      <li>
                        <div className="side-menu-settings">
                          <Settings />
                          <h3>Settings</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-content"></div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default App;
