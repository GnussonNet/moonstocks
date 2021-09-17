import { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const Account = () => {
  const [createAccountReq, setCreateAccountReq] = useState('');
  const [signInReq, setSignInReq] = useState('');
  const history = useHistory();

  const { signinWithJwtRefreshToken, signinWithEmailAndPassword, user } = useAuth();

  // const onSigninWithJwtRefreshToken = async () => {
  //   try {
  //     const res = await signinWithEmailAndPassword(signInReq.email[0], signInReq.password[0]);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSigninWithEmailAndPassword = async () => {
    try {
      const res = await signinWithEmailAndPassword(signInReq.email[0], signInReq.password[0]);
      console.log(res);
      if (res) {
        history.push('/overview');
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  //
  //

  const handleCreateAccountChange = (e) => {
    setCreateAccountReq({ ...createAccountReq, [e.target.name]: [e.target.value] });
  };

  const handleSignInChange = (e) => {
    setSignInReq({ ...signInReq, [e.target.name]: [e.target.value] });
  };

  Axios.defaults.withCredentials = true;

  const createAccount = () => {
    Axios.post('http://localhost:5001/api/user/register', {
      firstName: createAccountReq.firstName[0],
      lastName: createAccountReq.lastName[0],
      email: createAccountReq.email[0],
      password: createAccountReq.password[0],
    }).then((response) => {
      console.log(response.data);
    });
  };

  const checkAccessToken = async () => {
    if (user) {
      await signinWithJwtRefreshToken();
      Axios.get('http://localhost:5001/api/stocks', {
        headers: {
          Authorization: `Bearer ${user.jwt_token}`,
        },
      }).then((response) => {
        console.log(response.data);
      });
    } else {
      console.log('No access token stored!');
    }
  };

  return (
    <section id="Account">
      <div className="header">
        <h1>Account</h1>
        <p>This page shows your Account settings.</p>
        <hr />
        <div className="createAccount">
          <div className="name">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" onChange={handleCreateAccountChange} />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" onChange={handleCreateAccountChange} />
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleCreateAccountChange} />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleCreateAccountChange} />
          </div>

          <button type="submit" id="btnCreateAccount" onClick={createAccount}>
            Create free account
          </button>
        </div>
        <div className="signIn">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleSignInChange} />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleSignInChange} />
          </div>

          <button type="submit" id="btnSignIn" onClick={onSigninWithEmailAndPassword}>
            Sign In
          </button>
        </div>
        <div className="refreshToken">
          <label htmlFor="refreshToken">Refresh Access Token</label>
        </div>
        <button type="submit" id="btnCheckRefreshToken">
          Refresh Access Token
        </button>
        <div className="token">
          <label htmlFor="token">Check Token</label>
        </div>
        <button type="submit" id="btnCheckAccessToken" onClick={checkAccessToken}>
          Check Access Token
        </button>
      </div>
    </section>
  );
};

export default Account;
