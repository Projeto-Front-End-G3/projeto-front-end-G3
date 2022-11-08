import styled from "styled-components";

export const HomeModalStyled = styled.div`
  height: 450px;
  width: 80%;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
  display: flex;

  .blueSide {
    height: 100%;
    width: 25%;
    background: #191970;
    border-radius: 5px 0px 0px 5px;
    .textDescription {
      display: flex;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #ffffff;
    }
  }

  .divGreetings {
    display: flex;
  }
  .returnBtn {
    width: 100px;
    height: 50px;
    background: #191970;
    border-radius: 5px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }

  .editBtn {
    width: 42px;
    height: 39px;
    border-radius: 100%;
  }
`;

export const EditModalStyled = styled.div`
  height: 450px;
  width: 80%;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  display: flex;
  .blueSideForm {
    height: 100%;
    width: 200px;
    background: #191970;
    border-radius: 5px 0px 0px 5px;
    .textDescription {
      display: flex;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #ffffff;
    }
  }
  .sectionForm {
    form {
      width: 300px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      h2 {
        margin-bottom: 5px;
      }
      .label {
        margin-bottom: 08px;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 16.5px;
        color: #757575;
      }
      input {
        margin-bottom: 20px;
        height: 30px;
        background-color: #f3f3f3;
      }
    }
    .divGreetings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 15px;
      .returnBtn {
        width: 100px;
        height: 50px;
        background: #191970;
        border-radius: 5px;
        font-family: "Roboto";
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
      }
    }
  }
  .editBtn {
    width: 42px;
    height: 39px;
    border-radius: 100%;
  }
`;
