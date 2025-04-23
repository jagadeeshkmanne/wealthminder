import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth';

/**
 * PrivateRoute component for protecting routes that require authentication
 * If user is not authenticated, redirects to login page
 */
const PrivateRoute: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to login with return path
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If email is not verified, redirect to email verification page
  // Skip this check for the email verification page itself to avoid infinite redirects
  if (!currentUser.emailVerified && location.pathname !== '/verify-email') {
    return <Navigate to="/verify-email" state={{ from: location }} replace />;
  }

  // If authenticated, render the outlet (child route)
  return <Outlet />;
};

export default PrivateRoute;