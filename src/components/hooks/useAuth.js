import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
const AuthContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  axios.defaults.withCredentials = true;

  // Check if user is signed in
  const isSignedIn = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/user/is_signed_in');
      return res.data.isSignedIn;
    } catch (error) {
      console.log('Something went wrong when checking signed in status');
    }
  };

  // Sign in user with refresh token
  const signinWithJwtRefreshToken = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/user/refresh_token');

      // Store jwt token and expiry time
      setUser({
        ...user,
        name: res.data.name,
        jwt_token: res.data.jwt_token,
      });

      // Return true of successful
      return true;
    } catch (err) {
      // Return false and log error code if any
      console.log(err);
      return false;
    }
  };

  // Sign in user with Email and Password
  const signinWithEmailAndPassword = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5001/api/user/signin', {
        email: email,
        password: password,
      });

      // Store jwt token and expiry time
      setUser({
        ...user,
        name: res.data.name,
        jwt_token: res.data.jwt_token,
      });

      // Return true of successful
      return true;
    } catch (err) {
      // Return false and log error code if any
      console.log(err);
      return false;
    }
  };

  // Create account with Email and Password
  const createAccountWithEmailAndPassword = async (firstName, lastName, email, password) => {
    try {
      const res = await axios.post('http://localhost:5001/api/user/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      // Store jwt token and expiry time
      setUser({
        ...user,
        name: res.data.name,
        jwt_token: res.data.jwt_token,
      });

      // Return true of successful
      return true;
    } catch (err) {
      // Return false and log error code if any
      console.log(err);
      return false;
    }
  };

  // Logout user
  const logout = async () => {
    try {
      await axios.post('http://localhost:5001/api/user/logout');
      // Return true of successful
      return true;
    } catch (err) {
      // Return false and log error code if any
      console.log(err);
      return false;
    }
  };

  // Refresh token every 90 second
  const MINUTE_MS = 90000;
  useEffect(() => {
    const interval = setInterval(() => {
      if (user) {
        signinWithJwtRefreshToken();
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = () => {
      setIsAuthenticating(false);
      console.log('unsubscribe');
    };
    setIsAuthenticating(false);

    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isSignedIn,
    isAuthenticating,
    signinWithJwtRefreshToken,
    signinWithEmailAndPassword,
    createAccountWithEmailAndPassword,
    logout,
  };

  return <AuthContext.Provider value={values}>{!isAuthenticating && children}</AuthContext.Provider>;
};
