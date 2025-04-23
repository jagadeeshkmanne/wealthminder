// src/shared/constants/ui.constants.ts
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const Z_INDEX = {
  base: 0,
  overlay: 50,
  dropdown: 100,
  modal: 200,
  toast: 300,
};

export const PAGE_SIZES = [10, 20, 50, 100];

export const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';
export const DEFAULT_DATETIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';
export const DEFAULT_CURRENCY_FORMAT = 'INR';

export const DEFAULT_THEME = 'light';
export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_CURRENCY = 'INR';
export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
];

export const SUPPORTED_CURRENCIES = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
];

export const ANIMATION_DURATION = {
  short: 150,
  medium: 300,
  long: 500,
};

export const CHART_COLORS = [
  '#3b82f6', // primary blue
  '#ef4444', // red
  '#10b981', // green
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#14b8a6', // teal
  '#f97316', // orange
  '#6366f1', // indigo
];

export const GOAL_TYPES = [
  { id: 'retirement', label: 'Retirement' },
  { id: 'education', label: 'Education' },
  { id: 'home', label: 'Home Purchase' },
  { id: 'vehicle', label: 'Vehicle' },
  { id: 'vacation', label: 'Vacation' },
  { id: 'custom', label: 'Custom Goal' },
];

export const GOAL_PRIORITIES = [
  { id: 'high', label: 'High' },
  { id: 'medium', label: 'Medium' },
  { id: 'low', label: 'Low' },
];

export const RISK_PROFILES = [
  { id: 'conservative', label: 'Conservative' },
  { id: 'moderate', label: 'Moderate' },
  { id: 'aggressive', label: 'Aggressive' },
];

export const TRANSACTION_TYPES = [
  { id: 'BUY', label: 'Buy' },
  { id: 'SELL', label: 'Sell' },
];

export const TIME_PERIODS = [
  { id: '1D', label: '1 Day' },
  { id: '1W', label: '1 Week' },
  { id: '1M', label: '1 Month' },
  { id: '3M', label: '3 Months' },
  { id: '6M', label: '6 Months' },
  { id: '1Y', label: '1 Year' },
  { id: '3Y', label: '3 Years' },
  { id: '5Y', label: '5 Years' },
  { id: 'ALL', label: 'All Time' },
];