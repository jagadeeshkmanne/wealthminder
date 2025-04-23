// src/modules/auth/pages/LoginPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../components';

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login | WealthMinder</title>
        <meta name="description" content="Login to WealthMinder - Your personal investment portfolio manager" />
      </Helmet>

      <LoginForm />
    </>
  );
};

export default LoginPage;