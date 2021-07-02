import { Plus, Star, Menu, Search } from 'react-feather';
import logo from '../../img/logo.png';

function App() {

  function expandSearch() {
    var element = document.querySelector(".navbar");
    element.classList.toggle("expanded");
  }



  return (
    // <>
    //   <nav className="navbar">
    //     <div className="navbar-logo-container">
    //       <img className="navbar-logo" src={logo} alt="Logo" />
    //     </div>
    //     <div className="navbar-search">
    //       <div className="search">
    //         <Search />
    //         <input type="text" placeholder="Search for stock" />
    //       </div>
    //       <div className="search-results"></div>
    //     </div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         {/* eslint-disable-next-line */}
    //         <a onClick={expandSearch} className="icon-button">
    //           <Search />
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         {/* eslint-disable-next-line */}
    //         <a className="icon-button">
    //           <Plus />
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         {/* eslint-disable-next-line */}
    //         <a className="icon-button">
    //           <Star />
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         {/* eslint-disable-next-line */}
    //         <a className="icon-button">
    //           <Menu />
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   <main>
    //     <div className="container">
    //       <div className="menu">

    //       </div>
    //       <div className="content"></div>
    //     </div>
    //   </main>
    // </>

    <>
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt="Logo" />
        </div>
        <ul className="navbar-nav">
          <li className="navbar-nav-item button-search">
            {/* eslint-disable-next-line */}
            <a onClick={expandSearch} className="navbar-icon-button">
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
      <main></main>
    </>
  );
}

export default App;
