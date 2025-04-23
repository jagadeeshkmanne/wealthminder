import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppRouter } from '@/core/router';
import { AppProvider } from '@/core/providers';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Helmet>
        <title>WealthMinder - Investment Portfolio Management</title>
        <meta name="description" content="Manage your investment portfolio, track performance, and optimize your mutual fund investments." />
      </Helmet>
      <AppRouter />
    </AppProvider>
  );
};

export default App;