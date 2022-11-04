import styled from "styled-components";

export const ServicesBox = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;

  section {
    display: flex;
    justify-content: space-between;
  }
  
  section button {
    width: 47%;
    padding: 5px;
    border: none;
    border-radius: 3px;
    color: var(--color-white);
    background-color: var(--color-blue-1);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  ul li {
    text-align: center;
    cursor: pointer;
  }
  
  ul li img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }

  ul li p {
    font-size: 9px;
    font-weight: bold;
    color: var(--color-blue-1);
  }

  div {
    position: relative;
  }
  
  div input {
    width: 100%;
    padding: 5px 35px 5px 5px;
  }

  .searchImg {
    width: 20px;
    position: absolute;
    top: 7px;
    right: 7px;
  }
`