import styled from "@emotion/styled";
import { useState } from "react";

import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2d9cdb;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: #2db2db;
  }
`;

function App() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick(event) {
    setShowLogin(!showLogin);
  }
  return (
    <div className="App">
      <h1>Welcome to Github Stats</h1>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <CustomLink onClick={handleLinkClick}>
        {showLogin ? "Create Account" : "Login"}
      </CustomLink>
    </div>
  );
}

export default App;
