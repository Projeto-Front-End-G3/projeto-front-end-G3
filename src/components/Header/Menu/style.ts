import styled, { css } from "styled-components";

interface iStyledMenuProps {
  isClick?: boolean;
}

export const StyledMenu = styled.div<iStyledMenuProps>`
  width: 100%;

  nav {
    width: 100%;
    position: fixed;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    top: 100px;
    z-index: 7;
    background-color: var(--color-white);

    > a {
      color: var(--color-blue-1);
      font-size: 12px;
      transition: 0.3s;

      :hover {
        color: var(--color-blue-2);
      }
    }

    > button {
      position: absolute;
      top: 5px;
      right: 5px;
      color: var(--color-blue-1);
    }

    @media (min-width: 800px) {
      a {
        font-size: 15px;
      }
    }

    @media (min-width: 650px) {
      flex-direction: row;
      position: relative;
      gap: 5px;
      top: 0;
      z-index: 7;
      background-color: var(--color-white);

      a {
        padding: 10px;
        white-space: nowrap;
      }

      div {
        display: none;
      }
    }
  }

  div {
    a {
      text-align: center;
      width: 50%;
    }
  }

  @media (max-width: 650px) {
    ${({ isClick }) => {
      if (!isClick) {
        return css`
          display: none;
        `;
      }
    }}
  }
`;
