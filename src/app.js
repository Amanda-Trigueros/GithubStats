import { useState, useEffect } from "react";

import { createUser, getUser } from "./services/user-service";
import { login } from "./services/auth-service";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
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
  return user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp onLogin={handleLogin} onSignup={handleSignup} />
  );
}

export default App;
