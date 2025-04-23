// src/modules/auth/pages/PasswordResetPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PasswordResetForm } from '../components';

const PasswordResetPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password | WealthMinder</title>
        <meta name="description" content="Reset your password for WealthMinder" />
      </Helmet>

      <PasswordResetForm />
    </>
  );
};

export default PasswordResetPage;