import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 0 15px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--color-grey-1);
  display: none;

  p {
    font-size: 14px;
    cursor: pointer;
  }
`;
