import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface MainLayoutProps {
  children: ReactNode;
}

export interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export interface HeaderProps {
  onToggleSidebar: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
}

export interface FooterProps {}