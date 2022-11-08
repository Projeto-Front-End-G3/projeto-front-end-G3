import styled from "styled-components";

export const HomeModalStyled = styled.div`
  height: 911px;
  width: 1275px;
  border-radius: 5px;
  position: fixed;
  left: 0;
  top: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba (0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .blueSide {
    height: 911px;
    width: 347px;
    background: #191970;
    border-radius: 5px 0px 0px 5px;
    .textDescription {
      display: flex;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 24px;
      text-align: center;

      color: #ffffff;
    }
  }

  .returnBtn {
    width: 111px;
    height: 70px;
    background: #191970;
    border-radius: 5px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
  }

  .editBtn {
    width: 42px;
    height: 39px;
    border-radius: 100%;
  }

  .sectionForm {
    .label {
      width: 129px;
      height: 28px;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 24px;
      color: #757575;
    }
  }
`;
