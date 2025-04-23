import React from 'react';
import { FooterProps } from './Layout.types';

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} WealthMinder. All rights reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;