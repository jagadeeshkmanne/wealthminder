import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  titleAction?: ReactNode;
  footer?: ReactNode;
  noPadding?: boolean;
  bordered?: boolean;
  elevated?: boolean;
}