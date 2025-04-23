// src/core/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '@/core/providers/ThemeProvider';
import { ThemeContextType } from '@/shared/types';

/**
 * Custom hook to access theme functionality
 * This is a wrapper around the useContext hook for ThemeContext
 * to keep code more modular and maintainable
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export default useTheme;