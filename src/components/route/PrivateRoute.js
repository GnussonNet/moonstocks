import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({children, ...rest}) => {
  const {user} = useAuth();

  // Private route, basically shows children if a user exists
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    ></Route>
  )
}

export default PrivateRoute;