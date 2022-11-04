import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100vw;
  margin-top: 20px;

  @media (min-width: 500px) {
    margin-top: 40px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  figure {
    display: none;
    width: 100px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: -140px;
    }
  }

  @media (min-width: 500px) {
    figure {
      display: unset;
    }
  }

  @media (min-width: 650px) {
    figure {
      width: 200px;

      img {
        object-position: -100px;
      }
    }
  }

  @media (min-width: 800px) {
    figure {
      width: 300px;

      img {
        object-position: unset;
      }
    }
  }
`;

export const StyledContainer = styled.div`
  width: 80%;
  max-width: 250px;

  h1 {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 170px) {
    h1 {
      font-size: 15px;
    }
  }

  form {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 12px;
    }

    input {
      width: 100%;
      height: 20px;
      padding-left: 5px;
      font-size: 10px;
    }

    input::placeholder {
      color: var(--color-grey-2);
    }

    textarea {
      width: 100%;
      height: 120px;
      padding-top: 5px;
      padding-left: 5px;
      font-size: 10px;
    }

    textarea::placeholder {
      color: var(--color-grey-2);
    }

    @media (min-width: 500px) {
      input {
        font-size: 12px;
      }

      textarea {
        font-size: 12px;
      }
    }

    span {
      font-size: 7px;
    }

    p {
      font-size: 9px;
      color: var(--color-grey-2);
    }

    button {
      align-self: flex-end;
      padding: 5px 15px;

      font-size: 10px;
      color: var(--color-white);

      background-color: var(--color-blue-1);
      border-radius: 5px;
    }
  }
`;
