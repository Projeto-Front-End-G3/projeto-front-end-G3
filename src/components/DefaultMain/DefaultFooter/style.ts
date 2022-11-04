import styled from "styled-components";

export const MainFooter = styled.footer`
  position: relative;

  .backgroundImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    padding: 5px;
    margin-bottom: 30px;
    border: none;
    border-radius: 3px;
    color: var(--color-white);
    background-color: var(--color-blue-1);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  p {
    text-align: center;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 15px;
  }
`