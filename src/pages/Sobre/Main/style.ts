import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  margin-top: 30px;

  @media (min-width: 500px) {
    margin-top: 50px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 20px;
    text-align: center;
    color: var(--color-white);
  }

  @media (min-width: 650px) {
    h1 {
      text-align: unset;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
    color: var(--color-white);
  }
`;
