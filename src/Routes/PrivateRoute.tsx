import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const PrivateRoute: React.FC<RouteProps> = (props) => {
  return (
    <div>
      <Route {...props}>
        <AuthContext.Consumer>
          {(value) =>
            value.isLogin === "true" ? props.children : <Redirect to="/" />
          }
        </AuthContext.Consumer>
      </Route>
    </div>
  );
};

export default PrivateRoute;
