import React from 'react';
import classNames from 'classnames';
import { SkeletonProps } from './Loader.types';

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius = '0.25rem',
  className = '',
  animate = true,
  count = 1,
  type = 'line',
}) => {
  const baseClasses = classNames(
    'bg-gray-200 dark:bg-gray-700',
    animate && 'animate-pulse',
    className
  );

  let style: React.CSSProperties = {
    borderRadius,
  };

  if (width) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }

  if (height) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  // Different skeleton types
  switch (type) {
    case 'circle':
      style = {
        ...style,
        borderRadius: '50%',
        width: width || '3rem',
        height: height || '3rem',
      };
      break;
    case 'rect':
      style = {
        ...style,
        width: width || '100%',
        height: height || '100px',
      };
      break;
    case 'line':
    default:
      style = {
        ...style,
        width: width || '100%',
        height: height || '1rem',
      };
  }

  // Render multiple skeletons
  if (count > 1) {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={classNames(baseClasses, 'mb-2 last:mb-0')}
            style={style}
          ></div>
        ))}
      </>
    );
  }

  return <div className={baseClasses} style={style}></div>;
};

export default Skeleton;