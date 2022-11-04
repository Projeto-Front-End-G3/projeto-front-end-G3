import styled from "styled-components";

export const ArticleContainer = styled.article`
  padding: 10px;
  border-radius: 5px;
  background-color: var(--color-white);
  margin: 30px 0;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  div img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 5px;
  }

  div h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 15px;
  }

  button {
    width: 120px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    color: var(--color-white);
    background-color: var(--color-blue-1);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`