import styled from "styled-components";

export const HomeModalStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    height: 500px;
    width: 80%;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    display: flex;
    z-index: 2;

    figure {
      padding: 16px;
      max-width: 300px;
      min-width: 200px;
      max-height: 300px;
      min-height: 200px;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }

  .blueSide {
    height: 100%;
    width: 25%;
    min-width: 220px;
    background: #191970;
    border-radius: 5px 0px 0px 5px;

    .textDescription {
      display: flex;
      justify-content: center;
      font-weight: 400;
      font-size: 14px;
      color: var(--color-white);
      padding: 0 8px;
      text-align: center;
      word-break: break-all;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  .sectionPosts {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    .divGreetings {
      display: flex;
      width: 90%;
      height: 100px;
      align-items: center;
      justify-content: space-between;

      .returnBtn {
        margin-top: 5px;
        width: 100px;
        height: 30px;
        background: #191970;
        border-radius: 5px;
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
        transition: 0.3s;

        :hover {
          background-color: var(--color-blue-2);
        }
      }

      .divEdit {
        margin-top: 5px;
        display: flex;
        flex-direction: column;

        button {
          transition: 0.3s;

          :hover {
            font-weight: bold;
            color: var(--color-blue-2);
          }
        }
      }
    }

    .divContainerPosts {
      width: 90%;
      height: 100%;
      margin-top: 50px;
      margin-bottom: 20px;

      h2 {
        margin-bottom: 5px;
      }

      .divPosts {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 252px;
        border: 2px solid black;
        overflow-y: auto;
        padding: 16px;
        gap: 16px;

        li {
          > div {
            display: flex;
            gap: 0.62rem;
            align-items: center;

            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }

            h2 {
              font: var(--font-title-1);
              color: var(--color-blue-1);
            }
          }

          p {
            margin-top: 8px;
            height: 38px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .buttonDiv {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 35px;
              width: 50%;
              font: var(--font-text-1);
              border: none;
              border-radius: var(--radius-1);
              background-color: var(--color-blue-1);
              color: var(--color-grey-3);
              transition: 0.3s;

              :hover {
                background-color: var(--color-blue-2);
              }
            }

            button {
              height: 35px;
              width: 50%;
              background-color: #cc0000;
              font: var(--font-text-1);
              border: none;
              border-radius: var(--radius-1);
              color: var(--color-grey-3);
              transition: 0.3s;

              :hover {
                background-color: red;
              }
            }
          }
        }
      }
    }
  }
`;

export const EditModalStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    height: 500px;
    width: 80%;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    display: flex;
    z-index: 2;

    figure {
      padding: 16px;
      max-width: 300px;
      max-height: 300px;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }

  .blueSideForm {
    height: 100%;
    width: 25%;
    min-width: 220px;
    background: #191970;
    border-radius: 5px 0px 0px 5px;

    .textDescription {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      justify-content: center;
      padding: 0 8px;
      color: var(--color-white);
      word-break: break-all;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  .sectionForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .divGreetings {
      display: flex;
      width: 90%;
      align-items: center;
      justify-content: space-between;

      .returnBtn {
        margin-top: 5px;
        width: 100px;
        height: 30px;
        background: #191970;
        border-radius: 5px;
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
        transition: 0.3s;

        :hover {
          background-color: var(--color-blue-2);
        }
      }
    }

    form {
      height: 80%;
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;

      span {
        font-size: 12px;
        color: red;
      }

      h2 {
        margin-bottom: 5px;
      }

      .label {
        font-weight: 400;
        font-size: 16.5px;
        color: #757575;
      }

      input {
        height: 48px;
        background-color: #f3f3f3;
        border: 0;
        padding: 0 8px;
      }
    }

    .divGreetings {
      height: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .returnBtn {
        width: 100px;
        height: 30px;
        background: #191970;
        border-radius: 5px;
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
      }
    }
  }

  .divSaveBtn {
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 20px;

    .saveBtn {
      width: 100px;
      height: 30px;
      background: #191970;
      border-radius: 5px;
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
      transition: 0.3s;

      :hover {
        background-color: var(--color-blue-2);
      }
    }
  }
`;
