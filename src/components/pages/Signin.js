import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const history = useHistory();
  const [signInReq, setSignInReq] = useState('');
  const { signinWithEmailAndPassword } = useAuth();

  // Sign in user and return boolean, then redirect to homepage
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
      <div className="checkbox-field">
        <input type="checkbox" name="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <button type="submit" id="btnSignIn" onClick={onSigninWithEmailAndPassword}>
        Sign In
      </button>
    </section>
  );
};

export default Login;
