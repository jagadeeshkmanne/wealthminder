// src/shared/components/Layout/AuthLayout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayoutProps } from './Layout.types';

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = 'WealthMinder',
  subtitle = 'Investment Portfolio Management'
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex justify-center">
            <img
              className="h-12 w-auto"
              src="/assets/images/logo.svg"
              alt="WealthMinder"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;