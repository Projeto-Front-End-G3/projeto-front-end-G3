import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border: solid 2px var(--color-blue-2);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: var(--color-white);
  background-color: var(--color-blue-2);
  transition: 0.5s;

  :disabled {
    background: rgba(0, 0, 205, 0.6);
    border-color: rgba(0, 0, 205, 0.6);
    cursor: auto;
  }
`;
