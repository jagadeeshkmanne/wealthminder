// src/shared/components/Card/Card.tsx
import React from 'react';
import classNames from 'classnames';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
  children,
  title,
  titleAction,
  footer,
  noPadding = false,
  bordered = false,
  elevated = false,
  className,
  ...rest
}) => {
  const cardClasses = classNames(
    'bg-white dark:bg-gray-800 rounded-lg overflow-hidden',
    bordered && 'border border-gray-200 dark:border-gray-700',
    elevated && 'shadow-md',
    className
  );

  const bodyClasses = classNames(
    'flex flex-col',
    !noPadding && 'p-4'
  );

  return (
    <div className={cardClasses} {...rest}>
      {title && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          {titleAction && (
            <div className="flex items-center">{titleAction}</div>
          )}
        </div>
      )}

      <div className={bodyClasses}>{children}</div>

      {footer && (
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;