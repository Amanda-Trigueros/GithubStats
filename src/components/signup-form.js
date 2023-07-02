import { useState } from "react";
import styled from "@emotion/styled";
import Input from "./input";
// import { useAuth } from "../context/auth-context";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

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

function SignupForm({ onSignup }) {
  // const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSignup(formData);
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
        <Input
          name="first_name"
          value={first_name}
          onChange={handleChange}
          label="First Name"
        />
        <Input
          name="last_name"
          value={last_name}
          onChange={handleChange}
          label="Last Name"
        />
        <Wrapper>
          <SubmitButton type="submit">Create Account</SubmitButton>
        </Wrapper>
      </form>
    </div>
  );
}

export default SignupForm;
