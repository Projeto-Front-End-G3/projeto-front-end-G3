import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: var(--color-blue-4);
  width: 100%;
  @media (max-width: 200px) {
    margin-top: 140px;
  }

  @media (min-width: 200px) {
    margin-top: 100px;
  }
  padding: 20px 0;
`;
