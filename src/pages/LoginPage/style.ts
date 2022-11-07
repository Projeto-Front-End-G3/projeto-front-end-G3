import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--color-blue-1);
  padding: 20px;
  height: 100vh;

  @media (min-width: 500px) {
    padding: 20px 80px;
  }

  @media (min-width: 700px) {
    padding: 20px 150px;
  }

  @media (min-width: 1024px) {
    background-color: var(--color-blue-4);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const CompanyDescription = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    height: 550px;
    width: 300px;
    border-radius: 5px 0px 0px 5px;
    gap: 20px;
  }
`;

export const CompanyLogo = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 90px;
    height: 90px;
  }
`;

export const Description = styled.p`
  @media (min-width: 1024px) {
    text-align: center;
    font-family: "Revalia", cursive;
    height: 100px;
    font-size: 30px;
    color: var(--color-blue-1);
    width: 90%;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  @media (min-width: 1024px) {
    width: 500px;
    height: 550px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: var(--color-blue-1);
    border-radius: 0px 5px 5px 0px;
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginText = styled.h1`
  color: var(--color-white);
  font: var(--font-title-0);
`;

export const ButtonBack = styled(Link)`
  font: var(--font-text-0);
  text-decoration: none;
  font-size: 15px;
  display: flex;
  padding: 10px 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-blue-2);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  font: var(--font-text-0);
  cursor: pointer;
  background-color: var(--color-blue-2);
  color: var(--color-white);
  border: none;
  height: 50px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 17px;
`;

export const SignUpButton = styled(Link)`
  font: var(--font-text-0);
  font-size: 15px;
  text-decoration: none;
  border-radius: 5px;
  height: 50px;
  background-color: var(--color-blue-2);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;
