import styled from "styled-components";

export const CardList = styled.ul`
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

    p {
      height: 38px;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .nickName {
    display: flex;
    gap: 0.62rem;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    p {
      font: var(--font-title-1);
      color: var(--color-blue-1);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .cardContainer a {
    display: flex;
    align-items: center;
    justify-content: center;
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
