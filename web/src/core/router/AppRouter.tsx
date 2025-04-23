// src/core/router/AppRouter.tsx (Updated version)
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

// Layouts
import MainLayout from '@/shared/components/Layout/MainLayout';
import AuthLayout from '@/shared/components/Layout/AuthLayout';

// Auth Pages
import { LoginPage, RegisterPage, PasswordResetPage } from '@/modules/auth';

// Main Pages
import { DashboardPage } from '@/modules/dashboard';

// User Pages
import { ProfilePage, SettingsPage } from '@/modules/user';

// This component is responsible for setting up all the routes in the application
const AppRouter: React.FC = () => {
  const { isLoading } = useAuth();

  // Show loading indicator while authentication state is being determined
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Auth Routes - Public */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
      </Route>

      {/* Main Routes - Protected */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* User Settings */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Redirect Routes */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRouter;