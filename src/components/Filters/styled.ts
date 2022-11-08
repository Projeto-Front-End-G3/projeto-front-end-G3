import styled from "styled-components";

export const ContainerFilters = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 100px;

  .newAdd {
    width: 140px;
    height: 40px;
    padding: 5px;
    background-color: var(--color-blue-3);
    display: flex;
    align-items: center;
    gap: 13px;
    border-radius: 3px;
    margin: 1rem 0;
    cursor: pointer;
  }

  .newAdd p {
    color: var(--color-grey-3);
    font: var(--font-title-3);
  }

  .newAdd svg {
    transform: scale(1.5);
    color: var(--color-grey-3);
  }

  .filtersCenter {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .filtersCenter ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .filtersCenter ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.1rem;
  }

  .filtersCenter ul li svg {
    transform: scale(2.5);
    color: var(--color-blue-1);
    cursor: pointer;
  }

  .filtersCenter ul li svg:hover {
    color: var(--color-blue-3);
  }

  .filtersCenter ul li p {
    font: var(--font-text-3);
    color: var(--color-blue-1);
  }

  .filtersCenter div {
    width: 100%;
    height: 35px;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);
    position: relative;
    margin-bottom: 1.2rem;
  }

  .filtersCenter div input {
    background-color: var(--color-grey-3);
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding: 0px 2.5rem 0px 0.8rem;
    box-sizing: border-box;
    color: var(--grey-0);
    font: var(--font-text-3);
    border: 1px solid var(--color-blue-1);
  }

  .filtersCenter div input:focus {
    outline: 1.5px solid var(--color-blue-1);
  }

  .filtersCenter div svg {
    transform: scale(1.5);
    color: var(--color-blue-1);
    position: absolute;
    right: 5px;
    top: 10px;
    cursor: pointer;
  }

  @media (min-width: 425px) {
    .filtersCenter ul {
      gap: 2rem;
    }
  }

  @media (min-width: 768px) {
    .filtersCenter {
      flex-direction: row;
      justify-content: space-between;
      padding: 1.2rem 0;
    }

    .filtersCenter ul {
      gap: 3rem;
    }

    .filtersCenter div {
      width: 250px;
    }
  }
`;
