import styled from "styled-components";

export const StyledButtons = styled.nav`
  display: flex;
  gap: 10px;
  a {
    padding: 5px clamp(5px, 3vw + 0.1px, 30px);

    font-size: clamp(0.5rem, 2vw + 0.1rem, 1rem);
    color: var(--color-white);

    background-color: var(--color-blue-1);
    border-radius: 5px;
  }
`;
