// import axios from "axios";
// import { useState } from "react";
// import jwt_decode from "jwt-decode";

// function App() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   axios.defaults.withCredentials = true;

//   async function signinUsingRefreshToken() {
//     try {
//       const res = await axios.post("http://localhost:5001/api/user/refresh_token");
//       setUser({
//         ...user,
//         accessToken: res.data.accessToken,
//       });
//       console.log(res.data.message);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   const ele = document.getElementById('ldr-screen');
//   const ele1 = document.getElementById('ldr-style');
//   if (ele) {
//     // fade out
//     ele.classList.add('available');
//     setTimeout(() => {
//       // remove from DOM
//       ele.innerHTML = '';
//       ele1.innerHTML = '';
//     }, 250);
//   }

//   const signin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/user/refresh_token");
//       setUser({
//         ...user,
//         accessToken: res.data.accessToken,
//       });
//       console.log(res.data.message);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const refreshToken = async () => {
//     try {
//       const res = await axios.post("http://localhost:5001/api/user/refresh_token");
//       setUser({
//         ...user,
//         accessToken: res.data.accessToken,
//       });
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const axiosJWT = axios.create()

//   axiosJWT.interceptors.request.use(
//     async (config) => {
//       let currentDate = new Date();
//       const decodedToken = jwt_decode(user.accessToken);
//       if (decodedToken.exp * 1000 < currentDate.getTime()) {
//         const data = await refreshToken();
//         config.headers["authorization"] = "Bearer " + data.accessToken;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   const handleDelete = async () => {
//     setSuccess(false);
//     setError(false);
//     try {
//       await axiosJWT.get("http://localhost:5001/api/stocks", {
//         headers: { authorization: "Bearer " + user.accessToken },
//       }).then((Response) => {
//         console.log(Response.data);
//       });
//       setSuccess(true);
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="container">
//       {user ? (
//         <div className="home">
//           <span>
//             Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b> dashboard{" "}
//             <b>{user.username}</b>.
//           </span>
//           <span>Delete Users:</span>
//           <button className="deleteButton" onClick={() => handleDelete()}>
//             Delete John
//           </button>
//           {error && (
//             <span className="error">
//               You are not allowed to delete this user!
//             </span>
//           )}
//           {success && (
//             <span className="success">
//               User has been deleted successfully...
//             </span>
//           )}
//         </div>
//       ) : (
//         <div className="login">
//           <form onSubmit={signin}>
//             <button type="submit" className="submitButton">
//               Signin
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

//
//
//
//
//
//
//

// import React from 'react';
// function App() {
//   const ele = document.getElementById('ldr-screen');
//   const ele1 = document.getElementById('ldr-style');
//   if (ele) {
//     // fade out
//     ele.classList.add('available');
//     setTimeout(() => {
//       // remove from DOM
//       ele.innerHTML = '';
//       ele1.innerHTML = '';
//     }, 250);
//   }
//   return (
//     <>
//       <h1>Test</h1>
//       <p>Test</p>
//     </>
//   );
// }

// export default App;

//
//
//
//
//
//
//

import React from 'react';
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

const App = () => {
  const { user } = useAuth();

  const ele = document.getElementById('ldr-screen');
  const ele1 = document.getElementById('ldr-style');
  if (ele) {
    // fade out
    ele.classList.add('available');
    setTimeout(() => {
      // remove from DOM
      ele.innerHTML = '';
      ele1.innerHTML = '';
    }, 250);
  }

  // fake authentication Promise
  // authenticate() {
  //   return new Promise((resolve) => setTimeout(resolve, 0)); // 0 seconds
  // }

  //   authenticate().then(() => {
  //     const ele = document.getElementById('ldr-screen');
  //     const ele1 = document.getElementById('ldr-style');
  //     if (ele) {
  //       // fade out
  //       ele.classList.add('available');
  //       setTimeout(() => {
  //         // remove from DOM
  //         ele.outerHTML = '';
  //         ele1.outerHTML = '';
  //       }, 250);
  //     }
  //   });

  return (
    <Router basename="moonstocks">
      {!user && (
        <Switch>
          <Route exact path="/login">
            <Signin />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
      {user && (
        <>
          <Navbar />
          <Layout>
            <Switch>
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
