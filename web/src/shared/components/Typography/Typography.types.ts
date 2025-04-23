import { HTMLAttributes, ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level: HeadingLevel;
  className?: string;
  weight?: TextWeight;
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  className?: string;
  muted?: boolean;
  as?: 'p' | 'span' | 'div';
}