import styled from "styled-components";

export const DefaultDoubtsBox = styled.div`
  /* background-color: var(--color-blue-1); */
  /* color: var(--color-white); */
  margin-top: 60px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  span {
    color: var(--color-blue-2);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    line-height: 28px;
  }

  a {
    background-color: var(--color-blue-1);
    color: var(--color-white);
    padding: 5px 30px;
    border-radius: 3px;
    font-weight: bold;
    transition: 0.3s;

    :hover {
      background-color: var(--color-blue-2);
    }
  }
`;
