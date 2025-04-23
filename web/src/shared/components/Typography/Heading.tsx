import React from 'react';
import classNames from 'classnames';
import { HeadingProps } from './Typography.types';

const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  className = '',
  weight = 'bold',
  ...rest
}) => {
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const sizeClasses = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  const classes = classNames(
    sizeClasses[level],
    weightClasses[weight],
    'text-gray-900 dark:text-white',
    className
  );

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Heading;