import { Plus, Star, Menu, Search } from 'react-feather';

function App() {
  return (
    <nav className="navbar">
      {/* <h3 className="navbar-title">Moonstocks</h3> */}
      <div className="navbar-logo-container">
        <img className="navbar-logo" src="./img/logo.png" alt="Logo" />
      </div>
      <div className="navbar-search">
        <div className="search">
          <Search />
          <input type="text" placeholder="Search for stock" />
        </div>
        <div className="search-results"></div>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <a className="icon-button">
            <Plus />
          </a>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <a className="icon-button">
            <Star />
          </a>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
          <a className="icon-button">
            <Menu />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
