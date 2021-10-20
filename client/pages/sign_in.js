import { getLayout } from '@components/layouts/public/Layout';
import AuthContext from '@stores/AuthContext';

import styles from '@styles/modules/pages/SignIn.module.scss';
import { useContext, useState } from 'react';

var Sign_In = () => {
  const { signIn, user, setUser } = useContext(AuthContext);

  // Store Email and Password in useState when input changes
  const handleSignInChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  return (
    <section className={styles.page}>
      <div className={styles.input_fields}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleSignInChange} />
      </div>

      <div className={styles.input_fields}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleSignInChange} />
      </div>
      <div className={styles.rememberMe}>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
      </div>

      <button type="submit" id="btnSignIn" className="btn-primary" onClick={signIn}>
        Sign In
      </button>
    </section>
  );
};

Sign_In.getLayout = getLayout;
export default Sign_In;
