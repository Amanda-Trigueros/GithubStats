import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuth } from "./context/user-context";

function App() {
  const { user, handleLogin, handleSignup } = useAuth();
  return user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp onLogin={handleLogin} onSignup={handleSignup} />
  );
}

export default App;
