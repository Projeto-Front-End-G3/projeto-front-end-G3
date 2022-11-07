import styled from "styled-components";

export const Header2 = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid var(--color-grey-2);
  z-index: 2;

  div {
    text-align: center;
    color: var(--color-blue-1);
  }

  div img {
    width: 40px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  nav p {
    cursor: pointer;
    border-bottom: 1px solid var(--color-white);
  }

  nav p:hover {
    border-bottom: 1px solid var(--color-blue-1);
    color: var(--color-blue-1);
    transition: 0.5s;
  }

  span {
    display: flex;
    justify-content: space-between;
    width: 230px;
  }

  span a {
    background-color: var(--color-blue-1);
    color: var(--color-white);
    font-weight: bold;
    padding: 5px;
    width: 100px;
    border-radius: 3px;
    text-align: center;
  }

  span button:hover {
    filter: brightness(120%);
  }

  @media (min-width: 1024px) {
    padding: 10px 155px;
  }

  @media (min-width: 1360px) {
    padding: 10px 250px;
  }
`;
