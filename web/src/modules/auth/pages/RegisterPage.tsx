// src/modules/auth/pages/RegisterPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../components';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Register | WealthMinder</title>
        <meta name="description" content="Create a new account on WealthMinder - Your personal investment portfolio manager" />
      </Helmet>

      <RegisterForm />
    </>
  );
};

export default RegisterPage;