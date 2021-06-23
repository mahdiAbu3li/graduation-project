import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage3 from "../component/LoginPage3/LoginPage3";
import Dashboard from "../component/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../component/HomePage/HomePage";
function Routes() {
  return (
    <Switch>
       <Route exact path={["/", "/Home"]}>
        <HomePage />
      </Route>
      <Route exact path={["/", "/login"]}>
        <LoginPage3 />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
}

export default Routes;
