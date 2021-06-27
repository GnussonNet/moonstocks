import { Plus, Star, Menu, Search } from 'react-feather';

function App() {
  return (
    <nav className="navbar">
      <h3 className="navbar-title">Moonstocks</h3>
      <div className="navbar-search1">
        <div className="navbar-search">
          <div className="search">
            <Search />
            <input type="text" placeholder="Search for stock" />
          </div>
          <div className="search-results"></div>
        </div>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="add" className="icon-button">
            <Plus />
          </a>
        </li>
        <li className="nav-item">
          <a href="favorites" className="icon-button">
            <Star />
          </a>
        </li>
        <li className="nav-item">
          <a href="test" className="icon-button">
            <Menu />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
