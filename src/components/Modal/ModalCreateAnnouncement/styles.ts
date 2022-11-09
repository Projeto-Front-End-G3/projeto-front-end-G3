import styled from "styled-components";

export const StyledModalPost = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    max-height: 450px;
    width: 60%;
    min-width: 300px;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }

  .firstDiv {
    width: 100%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .containerDiv {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .closeTag {
        cursor: pointer;
      }

      .textGreetings {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #191970;
      }
    }
  }

  form {
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      height: 60%;
      padding: 6px 5px 120px 5px;
      background-color: #f3f3f3;
      border-radius: 3.5px;
      border-style: none;

      ::placeholder {
        position: absolute;
        left: 5px;
        top: 5px;
        font-size: 15px;
      }
    }

    .divSelect {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 15px;

      span {
        color: red;
      }

      label {
        font-weight: 300;
        font-size: 18px;
        color: #000000;
      }

      select {
        width: 100px;
        height: 40px;
        background: #f3f3f3;
        font-weight: 300;
        font-size: 15px;
        color: #9d9b9b;

        options {
          font-weight: 400;
          font-size: 24px;
          color: #000000;
          background: #f3f3f3;
        }
      }
    }

    > button {
      margin-top: 16px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      font-weight: 400;
      font-size: 18px;
      color: var(--color-white);
      background-color: var(--color-blue-1);
      transition: 0.3s;

      :hover {
        background-color: var(--color-blue-2);
      }
    }
  }
`;
