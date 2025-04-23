export interface RouteConfig {
  path: string;
  name: string;
  icon?: string;
  isPublic?: boolean;
  hideFromNav?: boolean;
  adminOnly?: boolean;
}

export const routesConfig = {
  // Auth Routes
  auth: {
    login: {
      path: '/login',
      name: 'Login',
      isPublic: true,
      hideFromNav: true
    },
    register: {
      path: '/register',
      name: 'Register',
      isPublic: true,
      hideFromNav: true
    },
    resetPassword: {
      path: '/reset-password',
      name: 'Reset Password',
      isPublic: true,
      hideFromNav: true
    },
    verifyEmail: {
      path: '/verify-email',
      name: 'Verify Email',
      isPublic: true,
      hideFromNav: true
    }
  },

  // Main Routes
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard'
  },

  // Portfolio Routes
  portfolio: {
    list: {
      path: '/portfolios',
      name: 'Portfolios',
      icon: 'portfolio'
    },
    shared: {
      path: '/portfolios/shared',
      name: 'Shared Portfolios',
      hideFromNav: true
    },
    create: {
      path: '/portfolios/create',
      name: 'Create Portfolio',
      hideFromNav: true
    },
    details: {
      path: '/portfolios/:id',
      name: 'Portfolio Details',
      hideFromNav: true
    },
    edit: {
      path: '/portfolios/:id/edit',
      name: 'Edit Portfolio',
      hideFromNav: true
    }
  },

  // Investment Routes
  investment: {
    list: {
      path: '/funds',
      name: 'Funds',
      icon: 'investment'
    },
    details: {
      path: '/funds/:id',
      name: 'Fund Details',
      hideFromNav: true
    },
    add: {
      path: '/funds/add',
      name: 'Add Fund',
      hideFromNav: true
    },
    edit: {
      path: '/funds/:id/edit',
      name: 'Edit Fund',
      hideFromNav: true
    }
  },

  // Transaction Routes
  transaction: {
    list: {
      path: '/transactions',
      name: 'Transactions',
      icon: 'transaction'
    },
    add: {
      path: '/transactions/add',
      name: 'Add Transaction',
      hideFromNav: true
    },
    edit: {
      path: '/transactions/:id/edit',
      name: 'Edit Transaction',
      hideFromNav: true
    }
  },

  // Performance Routes
  performance: {
    dashboard: {
      path: '/performance',
      name: 'Performance',
      icon: 'performance'
    }
  },

  // Rebalance Routes
  rebalance: {
    list: {
      path: '/rebalance',
      name: 'Rebalance',
      icon: 'rebalance'
    },
    details: {
      path: '/rebalance/:id',
      name: 'Rebalance Details',
      hideFromNav: true
    }
  },

  // Goals Routes
  goals: {
    list: {
      path: '/goals',
      name: 'Goals',
      icon: 'goals'
    },
    details: {
      path: '/goals/:id',
      name: 'Goal Details',
      hideFromNav: true
    },
    create: {
      path: '/goals/create',
      name: 'Create Goal',
      hideFromNav: true
    },
    edit: {
      path: '/goals/:id/edit',
      name: 'Edit Goal',
      hideFromNav: true
    }
  },

  // Planning Routes
  planning: {
    dashboard: {
      path: '/planning',
      name: 'Planning',
      icon: 'planning'
    },
    sip: {
      path: '/planning/sip',
      name: 'SIP Plan',
      hideFromNav: true
    },
    lumpsum: {
      path: '/planning/lumpsum',
      name: 'Lumpsum Plan',
      hideFromNav: true
    }
  },

  // User Routes
  user: {
    profile: {
      path: '/profile',
      name: 'Profile',
      icon: 'user'
    },
    settings: {
      path: '/settings',
      name: 'Settings',
      icon: 'settings'
    }
  },

  // Notification Routes
  notification: {
    list: {
      path: '/notifications',
      name: 'Notifications',
      icon: 'notification'
    }
  },

  // Admin Routes
  admin: {
    dashboard: {
      path: '/admin/dashboard',
      name: 'Admin Dashboard',
      icon: 'admin',
      adminOnly: true
    },
    users: {
      path: '/admin/users',
      name: 'User Management',
      icon: 'users',
      adminOnly: true
    },
    system: {
      path: '/admin/system',
      name: 'System Monitoring',
      icon: 'system',
      adminOnly: true
    },
    data: {
      path: '/admin/data',
      name: 'Data Management',
      icon: 'data',
      adminOnly: true
    },
    notifications: {
      path: '/admin/notifications',
      name: 'Notification Management',
      icon: 'notifications',
      adminOnly: true
    }
  }
};