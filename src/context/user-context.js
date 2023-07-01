import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { login } from "../services/auth-service";
import { getUser, createUser } from "../services/user-service";

const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function handleLogin(credentials) {
    login(credentials).then(setUser).catch(console.log);
  }

  function handleSignup(userData) {
    createUser(userData).then(setUser).catch(console.log);

    console.log(userData);

    // signup(formData);
  }

  const value = { user, handleLogin, handleSignup };
  return <UserContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(UserContext);
}

export { useAuth, UserProvider };
