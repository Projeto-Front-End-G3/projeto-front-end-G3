import styled, { css } from "styled-components";

interface iStyledContainerProps {
  isClick?: boolean;
}

interface iStyledViewMenuProps {
  mediaView: "small" | "medium";
  isClick?: boolean;
  user?: boolean;
}

interface iStyledViewButtonsProps {
  mediaView: "small" | "medium" | "big";
}

interface iStyledViewUserProps {
  mediaView: "small" | "medium";
  isClick: boolean;
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
    font-size: 18px;
    color: var(--color-blue-1);
  }

  @media (min-width: 200px) {
    button {
      font-size: 40px;
    }
  }

  @media (min-width: 650px) {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  border-bottom: 0.5px solid var(--color-blue-5);

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
`;

export const StyledViewMenu = styled.div<iStyledViewMenuProps>`
  > div {
    a {
      width: 50%;
    }
  }

  ${({ isClick }) => {
    if (isClick) {
      return css`
        @media (max-width: 500px) {
          border-bottom: 0.5px solid var(--color-blue-5);
        }
      `;
    }
  }}

  ${({ mediaView }) => {
    switch (mediaView) {
      case "small":
        return css`
          width: 100vw;
          position: relative;
          display: flex;
          justify-content: center;
          background-color: var(--color-white);
          ${({ isClick, user }: iStyledViewMenuProps) => {
            if (isClick) {
              if (user) {
                return css`
                  height: 110px;
                `;
              }
            }
          }}

          @media (min-width: 650px) {
            display: none;
          }
        `;
      case "medium":
        return css`
          display: none;
          flex-direction: column;

          @media (min-width: 650px) {
            display: flex;
          }
        `;
    }
  }}
`;

export const StyledViewButtons = styled.div<iStyledViewButtonsProps>`
  a {
    color: var(--color-white);
  }

  ${({ mediaView }) => {
    switch (mediaView) {
      case "small":
        return css`
          width: 100vw;
          margin-top: 10px;

          display: flex;
          justify-content: center;

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
          display: none;

          @media (min-width: 650px) {
            display: flex;
          }
        `;
    }
  }}
`;
