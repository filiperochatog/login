// src/LoginForm.js
import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import GlobalStyles from './GlobalStyles';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://criticalhits.com.br/wp-content/uploads/2020/10/Goku-vegeta.jpg') no-repeat center center;
  background-size: cover;
  animation: ${css`${fadeIn}`} 1s ease-in-out;
`;

const LoginFormWrapper = styled.form`
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${css`${fadeIn}`} 1s ease-in-out;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: -20px; /* Ajuste o valor conforme necessário */
  color: #ff5722; /* Cor temática do Dragon Ball */
  font-family: 'Dragon Ball Z', sans-serif; /* Fonte temática */
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff5722; /* Cor temática do Dragon Ball */
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff5722;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #ff5722;
    transform: translateY(0);
  }
`;

const LoginForm = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Coloque aqui qualquer lógica que precise rodar após 2 segundos
    }, 2000); // Muda para Super Saiyan após 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      <LoginContainer>
        <LoginFormWrapper>
          <Title>Login DBZ</Title>
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Login</Button>
        </LoginFormWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
