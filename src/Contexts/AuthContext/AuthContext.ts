import React from "react";
interface Data {
  id: number;
  token: string;
  name: string;
  email: string;
}
export const AuthContext = React.createContext({
  isLogin: "false",
  data: {
    id: 0,
    token: "",
    name: "",
    email: "",
  },
  // eslint-disable-next-line no-empty-pattern
  setData: ({}: Data) => {},
  onLogin: () => {},
  onLogout: () => {},
});
