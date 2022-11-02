/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

interface iStyledContainerProps {
  isUser?: boolean;
  isClick?: boolean;
  isClickModal?: boolean;
}

export const StyledContainer = styled.div<iStyledContainerProps>`
  width: 80%;
  height: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 200px) {
    flex-direction: unset;
  }

  a {
    width: 100%;
    max-width: 200px;
    height: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    color: var(--color-blue-1);

    img {
      height: 80%;
    }

    h1 {
      font-family: 'Revalia', cursive;
      font-size: 12px;
    }
  }
  button {
    font-size: 18px;
    color: var(--color-blue-1);
  }

  @media (min-width: 200px) {
    button {
      font-size: 40px;
    }
  }
  nav {
    display: none;
  }
  @media (min-width: 500px) {
    button {
      display: none;
    }
    .menu {
      display: flex;
      a {
        font-size: 12px;
        padding: 10px;
        white-space: nowrap;
      }
    }
  }
  @media (min-width: 600px) {
    .buttons {
      display: flex;
      gap: 10px;
      a {
        padding: 5px 15px;

        font-size: 12px;
        color: var(--color-white);

        background-color: var(--color-blue-1);
        border-radius: 5px;
      }
    }
    ${({ isUser }) => {
      if (isUser) {
        return css`
          .buttons {
            display: none;
          }
        `;
      }
    }}
  }
  @media (min-width: 800px) {
    .menu > a {
      font-size: 15px;
    }

    .buttons > a {
      padding: 5px 20px;
      font-size: 15px;
    }
  }
  ${({ isClick }) => {
    if (isClick) {
      return css`
        justify-content: center;
        button {
          display: none;
        }
      `;
    }
  }}
`;

export const StyledMenu = styled.div<iStyledContainerProps>`
  .modal {
    width: 100%;
    position: relative;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 5px;

    border-bottom: 0.5px solid var(--color-blue-5);

    a {
      color: var(--color-blue-1);
      font-size: 12px;
    }

    button {
      position: absolute;
      top: 5px;
      right: 5px;
      color: var(--color-blue-1);
    }

    .user {
      position: absolute;
      bottom: 5px;
      right: 5px;

      display: flex;
      align-items: flex-end;
      gap: 5px;
      img {
        width: 30px;
      }
      button {
        position: unset;
        font-size: 15px;
      }
    }
  }
  ${({ isClick }) => {
    if (!isClick) {
      return css`
        display: none;
      `;
    }
  }}
`;

export const StyledHeader = styled.header<iStyledContainerProps>`
  width: 100vw;
  height: 150px;

  ${({ isClick }) => {
    if (isClick) {
      return css`
        height: 100px;
      `;
    }
  }}

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 0.5px solid var(--color-blue-5);
`;
