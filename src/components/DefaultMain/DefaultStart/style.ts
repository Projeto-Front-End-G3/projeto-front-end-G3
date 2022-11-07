import styled from "styled-components";

export const MainFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 470px;
  padding: 10px;
  text-align: center;

  .backgroundImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
    filter: contrast(200%);
  }
  
  button {
    width: 200px;
    padding: 5px;
    margin-top: 20px;
    border: none;
    border-radius: 3px;
    color: var(--color-white);
    background-color: var(--color-blue-1);
    font-size: 16px;
    font-weight: bold;
    z-index: 1;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(120%);
  }

  h1 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  h1 span {
    color: var(--color-blue-1);
  }

  p {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 15px;
  }
`