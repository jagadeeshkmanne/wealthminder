import { ReactNode } from 'react';

export interface TabsProps {
  children: ReactNode;
  defaultIndex?: number;
  onChange?: (index: number) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export interface TabProps {
  children: ReactNode;
  label: string;
  disabled?: boolean;
  className?: string;
}

export interface TabPanelProps {
  children: ReactNode;
  className?: string;
}

export interface TabsContextProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
