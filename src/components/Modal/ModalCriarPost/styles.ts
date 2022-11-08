import styled from "styled-components";

export const StyledModalPost = styled.div`
  height: 350px;
  width: 500px;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .firstDiv {
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    align-items: center;
    gap: 15px;
    .closeTag {
      cursor: pointer;
    }
    .textGreetings {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      color: #191970;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 447px;
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
      label {
        font-family: "Roboto";
        font-weight: 300;
        font-size: 18px;
        color: #000000;
      }

      select {
        width: 100px;
        height: 40px;
        background: #f3f3f3;
        font-family: "Roboto";
        font-weight: 300;
        font-size: 15px;
        color: #9d9b9b;
        options {
          font-family: "Roboto";
          font-weight: 400;
          font-size: 24px;
          color: #000000;
          background: #f3f3f3;
        }
      }
    }

    .divButton {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-right: 25px;
      button {
        height: 40px;
        width: 100px;
        background-color: #191970;
        color: #ffff;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 18px;
      }
    }
  }
`;
