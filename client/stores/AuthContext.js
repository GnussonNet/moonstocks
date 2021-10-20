import { createContext, useEffect, useState, useContext } from 'react';

const AuthContext = createContext({
  session: null,
  isSignedIn: false,
  signIn: () => {},
  createAccount: () => {},
  signOut: () => {},
  authReady: false,
  user: null,
  clearUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
  // States
  const [session, setSession] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const clearUser = () => {
    setUser(null);
  };

  useEffect(async () => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/is_signed_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isSignedIn) {
          signinWithJwtRefreshToken();
        } else {
          setAuthReady(true);
        }
      });
  }, []);

  const signinWithJwtRefreshToken = () => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/sign_in_with_token`, {
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
        clearUser();
      });
  };

  const signIn = () => {
    if (user && user.email && user.password) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/sign_in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email[0],
          password: user.password[0],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && typeof data.success !== 'undefined' && data.success === false) {
            console.log(data.message);
            setIsSignedIn(false);
            setAuthReady(true);
          } else {
            setSession(data);
            setIsSignedIn(true);
            setAuthReady(true);
          }
        });
    }
  };

  const createAccount = () => {
    console.log('Create Account');
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

  // Refresh token every 90 second
  const MINUTE_MS = 90000;
  useEffect(() => {
    const interval = setInterval(() => {
      if (session) {
        signinWithJwtRefreshToken();
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  const context = { session, isSignedIn, signIn, createAccount, signOut, authReady, user, setUser, clearUser };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export function useAuthContext() {
  return useContext(AuthContext);
}
