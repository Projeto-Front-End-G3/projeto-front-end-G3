import styled from "styled-components";

export const DefaultServicesBox = styled.ul`
  list-style: none;
  background-color: var(--color-blue-1);
  color: var(--color-white);
  padding: 30px 10px;
  margin-top: 100px;
  border-radius: 5px;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--color-white);
  }

  li {
    text-align: center;
    font-size: 14px;
    line-height: 26px;
  }

  li svg {
    width: 35px;
    height: 35px;
  }

  li p {
  }

  button {
    width: 200px;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 3px;
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 16px;
    font-weight: bold;
    z-index: 1;
    cursor: pointer;
  }

  a {
    width: 200px;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 3px;
    color: var(--color-black);
    background-color: var(--color-white);
    font-size: 16px;
    font-weight: bold;
    z-index: 1;
    text-align: center;
  }

  a:hover {
    border: 1px solid var(--color-white);
    background-color: var(--color-blue-1);
    color: var(--color-white);
    transition: 0.3s;
  }
`;
