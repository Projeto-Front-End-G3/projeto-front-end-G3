import styled from "styled-components";

export const Container = styled.div`
  text-align: left;

  label {
    font-size: 14px;
    font-weight: 400;
    color: var(--color-white);

    span {
      color: red;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  margin-top: 22px;
  padding: 0 16px;
  border: solid 1px transparent;
  border-radius: 8px;
  background: var(--color-white);

  &:focus-within,
  &:hover {
    border-color: var(--color-white);

    input {
      &::placeholder {
        color: var(--color-grey-1);
      }
    }
  }

  input {
    flex: 1;
    align-items: center;
    border: 0;
    color: var(--color-black);
    background: transparent;

    &::placeholder {
      color: var(--color-grey-1);
    }
  }
`;
