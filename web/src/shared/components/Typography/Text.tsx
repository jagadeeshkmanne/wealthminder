import React from 'react';
import classNames from 'classnames';
import { TextProps } from './Typography.types';

const Text: React.FC<TextProps> = ({
  children,
  size = 'base',
  weight = 'normal',
  className = '',
  muted = false,
  as: Component = 'p',
  ...rest
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const classes = classNames(
    sizeClasses[size],
    weightClasses[weight],
    muted ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-200',
    className
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Text;