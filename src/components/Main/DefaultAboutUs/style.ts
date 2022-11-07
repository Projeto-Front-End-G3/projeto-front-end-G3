import styled from "styled-components";

export const DefaultAboutUsBox = styled.div`
  margin-top: 50px;
  
  h2 {
    margin: 80px 0 45px 0;
    text-align: center;
  }
  
  div {
    margin-bottom: 40px;
    padding: 10px 10px 30px 10px;
    border-radius: 5px;
    border-radius: 50px 5px 50px 5px;
    background-color: var(--color-white);
    position: relative;
  }
  
  span {
    color: var(--color-blue-2);
  }

  div h3 {
    margin-bottom: 20px;
    text-align: center;
  }

  div p {
    line-height: 28px;
  }

  div a {
    font-size: 13px;
    position: absolute;
    bottom: 5px;
    right: 40px;
    color: var(--color-black);
  }

  div a:hover {
    color: var(--color-blue-2);
  }
`