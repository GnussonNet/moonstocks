import Axios from 'axios';

import { useAuth } from '../hooks/useAuth';

const Account = () => {
  const { user, logout } = useAuth();

  Axios.defaults.withCredentials = true;

  const checkAccessToken = async () => {
    if (user) {
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

  const handleLogout = async () => {
    const res = logout();
    if (res) {
      window.location.reload();
    }
  };

  return (
    <section id="Account">
      <div className="header">
        <h1>Account</h1>
        <p>This page shows your Account settings.</p>
        <hr />
        <div className="token">
          <label htmlFor="token">Check Token</label>
        </div>
        <button type="submit" onClick={checkAccessToken}>
          Check Access Token
        </button>
        <button type="submit" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default Account;
