import { ReactNode } from 'react';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface NotificationBaseProps {
  type?: NotificationType;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

export interface AlertProps extends NotificationBaseProps {
  showIcon?: boolean;
}

export interface ToastProps extends NotificationBaseProps {
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  showIcon?: boolean;
}