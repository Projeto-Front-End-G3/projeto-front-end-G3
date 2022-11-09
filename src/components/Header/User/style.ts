import styled, { css } from "styled-components";

interface iStyledUserProps {
  isClick?: boolean;
}

export const StyledUser = styled.div<iStyledUserProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  nav {
    width: 100px;
    position: absolute;
    bottom: -56px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
    gap: 10px;
    background-color: var(--color-blue-1);
    border-radius: 5px;

    a {
      font-size: 12px;
      color: var(--color-white);
    }

    button {
      font-size: 12px;
      color: var(--color-white);
    }

    .close {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  ${({ isClick }) => {
    if (!isClick) {
      return css`
        nav {
          display: none;
        }
      `;
    }
  }}
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: flex-end;

  figure {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  button {
    font-size: 16px;
    color: var(--color-blue-1);
  }
`;
