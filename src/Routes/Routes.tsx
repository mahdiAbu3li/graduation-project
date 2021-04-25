import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../component/LoginPage/LoginPage";
import Dashboard from "../component/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
function Routes() {
  return (
    <Switch>
      <Route exact path={["/", "/login"]}>
        <LoginPage />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
}

export default Routes;
