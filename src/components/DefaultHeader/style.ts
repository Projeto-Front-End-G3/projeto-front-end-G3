import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid var(--color-grey-2);
  z-index: 1;

  div {
    color: var(--color-blue-1);
    text-align: center;
  }

  div img {
    width: 30px;
    cursor: pointer;
  }

  .menu {
    width: 25px;
    height: 25px;
    color: var(--color-blue-1);
    cursor: pointer;
  }

  @media (min-width: 500px) {
    padding: 10px 75px;
  }

  @media (min-width: 1024px) {
    padding: 10px 100px;
  }

  @media (min-width: 1350px) {
    padding: 10px 135px;
  }
`