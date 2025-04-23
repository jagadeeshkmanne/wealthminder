// src/shared/components/Layout/Sidebar.tsx (Updated version)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarProps } from './Layout.types';
import { useAuth } from '@/core/hooks/useAuth';
import {
  IconDashboard,
  IconPortfolio,
  IconInvestment,
  IconTransaction,
  IconPerformance,
  IconGoal,
  IconSettings
} from '../Icons';

import { routesConfig } from '@/core/config/routes.config';

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const { currentUser } = useAuth();

  // Generate navigation items from routes config
  const navigationItems = [
    {
      ...routesConfig.dashboard,
      icon: <IconDashboard className="h-6 w-6" />
    },
    {
      ...routesConfig.portfolio.list,
      icon: <IconPortfolio className="h-6 w-6" />
    },
    {
      ...routesConfig.investment.list,
      icon: <IconInvestment className="h-6 w-6" />
    },
    {
      ...routesConfig.transaction.list,
      icon: <IconTransaction className="h-6 w-6" />
    },
    {
      ...routesConfig.performance.dashboard,
      icon: <IconPerformance className="h-6 w-6" />
    },
    {
      ...routesConfig.goals.list,
      icon: <IconGoal className="h-6 w-6" />
    },
    {
      ...routesConfig.user.settings,
      icon: <IconSettings className="h-6 w-6" />
    }
  ];

  // Add admin routes if user has admin role
  const adminItems = currentUser?.role === 'admin' ? [
    {
      ...routesConfig.admin.dashboard,
      icon: <IconDashboard className="h-6 w-6" />
    },
    {
      ...routesConfig.admin.users,
      icon: <IconDashboard className="h-6 w-6" />
    }
  ] : [];

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ease-linear duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div className="fixed inset-0 flex z-40">
          <div
            className={`relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 transform transition ease-in-out duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile sidebar content */}
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/assets/images/logo.svg"
                  alt="WealthMinder"
                />
                <span className="ml-2 text-xl font-bold text-primary dark:text-white">WealthMinder</span>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      location.pathname.startsWith(item.path)
                        ? 'bg-gray-100 dark:bg-gray-900 text-primary dark:text-primary-light'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}

                {/* Admin section */}
                {adminItems.length > 0 && (
                  <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
                    <div className="px-2 mb-2">
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        Admin
                      </p>
                    </div>
                    {adminItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`${
                          location.pathname.startsWith(item.path)
                            ? 'bg-gray-100 dark:bg-gray-900 text-primary dark:text-primary-light'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
              <Link to="/profile" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    {currentUser?.photoURL ? (
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={currentUser.photoURL}
                        alt={currentUser.displayName || 'User'}
                      />
                    ) : (
                      <div className="inline-block h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                        {currentUser?.displayName?.[0] || 'U'}
                      </div>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 dark:text-white">
                      {currentUser?.displayName || 'User'}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      View profile
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-14"></div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="/assets/images/logo.svg"
                  alt="WealthMinder"
                />
                <span className="ml-2 text-xl font-bold text-primary dark:text-white">WealthMinder</span>
              </div>

              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      location.pathname.startsWith(item.path)
                        ? 'bg-gray-100 dark:bg-gray-900 text-primary dark:text-primary-light'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}

                {/* Admin section */}
                {adminItems.length > 0 && (
                  <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
                    <div className="px-2 mb-2">
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        Admin
                      </p>
                    </div>
                    {adminItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`${
                          location.pathname.startsWith(item.path)
                            ? 'bg-gray-100 dark:bg-gray-900 text-primary dark:text-primary-light'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
              <Link to="/profile" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    {currentUser?.photoURL ? (
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src={currentUser.photoURL}
                        alt={currentUser.displayName || 'User'}
                      />
                    ) : (
                      <div className="inline-block h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center">
                        {currentUser?.displayName?.[0] || 'U'}
                      </div>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-white">
                      {currentUser?.displayName || 'User'}
                    </p>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      View profile
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;