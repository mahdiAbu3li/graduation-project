import React from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import Dashboard from "./component/Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
