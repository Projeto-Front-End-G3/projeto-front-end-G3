import styled, { css } from 'styled-components';

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

    background-color: var(--color-white);

    a {
      color: var(--color-blue-1);
      font-size: 12px;
    }

    @media (min-width: 800px) {
      a {
        font-size: 15px;
      }
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
    ${({ isClick }) => {
      if (!isClick) {
        return css`
          display: none;
        `;
      }
    }}
  }
`;
