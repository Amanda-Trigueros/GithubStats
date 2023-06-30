import { createContext, useContext } from "react";

const UserContext = createContext();

function UserProvider(props) {
  const value = {};
  return <UserProvider.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(UserContext);
}

export { useAuth, UserProvider };
