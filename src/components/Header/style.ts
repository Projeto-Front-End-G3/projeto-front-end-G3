import styled, { css } from "styled-components";

interface iStyledContainerProps {
  isClick?: boolean;
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
      font-family: "Revalia", cursive;
      font-size: 12px;
    }
  }

  button {
    font-size: clamp(1.2rem, 10vw + 0.1rem, 3rem);
    color: var(--color-blue-1);
  }

  @media (min-width: 500px) {
    button {
      display: none;
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

export const StyledHeader = styled.header<iStyledContainerProps>`
  width: 100vw;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 10;

  @media (max-width: 200px) {
    height: 150px;
  }

  ${({ isClick }) => {
    if (isClick) {
      return css`
        @media (max-width: 200px) {
          height: 100px;
        }
      `;
    }
  }}

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-white);
  border-bottom: 0.5px solid var(--color-blue-5);
`;

interface iStyledViewMenuProps {
  mediaView: "small" | "medium";
  isClick?: boolean;
  user?: boolean;
}

export const StyledViewMenu = styled.div<iStyledViewMenuProps>`
  ${({ mediaView, isClick }) => {
    switch (mediaView) {
      case "small":
        if (!isClick) {
          return css`
            display: none;
          `;
        }
        return css`
          width: 100vw;
          position: fixed;
          top: 100px;
          z-index: 10;
          background-color: var(--color-white);
          ${({ isClick, user }: iStyledViewMenuProps) => {
            if (isClick) {
              if (user) {
                return css`
                  height: 110px;
                  border-bottom: 0.5px solid var(--color-blue-5);
                `;
              }
            }
          }}
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          @media (min-width: 500px) {
            display: none;
          }
        `;
      case "medium":
        return css`
          display: flex;
          flex-direction: column;
        `;
    }
  }}
`;

interface iStyledViewButtonsProps {
  user?: boolean;
  mediaView: "small" | "medium" | "big";
}

export const StyledViewButtons = styled.div<iStyledViewButtonsProps>`
  a {
    color: var(--color-white);
  }

  ${({ mediaView, user }) => {
    switch (mediaView) {
      case "small":
        if (user) {
          return css`
            display: none;
          `;
        }
        return css`
          width: 100vw;
          padding: 10px 0;
          display: flex;
          justify-content: center;

          border-top: 0.5px solid var(--color-blue-5);
          border-bottom: 0.5px solid var(--color-blue-5);
          background-color: var(--color-white);

          @media (min-width: 500px) {
            display: none;
          }
        `;
      case "medium":
        return css`
          @media (max-width: 500px) {
            display: none;
          }
          @media (min-width: 650px) {
            display: none;
          }
        `;
      case "big":
        return css`
          @media (max-width: 650px) {
            display: none;
          }
        `;
    }
  }}
`;

interface iStyledViewUserProps {
  mediaView: "small" | "medium";
  isClick: boolean;
}

export const StyledViewUser = styled.div<iStyledViewUserProps>`
  a {
    width: unset;
  }

  button {
    display: unset;
    font-size: 16px;
  }

  ${({ mediaView }) => {
    switch (mediaView) {
      case "small":
        return css`
          ${({ isClick }: iStyledViewUserProps) => {
            if (!isClick) {
              return css`
                display: none;
              `;
            }
          }}
          position: absolute;
          bottom: 5px;
          right: 5px;
        `;
      case "medium":
        return css`
          @media (max-width: 500px) {
            display: none;
          }
        `;
    }
  }}
`;
