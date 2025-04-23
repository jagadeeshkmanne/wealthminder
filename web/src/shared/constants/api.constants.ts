// src/shared/constants/api.constants.ts
export const API_BASE_URL = 'https://api.wealthminder.app';
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile/update',
    UPDATE_PASSWORD: '/user/password/update',
    PREFERENCES: '/user/preferences',
    UPDATE_PREFERENCES: '/user/preferences/update',
  },
  PORTFOLIO: {
    LIST: '/portfolios',
    DETAILS: '/portfolios/:id',
    CREATE: '/portfolios',
    UPDATE: '/portfolios/:id',
    DELETE: '/portfolios/:id',
    SHARE: '/portfolios/:id/share',
    SHARED_WITH_ME: '/portfolios/shared',
  },
  FUND: {
    SEARCH: '/funds/search',
    DETAILS: '/funds/:id',
    NAV_HISTORY: '/funds/:id/nav-history',
  },
  TRANSACTION: {
    LIST: '/transactions',
    DETAILS: '/transactions/:id',
    CREATE: '/transactions',
    UPDATE: '/transactions/:id',
    DELETE: '/transactions/:id',
  },
  REBALANCE: {
    CHECK: '/rebalance/check',
    DETAILS: '/rebalance/:id',
    HISTORY: '/rebalance/history',
    EXECUTE: '/rebalance/execute',
  },
  GOALS: {
    LIST: '/goals',
    DETAILS: '/goals/:id',
    CREATE: '/goals',
    UPDATE: '/goals/:id',
    DELETE: '/goals/:id',
    PROGRESS: '/goals/:id/progress',
  },
  PLANNING: {
    SIP_LIST: '/planning/sip',
    SIP_CREATE: '/planning/sip',
    SIP_UPDATE: '/planning/sip/:id',
    SIP_DELETE: '/planning/sip/:id',
    LUMPSUM_LIST: '/planning/lumpsum',
    LUMPSUM_CREATE: '/planning/lumpsum',
    LUMPSUM_EXECUTE: '/planning/lumpsum/:id/execute',
    LUMPSUM_DELETE: '/planning/lumpsum/:id',
  },
  PERFORMANCE: {
    PORTFOLIO: '/performance/portfolio/:id',
    COMPARE: '/performance/compare',
    EXPORT: '/performance/export',
  },
  NOTIFICATION: {
    LIST: '/notifications',
    MARK_READ: '/notifications/:id/read',
    MARK_ALL_READ: '/notifications/read-all',
    SETTINGS: '/notifications/settings',
  },
  ADMIN: {
    USERS: '/admin/users',
    USER_DETAILS: '/admin/users/:id',
    UPDATE_USER: '/admin/users/:id',
    SYSTEM_STATS: '/admin/stats',
    DATA_SYNC: '/admin/data/sync',
  },
};

export const AMFI_API_URL = 'https://www.amfiindia.com/spages/NAVAll.txt';
export const REQUEST_TIMEOUT = 30000; // 30 seconds

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};