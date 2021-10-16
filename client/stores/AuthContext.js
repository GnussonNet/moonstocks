import { createContext, useEffect, useState } from 'react';
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
    const session = { token: '12345', email: 'admin@gnusson.net' };
    
    setSession(session);
    setIsSignedIn(true);
    setAuthReady(true);
  }, [pathname]);

  const signIn = () => {
    // console.log('isSignedIn');
  };

  const createAccount = () => {
    // console.log('isSignedIn');
  };

  const signOut = () => {
    // console.log('isSignedIn');
  };

  const context = { session, isSignedIn, signIn, createAccount, signOut, authReady };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;
