// src/shared/components/Layout/Header.tsx (Updated version)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth';
import { useTheme } from '@/core/hooks/useTheme';
import { HeaderProps } from './Layout.types';
import { Dropdown } from '../Dropdown';

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const userMenuItems = [
    {
      label: 'Profile',
      value: 'profile',
      onClick: () => {
        // Navigate to profile page
        window.location.href = '/profile';
      }
    },
    {
      label: 'Settings',
      value: 'settings',
      onClick: () => {
        // Navigate to settings page
        window.location.href = '/settings';
      }
    },
    {
      type: 'divider' as const
    },
    {
      label: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      value: 'theme',
      onClick: toggleTheme
    },
    {
      type: 'divider' as const
    },
    {
      label: 'Logout',
      value: 'logout',
      onClick: handleLogout
    }
  ];

  const notificationItems = [
    {
      type: 'header' as const,
      label: 'Notifications'
    },
    {
      label: 'No new notifications',
      value: 'no-notifications',
      disabled: true
    },
    {
      type: 'divider' as const
    },
    {
      label: 'View All',
      value: 'view-all',
      onClick: () => {
        // Navigate to notifications page
        window.location.href = '/notifications';
      }
    }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
              onClick={onToggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex-shrink-0 flex items-center ml-0 md:ml-4">
              <Link to="/" className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/assets/images/logo.svg"
                  alt="WealthMinder"
                />
                <span className="ml-2 text-xl font-bold text-primary dark:text-white">WealthMinder</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full bg-white dark:bg-gray-800 p-1 mr-2 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <span className="sr-only">Toggle theme</span>
              {theme === 'dark' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Notifications */}
            <div className="flex-shrink-0 relative mr-3">
              <Dropdown
                trigger={
                  <button
                    type="button"
                    className="rounded-full bg-white dark:bg-gray-800 p-1 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                }
                items={notificationItems}
                isOpen={isNotificationOpen}
                onOpenChange={setIsNotificationOpen}
                placement="bottom-end"
              />
            </div>

            {/* User Menu */}
            <div className="ml-3 relative">
              <Dropdown
                trigger={
                  <button
                    type="button"
                    className="bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    id="user-menu"
                  >
                    <span className="sr-only">Open user menu</span>
                    {currentUser?.photoURL ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={currentUser.photoURL}
                        alt={currentUser.displayName || 'User'}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                        {currentUser?.displayName?.[0] || 'U'}
                      </div>
                    )}
                  </button>
                }
                items={userMenuItems}
                placement="bottom-end"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;