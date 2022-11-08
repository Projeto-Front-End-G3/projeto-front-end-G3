import styled, { css } from "styled-components";

interface iStyledMenuProps {
  isClick?: boolean;
}

export const StyledMenu = styled.div<iStyledMenuProps>`
  width: 100%;

  nav {
    width: 100%;
    position: relative;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    > a {
      color: var(--color-blue-1);
      font-size: 12px;
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
