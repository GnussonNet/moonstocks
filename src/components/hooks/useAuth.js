import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
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

  // Sign in user with refresh token
  const signinWithJwtRefreshToken = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/user/refresh_token', { withCredentials: true });

      // Store jwt token and expiry time  
      setUser({
        ...user,
        jwt_token: res.data.jwt_token,
        jwt_token_expiry: res.data.jwt_token_expiry,
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

      const decodedToken = jwt_decode(res.data.jwt_token);
      const tickToDate = new Date(0);
      tickToDate.setUTCSeconds(decodedToken.exp);

      // Store jwt token and expiry time
      setUser({
        ...user,
        jwt_token: res.data.jwt_token,
        jwt_token_expiry: tickToDate,
      });

      // Return true of successful
      return true;
    } catch (err) {
      // Return false and log error code if any
      console.log(err);
      return false;
    }
  };

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
    isAuthenticating,
    signinWithJwtRefreshToken,
    signinWithEmailAndPassword,
  };

  return <AuthContext.Provider value={values}>{!isAuthenticating && children}</AuthContext.Provider>;
};
