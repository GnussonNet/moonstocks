import Axios from 'axios';

import { useAuth } from '../hooks/useAuth';

const Account = () => {
  const { user, logout } = useAuth();

  // This SHOULD be removed later on. This is just for testing
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

  const loadingScreen = document.getElementById('ldr-screen');

  // Logout user and refresh page
  const handleLogout = async () => {
    if (loadingScreen && loadingScreen.style !== 'flex') {
      loadingScreen.style.display = 'flex';
    }
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
        <h3>Check Access Token</h3>
        <button type="submit" onClick={checkAccessToken}>
          Check Access Token
        </button>
        <h3>Logout</h3>
        <button type="submit" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default Account;
