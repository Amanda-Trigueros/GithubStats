import { useState } from "react";
import styled from "@emotion/styled";

import Input from "./input";
// import { useAuth } from "../context/auth-context";

const SubmitButton = styled.button`
  border-radius: 4px;
  border: none;
  background: #2d9cdb;
  padding: 8px 16px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;
function LoginForm({ onLogin }) {
  // const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="********"
          label="Password"
        />
        <Wrapper>
          <SubmitButton type="submit">Login</SubmitButton>
        </Wrapper>
      </form>
    </div>
  );
}

export default LoginForm;
