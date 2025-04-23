import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider';
import NotificationProvider from './NotificationProvider';
import ThemeProvider from './ThemeProvider';

interface AppProviderProps {
  children: React.ReactNode;
}

/**
 * AppProvider component that wraps all context providers
 * This helps maintain a clean component hierarchy
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <NotificationProvider>
              {children}
            </NotificationProvider>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default AppProvider;