import React from 'react';
import { BrowserRouter as MemoryRouter, Route, Switch } from 'react-router-dom';
import Overview from '../pages/Overview';
import Watchlists from '../pages/Watchlists';
import Statistics from '../pages/Statistics';
import TimeToSell from '../pages/TimeToSell';
import Alerts from '../pages/Alerts';
import SoldStocks from '../pages/SoldStocks';
import Settings from '../pages/Settings';
import Navbar from '../Navbar';
import Base from '../pages/Base';
import Page404 from '../pages/Page404';

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
      <MemoryRouter basename="moonstocks">
        <Navbar />
        <Base>
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/watchlists">
              <Watchlists />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/time_to_sell">
              <TimeToSell />
            </Route>
            <Route path="/alerts">
              <Alerts />
            </Route>
            <Route path="/sold_stocks">
              <SoldStocks />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </Base>
      </MemoryRouter>
    );
  }
}

export default App;
