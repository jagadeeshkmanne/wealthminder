import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

// Layouts
import MainLayout from '@/shared/components/Layout/MainLayout';
import AuthLayout from '@/shared/components/Layout/AuthLayout';

// Auth Pages
import LoginPage from '@/modules/auth/pages/LoginPage';
import RegisterPage from '@/modules/auth/pages/RegisterPage';
import PasswordResetPage from '@/modules/auth/pages/PasswordResetPage';
import EmailVerificationPage from '@/modules/auth/pages/EmailVerificationPage';

// Main Pages
import DashboardPage from '@/modules/dashboard/pages/DashboardPage';
import PortfoliosPage from '@/modules/portfolio/pages/PortfoliosPage';
import PortfolioDetailsPage from '@/modules/portfolio/pages/PortfolioDetailsPage';
import CreatePortfolioPage from '@/modules/portfolio/pages/CreatePortfolioPage';
import EditPortfolioPage from '@/modules/portfolio/pages/EditPortfolioPage';
import SharedPortfoliosPage from '@/modules/portfolio/pages/SharedPortfoliosPage';

// User Pages
import ProfilePage from '@/modules/user/pages/ProfilePage';
import SettingsPage from '@/modules/user/pages/SettingsPage';

// Admin Pages
import AdminDashboardPage from '@/modules/admin/pages/AdminDashboardPage';
import UserManagementPage from '@/modules/admin/pages/UserManagementPage';
import SystemMonitoringPage from '@/modules/admin/pages/SystemMonitoringPage';
import DataManagementPage from '@/modules/admin/pages/DataManagementPage';
import NotificationManagementPage from '@/modules/admin/pages/NotificationManagementPage';

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
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Route>

      {/* Main Routes - Protected */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Portfolio Management */}
          <Route path="/portfolios" element={<PortfoliosPage />} />
          <Route path="/portfolios/shared" element={<SharedPortfoliosPage />} />
          <Route path="/portfolios/create" element={<CreatePortfolioPage />} />
          <Route path="/portfolios/:id" element={<PortfolioDetailsPage />} />
          <Route path="/portfolios/:id/edit" element={<EditPortfolioPage />} />

          {/* User Settings */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<UserManagementPage />} />
          <Route path="/admin/system" element={<SystemMonitoringPage />} />
          <Route path="/admin/data" element={<DataManagementPage />} />
          <Route path="/admin/notifications" element={<NotificationManagementPage />} />
        </Route>
      </Route>

      {/* Redirect Routes */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRouter;