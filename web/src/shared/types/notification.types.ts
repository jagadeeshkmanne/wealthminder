// src/shared/types/notification.types.ts
export enum NotificationType {
  REBALANCE_ALERT = 'rebalance_alert',
  GOAL_MILESTONE = 'goal_milestone',
  PORTFOLIO_SHARED = 'portfolio_shared',
  PERFORMANCE_REPORT = 'performance_report',
  SYSTEM_ANNOUNCEMENT = 'system_announcement',
  NAV_UPDATE_FAILURE = 'nav_update_failure',
  TRANSACTION_CONFIRMATION = 'transaction_confirmation',
  SIP_EXECUTION = 'sip_execution',
}

export enum NotificationPriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  priority: NotificationPriority;
  isRead: boolean;
  data?: Record<string, any>;
  createdAt: string;
  expiresAt?: string;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  label: string;
  url: string;
  type: 'primary' | 'secondary';
}

export interface NotificationSettings {
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  notificationPreferences: {
    [key in NotificationType]: {
      enabled: boolean;
      emailEnabled: boolean;
      pushEnabled: boolean;
    };
  };
}

export interface NotificationFilters {
  type?: NotificationType[];
  priority?: NotificationPriority[];
  isRead?: boolean;
  dateRange?: DateRange;
}