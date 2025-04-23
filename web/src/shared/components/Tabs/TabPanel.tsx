import React from 'react';
import { TabPanelProps } from './Tabs.types';

const TabPanel: React.FC<TabPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={className} role="tabpanel">
      {children}
    </div>
  );
};
