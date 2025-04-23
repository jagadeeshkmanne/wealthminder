// src/core/router/AdminRoute.tsx
import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import firebaseService from '@/core/services/firebase.service';

/**
 * AdminRoute component for protecting routes that require admin privileges
 * If user is not authenticated or not an admin, redirects to appropriate page
 */
const AdminRoute: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!currentUser) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      try {
        const firestore = firebaseService.getFirestore();
        const userDoc = await getDoc(doc(firestore, 'users', currentUser.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(userData.role === 'admin');
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [currentUser]);

  // Show loading indicator while checking admin status
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If not an admin, redirect to dashboard
  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  // If authenticated and admin, render the outlet (child route)
  return <Outlet />;
};

export default AdminRoute;