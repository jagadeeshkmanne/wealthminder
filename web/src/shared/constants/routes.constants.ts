// src/shared/constants/routes.constants.ts
export const ROUTES = {
  // Public routes
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_EMAIL: '/verify-email',

  // Private routes
  DASHBOARD: '/dashboard',

  // Portfolio routes
  PORTFOLIOS: '/portfolios',
  PORTFOLIO_DETAILS: '/portfolios/:id',
  CREATE_PORTFOLIO: '/portfolios/create',
  EDIT_PORTFOLIO: '/portfolios/:id/edit',
  SHARED_PORTFOLIOS: '/portfolios/shared',

  // Investment routes
  FUNDS: '/funds',
  FUND_DETAILS: '/funds/:id',
  ADD_FUND: '/funds/add',
  EDIT_FUND: '/funds/:id/edit',

  // Transaction routes
  TRANSACTIONS: '/transactions',
  ADD_TRANSACTION: '/transactions/add',
  EDIT_TRANSACTION: '/transactions/:id/edit',

  // Performance routes
  PERFORMANCE: '/performance',

  // Rebalance routes
  REBALANCE: '/rebalance',
  REBALANCE_DETAILS: '/rebalance/:id',

  // Goals routes
  GOALS: '/goals',
  GOAL_DETAILS: '/goals/:id',
  CREATE_GOAL: '/goals/create',
  EDIT_GOAL: '/goals/:id/edit',

  // Planning routes
  PLANNING: '/planning',
  SIP_PLAN: '/planning/sip',
  LUMPSUM_PLAN: '/planning/lumpsum',

  // User routes
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',

  // Admin routes
  ADMIN_DASHBOARD: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_USER_DETAILS: '/admin/users/:id',
  ADMIN_SYSTEM_MONITORING: '/admin/monitoring',
  ADMIN_DATA_MANAGEMENT: '/admin/data',
  ADMIN_NOTIFICATION_MANAGEMENT: '/admin/notifications',
};

// Helper function to replace route params
export const replaceRouteParams = (route: string, params: Record<string, string | number>): string => {
  let result = route;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`:${key}`, String(value));
  });
  return result;
};