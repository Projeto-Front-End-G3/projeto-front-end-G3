import React from "react";
import styled, { css } from "styled-components";

interface iContainerProps {
  isOpen?: boolean;
  desktop?: boolean;
  setDesktop?: React.Dispatch<React.SetStateAction<boolean>>;
  options?: boolean;
}

export const Container = styled.header<iContainerProps>`
  height: 100px;
  width: 100%;
  background-color: var(--color-grey-3);
  top: 0;
  border-bottom: 1px solid var(--color-blue-1);
  z-index: 2;

  .headers-container {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .headers-general {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    margin: 0 auto;
  }

  .headers-general div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headers-general div img {
    width: 60px;
    height: 60px;
  }

  .headers-general div h2 {
    color: var(--color-blue-1);
    font-size: 1.2rem;
    font-family: "Revalia", cursive;
    font-weight: 700;
  }

  .headers-general svg {
    transform: scale(1.5);
    color: var(--color-blue-1);
  }

  .animation {
    width: 100%;
  }

  .nav-animation {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.2rem 0;
    transition: 0.5s ease;
    background-color: var(--color-grey-3);
    border-bottom: 1px solid var(--color-blue-1);
  }

  .nav-animation ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: 1.5rem;
  }

  .nav-animation ul li {
    font: var(--font-text-0);
    color: var(--color-blue-1);
  }

  .nav-animation ul li:hover {
    color: var(--color-blue-3);
  }

  #profile {
    display: none;
  }

  #profile svg {
    transform: scale(1.5);
  }

  @keyframes qualquerNome {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }

    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes qualquerNomeTwo {
    from {
      transform: translateY(0px);
      opacity: 1;
      display: flex;
    }

    to {
      transform: translateY(-50px);
      opacity: 0;
      display: none;
    }
  }

  @media (max-width: 767px) {
    ${({ isOpen }) => {
      if (isOpen) {
        return css`
          .nav-animation {
            animation: qualquerNome 500ms forwards;
            display: flex;
          }
        `;
      } else {
        return css`
          .nav-animation {
            animation: qualquerNomeTwo 500ms forwards;
            display: none;
          }
        `;
      }
    }}
  }

  @media (min-width: 768px) {
    .headers-container {
      display: flex;
      width: 85%;
      margin: 0 auto;
      justify-content: space-between;
      max-width: 1200px;
      display: flex;
      align-items: center;
    }

    .headers-general {
      width: 20%;
      margin: 0px;
    }

    .headers-general svg {
      display: none;
    }

    .display {
      display: none;
    }

    .animation {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .nav-animation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      width: 100%;
      height: 100%;
      flex-direction: row;
      transition: none;
      margin-top: 0px;
      color: var(--color-blue-1);
      background-color: inherit;
      z-index: 0;
      border: none;
    }

    .nav-animation ul {
      height: 45%;
      align-items: center;
      flex-direction: row;
      margin: 0 1.25rem;
      gap: 2.5rem;
      margin-left: 2.5rem;
    }

    .nav-animation ul li {
      cursor: pointer;
      color: var(--color-blue-1);
    }

    #profile {
      display: flex;
      flex-direction: row;
      gap: 0.6rem;
      align-items: center;
      position: relative;
    }

    #profile img {
      border-radius: var(--radius-3);
      width: 2.8rem;
      height: 2.8rem;
    }

    .options {
      color: var(--color-blue-1);
    }

    .exitProfile {
      width: 9.3rem;
      height: 4.25rem;
      font: var(--font-title-3);
      color: var(--color-grey-3);
      background: var(--color-blue-1);
      position: absolute;
      top: 5rem;
      right: 0.43rem;
      border-radius: var(--radius-1);
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      padding: 0.7rem;
    }

    .two {
      display: flex;
      gap: 0.75rem;
      color: var(--color-grey-3);
    }

    @keyframes animationProfile {
      to {
        opacity: 1;
      }
      from {
        opacity: 0;
      }
    }

    ${({ options }) => {
      if (options) {
        return css`
          .exitProfile {
            animation: animationProfile 1s;
          }
        `;
      }
    }}
  }
`;
