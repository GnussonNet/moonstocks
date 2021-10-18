import { createContext, useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({
  session: null,
  isSignedIn: false,
  signIn: () => {},
  createAccount: () => {},
  signOut: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const { pathname } = useRouter();

  // States
  const [session, setSession] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(async () => {
    fetch('http://localhost:8080/api/v1/auth/is_signed_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isSignedIn) {
          fetch('http://localhost:8080/api/v1/auth/sign_in_with_token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setSession(data);
              setIsSignedIn(true);
              setAuthReady(true);
            });
        } else {
          setAuthReady(true);
        }
      });
  }, []);

  // useEffect(async () => {
  //   setAuthReady(true);
  // }, [pathname, session]);

  const signIn = () => {
    fetch('http://localhost:8080/api/v1/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'Admin@gnusson.net',
        password: 'U6HKNXoDH@WyW!7wuZjnbiAw',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSession(data);
        setIsSignedIn(true);
        setAuthReady(true);
      });
  };

  const createAccount = () => {
    // console.log('isSignedIn');
  };

  const signOut = () => {
    fetch('http://localhost:8080/api/v1/auth/sign_out', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSession(null);
        setIsSignedIn(false);
      });
  };

  const context = { session, isSignedIn, signIn, createAccount, signOut, authReady };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export function useAuthContext() {
  return useContext(AuthContext);
}
