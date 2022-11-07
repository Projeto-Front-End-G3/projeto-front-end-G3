import styled from 'styled-components';

export const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
  a {
    padding: 5px 15px;

    font-size: 12px;
    color: var(--color-white);

    background-color: var(--color-blue-1);
    border-radius: 5px;
  }

  @media (max-width: 170px) {
    a {
      padding: 5px 8px;

      font-size: 10px;
    }
  }

  @media (min-width: 800px) {
    a {
      padding: 5px 20px;
      font-size: 15px;
    }
  }
`;
