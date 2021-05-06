import React, { useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
const AuthController: React.FC<{}> = ({ children }) => {
  const history = useHistory();

  interface Data {
    id: number;
    token: string;
    name: string;
  }
  const isLoginLoc = window.localStorage.getItem("isLogin");
  const dataLoc = window.localStorage.getItem("data");
  const [isLogin, setIsLogin] = useState(isLoginLoc ? isLoginLoc : "false");
  const [data, setdata] = useState<Data>(
    dataLoc ? JSON.parse(dataLoc) : { id: 0, name: "", token: "" }
  );

  const onLogin = () => {
    setIsLogin("true");
    history.push("/dashboard");
    window.localStorage.setItem("isLogin", "true");
  };
  const onLogout = () => {
    history.push("/");
    setIsLogin("false");
    window.localStorage.setItem("isLogin", "false");
  };
  const setData = (data: Data) => {
    setdata(data);
    console.log(data, 11223);
    window.localStorage.setItem("data", JSON.stringify(data));
  };
  return (
    <AuthContext.Provider value={{ isLogin, onLogin, onLogout, data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthController;
