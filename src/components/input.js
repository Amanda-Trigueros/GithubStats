import styled from "@emotion/styled";
import { colors } from "../styles";

const StyledInput = styled("input")`
  ::placeholder {
    color: ${colors.gray.light};
  }
  height: 28px;
  border-radius: 4px;
  border: none;
  margin-bottom: 2rem;
  background: #fff;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  display: grid;
  width: 213px;
  margin: auto;
`;

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <Wrapper>
      {label ? <label htmlFor={id || name}>{label}</label> : ""}
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default Input;
