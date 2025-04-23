import React, { createContext, useContext, useMemo, useState } from 'react';
import { TabsProps, TabsContextProps } from './Tabs.types';

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export const useTabsContext = (): TabsContextProps => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
};

const Tabs: React.FC<TabsProps> = ({
  children,
  defaultIndex = 0,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  const value = useMemo(() => {
    return {
      activeIndex,
      setActiveIndex: handleTabChange,
    };
  }, [activeIndex]);

  // Extract tabs and panels from children
  const tabs: React.ReactElement[] = [];
  const panels: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Tab) {
        tabs.push(child);
      } else if (child.type === TabPanel) {
        panels.push(child);
      }
    }
  });

  const variantClasses = {
    default: 'border-b border-gray-200 dark:border-gray-700',
    pills: '',
    underline: 'border-b border-gray-200 dark:border-gray-700',
  };

  return (
    <TabsContext.Provider value={value}>
      <div className={`w-full ${className}`}>
        <div className={`flex ${variantClasses[variant]}`}>
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;

            const defaultStyles = isActive
              ? 'border-primary-500 text-primary-600 dark:text-primary-400'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300';

            const pillStyles = isActive
              ? 'bg-primary-500 text-white'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300';

            const underlineStyles = isActive
              ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400'
              : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300';

            const variantTabClasses = {
              default: `${defaultStyles} py-4 px-1 border-b-2 font-medium text-sm mr-8`,
              pills: `${pillStyles} py-2 px-4 rounded-md font-medium text-sm mr-2`,
              underline: `${underlineStyles} py-4 px-1 font-medium text-sm mr-8`,
            };

            return React.cloneElement(tab, {
              key: index,
              index,
              isActive,
              className: variantTabClasses[variant],
            });
          })}
        </div>
        <div className="mt-4">
          {panels[activeIndex]}
        </div>
      </div>
    </TabsContext.Provider>
  );
};