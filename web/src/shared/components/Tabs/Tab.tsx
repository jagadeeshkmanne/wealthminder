import React from 'react';
import { TabProps } from './Tabs.types';

interface InternalTabProps extends TabProps {
  index?: number;
  isActive?: boolean;
}

const Tab: React.FC<InternalTabProps> = ({
  children,
  label,
  disabled = false,
  className = '',
  index,
  isActive,
}) => {
  const { setActiveIndex } = useTabsContext();

  const handleClick = () => {
    if (!disabled && typeof index === 'number') {
      setActiveIndex(index);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`${className} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
    >
      {label || children}
    </button>
  );
};
