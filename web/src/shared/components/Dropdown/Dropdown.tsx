import React, { useEffect, useRef, useState } from 'react';
import { DropdownProps, DropdownItem, DropdownHeader, DropdownDivider } from './Dropdown.types';
import useClickOutside from '@/core/hooks/useClickOutside';

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  isOpen: controlledIsOpen,
  onOpenChange,
  placement = 'bottom-start',
  width,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(controlledIsOpen || false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle controlled component
  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  const handleOpen = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onOpenChange) {
      onOpenChange(newState);
    }
  };

  useClickOutside(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false);
      if (onOpenChange) {
        onOpenChange(false);
      }
    }
  });

  const placementClasses = {
    'bottom-start': 'origin-top-left left-0 top-full mt-1',
    'bottom-end': 'origin-top-right right-0 top-full mt-1',
    'top-start': 'origin-bottom-left left-0 bottom-full mb-1',
    'top-end': 'origin-bottom-right right-0 bottom-full mb-1',
  };

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;

    if (item.onClick) {
      item.onClick();
    }

    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  const isHeader = (item: any): item is DropdownHeader => {
    return item.type === 'header';
  };

  const isDivider = (item: any): item is DropdownDivider => {
    return item.type === 'divider';
  };

  const isDropdownItem = (item: any): item is DropdownItem => {
    return !isHeader(item) && !isDivider(item);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <div onClick={handleOpen}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute ${placementClasses[placement]} z-10 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none`}
          style={{ width: width }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => {
              if (isDivider(item)) {
                return <div key={index} className="border-t border-gray-200 dark:border-gray-700 my-1"></div>;
              }

              if (isHeader(item)) {
                return (
                  <div key={index} className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    {item.label}
                  </div>
                );
              }

              if (isDropdownItem(item)) {
                return (
                  <button
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className={`w-full text-left block px-4 py-2 text-sm ${
                      item.disabled
                        ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    role="menuitem"
                    disabled={item.disabled}
                  >
                    <div className="flex items-center">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                    </div>
                  </button>
                );
              }

              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;