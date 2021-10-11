import React from 'react';
import useAuth from './../../hooks/useAuth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const PrivateRoute = ({children,...rest}) => {
    const {user} = useAuth();
    let history = useHistory();
    let location = useLocation();
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;