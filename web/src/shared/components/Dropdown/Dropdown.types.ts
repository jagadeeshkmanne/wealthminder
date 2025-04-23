import { ReactNode } from 'react';

export interface DropdownItem {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownDivider {
  type: 'divider';
}

export interface DropdownHeader {
  type: 'header';
  label: string;
}

export type DropdownItemType = DropdownItem | DropdownDivider | DropdownHeader;

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItemType[];
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  width?: number | string;
  className?: string;
}