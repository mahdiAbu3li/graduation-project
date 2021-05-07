import React from "react";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import AuthController from "./Contexts/AuthContext/AuthController";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthController>
          <Routes />
        </AuthController>
      </Router>
    </div>
  );
}

export default App;
