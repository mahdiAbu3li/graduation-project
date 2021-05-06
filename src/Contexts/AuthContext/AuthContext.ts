import React from "react";
interface Data {
  id: number;
  token: string;
  name: string;
}
export const AuthContext = React.createContext({
  isLogin: "false",
  data: {
    id: 0,
    token: "",
    name: "",
  },
  // eslint-disable-next-line no-empty-pattern
  setData: ({}: Data) => {},
  onLogin: () => {},
  onLogout: () => {},
});
