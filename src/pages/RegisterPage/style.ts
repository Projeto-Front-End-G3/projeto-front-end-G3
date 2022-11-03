import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: var(--color-blue-4);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 918px;
  margin: 36px auto;
  padding: 0 16px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 16px;

    > h1 {
      color: var(--color-blue-1);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding: 24px 16px;
    gap: 16px;
    background-color: var(--color-blue-1);

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > h2 {
        color: var(--color-white);
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: 40px;
        padding: 0 16px;
        border: solid 2px var(--color-blue-2);
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        line-height: 28px;
        color: var(--color-white);
        background: var(--color-blue-2);
      }
    }
  }
`;
