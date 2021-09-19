import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Overview from '../pages/Overview';
import Watchlists from '../pages/Watchlists';
import Statistics from '../pages/Statistics';
import TimeToSell from '../pages/TimeToSell';
import Alerts from '../pages/Alerts';
import SoldStocks from '../pages/SoldStocks';
import Settings from '../pages/Settings';
import Navbar from '../Navbar/Navbar';
import Layout from '../pages/Layout';
import Page404 from '../pages/Page404';
import Account from '../pages/Account';

import PrivateRoute from '../route/PrivateRoute';
import { useAuth } from '../hooks/useAuth';
import Signin from '../pages/Signin';
import CreateAccount from '../pages/CreateAccount';

const App = () => {
  const { user, isSignedIn, signinWithJwtRefreshToken } = useAuth();

  // Check if user is signed in at star
  // If user is signed in, sign user in
  useEffect(() => {
    async function fetchUser() {
      if (await isSignedIn()) {
        await signinWithJwtRefreshToken();
      }
    }
    fetchUser();
    // eslint-disable-next-line
  }, []);

  // Remove loading screen on every page render
  useEffect(() => {
    setTimeout(() => {
      const loadingScreen = document.getElementById('ldr-screen');
      if (loadingScreen && loadingScreen.style !== 'none') {
        loadingScreen.style.display = 'none';
      }
    }, 250);
  });

  return (
    <Router basename="moonstocks">

      {/* Displayed when user is not signed in */}
      {!user && (
        <Switch>
          <Route exact path="/signin">
            <Navbar />
            <Signin />
          </Route>
          <Route exact path="/create_account">
            <Navbar />
            <CreateAccount />
          </Route>
          <Route path="*">
            <Redirect to="/signin" />
          </Route>
        </Switch>
      )}

      {/* Displayed when a user is signed in */}
      {user && (
        <>
          <Navbar />
          <Layout>
            <Switch>
              <PrivateRoute path="/signin">
                <Redirect to="/overview" />
              </PrivateRoute>
              <PrivateRoute exact path="/">
                <Redirect to="/overview" />
              </PrivateRoute>
              <PrivateRoute path="/overview">
                <Overview />
              </PrivateRoute>
              <PrivateRoute path="/watchlists">
                <Watchlists />
              </PrivateRoute>
              <PrivateRoute path="/statistics">
                <Statistics />
              </PrivateRoute>
              <PrivateRoute path="/time_to_sell">
                <TimeToSell />
              </PrivateRoute>
              <PrivateRoute path="/alerts">
                <Alerts />
              </PrivateRoute>
              <PrivateRoute path="/sold_stocks">
                <SoldStocks />
              </PrivateRoute>
              <PrivateRoute path="/account">
                <Account />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                <Settings />
              </PrivateRoute>
              <PrivateRoute path="*">
                <Page404 />
              </PrivateRoute>
            </Switch>
          </Layout>
        </>
      )}
    </Router>
  );
};

export default App;
