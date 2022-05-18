import styled from "styled-components";

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid;
  color: ${(props) => props.theme.primaryColor};

  input {
    width: calc(100% - 35px);
    border: 0;
    outline: none;
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.2em;
    margin-left: 10px;
    font-weight: 900;

    &::placeholder {
      opacity: 0.8;
      color: ${(props) => props.theme.primaryColor};
      font-weight: 300;
    }
  }
`;
