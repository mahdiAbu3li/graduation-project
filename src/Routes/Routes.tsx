import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage2 from "../component/LoginPage2/LoginPage2";
import Dashboard from "../component/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
function Routes() {
  return (
    <Switch>
      <Route exact path={["/", "/login"]}>
        <LoginPage2 />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
}

export default Routes;
