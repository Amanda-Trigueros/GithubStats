import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const CustomLink = styled.a`
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

const Title = styled.h1`
  width: 264px;
  height: 80px;
  display: grid;
  place-items: center;
  margin: auto;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 48px;
  margin-bottom: 96px;
`;

const LinkWrapper = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
`;
function UnauthenticatedApp({ onLogin, onSignup }) {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick(event) {
    setShowLogin(!showLogin);
  }
  return (
    <div className="App">
      <Title>Welcome to Github Stats</Title>
      {showLogin ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <SignupForm onSignup={onSignup} />
      )}
      <CustomLink onClick={handleLinkClick}>
        {showLogin ? (
          <LinkWrapper>Create Account</LinkWrapper>
        ) : (
          <LinkWrapper>Login</LinkWrapper>
        )}
      </CustomLink>
    </div>
  );
}

export default UnauthenticatedApp;
