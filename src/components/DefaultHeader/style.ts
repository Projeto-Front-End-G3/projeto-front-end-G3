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
  z-index: 2;

  div {
    color: var(--color-blue-1);
    text-align: center;
  }

  div img {
    width: 30px;
    cursor: pointer;
  }

  nav {
    display: none;
  }

  span {
    display: none;
  }

  .menu {
    width: 25px;
    height: 25px;
    color: var(--color-blue-1);
    cursor: pointer;
  }

  @media (min-width: 500px) {
    padding: 10px 50px;
  }

  @media (min-width: 1024px) {
    padding: 10px 155px;

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

    svg {
      display: none;
    }
  }

  @media (min-width: 1350px) {
    padding: 10px 135px;
  }
`;