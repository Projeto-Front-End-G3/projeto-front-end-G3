import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 1200px;
  align-items: center;

  .cardContainer {
    width: 90%;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-2);
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .nickName {
    display: flex;
    gap: 0.62rem;
    align-items: center;
  }

  .nickName img {
    width: 50px;
    height: 50px;
  }

  .nickName p {
    font: var(--font-title-1);
    color: var(--color-blue-1);
  }

  .cardContainer button {
    height: 35px;
    width: 200px;
    font: var(--font-text-1);
    border: none;
    border-radius: var(--radius-1);
    background-color: var(--color-blue-1);
    color: var(--color-grey-3);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;

    .cardContainer {
      width: 49%;
    }
  }
`;
