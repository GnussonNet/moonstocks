import { useState } from 'react';

import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [signInReq, setSignInReq] = useState('');
  const { signinWithEmailAndPassword } = useAuth();

  const loadingScreen = document.getElementById('ldr-screen');

  // Sign in user and return boolean, then redirect to homepage
  const onSigninWithEmailAndPassword = async () => {
    if (loadingScreen && loadingScreen.style !== 'flex') {
      loadingScreen.style.display = 'flex';
    }
    try {
      await signinWithEmailAndPassword(signInReq.email[0], signInReq.password[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Store Email and Password in useState when input changes
  const handleSignInChange = (e) => {
    setSignInReq({ ...signInReq, [e.target.name]: [e.target.value] });
  };

  return (
    <section id="Signin">
      <div className="input-fields">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleSignInChange} />
      </div>

      <div className="input-fields">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleSignInChange} />
      </div>
      <div className="rememberMe">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
      </div>

      <button type="submit" id="btnSignIn" onClick={onSigninWithEmailAndPassword}>
        Sign In
      </button>
    </section>
  );
};

export default Login;
