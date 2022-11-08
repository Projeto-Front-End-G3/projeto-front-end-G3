import styled, { css } from "styled-components";

interface iStyledMenuProps {
  user?: boolean;
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

    a {
      color: var(--color-blue-1);
      font-size: clamp(0.8rem, 2vw + 0.1rem, 1.2rem);
    }

    @media (min-width: 500px) {
      flex-direction: row;
      a {
        padding: 10px;
        white-space: nowrap;
      }
    }

    button {
      position: absolute;
      top: 5px;
      right: 5px;
      color: var(--color-blue-1);
    }
  }
  @media (max-width: 500px) {
    ${({ isClick, user }) => {
      if (!isClick) {
        return css`
          display: none;
        `;
      } else if (!user) {
        return css`
          nav {
            height: 72px;
          }
        `;
      }
    }}
  }
`;
