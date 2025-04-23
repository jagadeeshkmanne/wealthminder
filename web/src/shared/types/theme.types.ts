// src/shared/types/theme.types.ts

/**
 * Complete theme interface representing all theme-related properties
 */
export interface Theme {
  name: 'light' | 'dark';
  colors: ThemeColors;
  fonts: ThemeFonts;
  breakpoints: ThemeBreakpoints;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  zIndex: ThemeZIndex;
}

/**
 * Color definitions for the theme
 */
export interface ThemeColors {
  // Primary and secondary brand colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;

  // Interface colors
  background: string;
  backgroundAlt: string;
  surface: string;
  card: string;
  cardHover: string;
  border: string;
  borderFocus: string;
  divider: string;

  // Text colors
  text: string;
  textSecondary: string;
  textDisabled: string;
  textInverse: string;
  heading: string;
  link: string;
  linkHover: string;

  // Status colors
  success: string;
  successLight: string;
  error: string;
  errorLight: string;
  warning: string;
  warningLight: string;
  info: string;
  infoLight: string;

  // Data visualization colors
  chart: string[];
  positive: string;
  negative: string;
  neutral: string;
  highlight: string;

  // Interactive elements
  focus: string;
  hover: string;
  active: string;
  disabled: string;

  // Grayscale palette
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;

  // Overlay and backdrop
  overlay: string;
  scrim: string;
  backdropBlur: string;
}

/**
 * Typography definitions
 */
export interface ThemeFonts {
  base: string;
  heading: string;
  mono: string;

  // Font sizes
  sizes: {
    xs: string;      // 12px
    sm: string;      // 14px
    md: string;      // 16px (base)
    lg: string;      // 18px
    xl: string;      // 20px
    '2xl': string;   // 24px
    '3xl': string;   // 30px
    '4xl': string;   // 36px
    '5xl': string;   // 48px
    '6xl': string;   // 60px
  };

  // Font weights
  weights: {
    light: number;    // 300
    normal: number;   // 400
    medium: number;   // 500
    semibold: number; // 600
    bold: number;     // 700
  };

  // Line heights
  lineHeights: {
    none: number;     // 1
    tight: number;    // 1.25
    snug: number;     // 1.375
    normal: number;   // 1.5
    relaxed: number;  // 1.625
    loose: number;    // 2
  };

  // Letter spacing
  letterSpacing: {
    tighter: string;  // -0.05em
    tight: string;    // -0.025em
    normal: string;   // 0em
    wide: string;     // 0.025em
    wider: string;    // 0.05em
    widest: string;   // 0.1em
  };
}

/**
 * Responsive breakpoints
 */
export interface ThemeBreakpoints {
  xs: string;        // 0px
  sm: string;        // 640px
  md: string;        // 768px
  lg: string;        // 1024px
  xl: string;        // 1280px
  '2xl': string;     // 1536px
}

/**
 * Spacing values
 */
export interface ThemeSpacing {
  0: string;         // 0px
  0.5: string;       // 2px
  1: string;         // 4px
  1.5: string;       // 6px
  2: string;         // 8px
  2.5: string;       // 10px
  3: string;         // 12px
  3.5: string;       // 14px
  4: string;         // 16px
  5: string;         // 20px
  6: string;         // 24px
  7: string;         // 28px
  8: string;         // 32px
  9: string;         // 36px
  10: string;        // 40px
  11: string;        // 44px
  12: string;        // 48px
  14: string;        // 56px
  16: string;        // 64px
  20: string;        // 80px
  24: string;        // 96px
  28: string;        // 112px
  32: string;        // 128px
  36: string;        // 144px
  40: string;        // 160px
  44: string;        // 176px
  48: string;        // 192px
  52: string;        // 208px
  56: string;        // 224px
  60: string;        // 240px
  64: string;        // 256px
  72: string;        // 288px
  80: string;        // 320px
  96: string;        // 384px
}

/**
 * Border radius values
 */
export interface ThemeBorderRadius {
  none: string;      // 0
  sm: string;        // 2px
  md: string;        // 4px
  lg: string;        // 8px
  xl: string;        // 12px
  '2xl': string;     // 16px
  '3xl': string;     // 24px
  full: string;      // 9999px
}

/**
 * Box shadow values
 */
export interface ThemeShadows {
  none: string;      // none
  xs: string;        // 0 1px 2px rgba(0, 0, 0, 0.05)
  sm: string;        // 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)
  md: string;        // 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  lg: string;        // 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
  xl: string;        // 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
  '2xl': string;     // 0 25px 50px -12px rgba(0, 0, 0, 0.25)
  inner: string;     // inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)
  outline: string;   // 0 0 0 3px rgba(59, 130, 246, 0.5)

  // Directional shadows
  top: string;       // 0 -6px 10px -5px rgba(0, 0, 0, 0.1)
  right: string;     // 6px 0 10px -5px rgba(0, 0, 0, 0.1)
  bottom: string;    // 0 6px 10px -5px rgba(0, 0, 0, 0.1)
  left: string;      // -6px 0 10px -5px rgba(0, 0, 0, 0.1)
}

/**
 * Animation and transition properties
 */
export interface ThemeTransitions {
  duration: {
    fastest: string; // 75ms
    fast: string;    // 150ms
    normal: string;  // 300ms
    slow: string;    // 500ms
    slowest: string; // 700ms
  };
  timing: {
    ease: string;           // cubic-bezier(0.25, 0.1, 0.25, 1.0)
    easeIn: string;         // cubic-bezier(0.42, 0, 1.0, 1.0)
    easeOut: string;        // cubic-bezier(0, 0, 0.58, 1.0)
    easeInOut: string;      // cubic-bezier(0.42, 0, 0.58, 1.0)
    easeInCubic: string;    // cubic-bezier(0.55, 0.055, 0.675, 0.19)
    easeOutCubic: string;   // cubic-bezier(0.215, 0.61, 0.355, 1)
    easeInOutCubic: string; // cubic-bezier(0.645, 0.045, 0.355, 1)
  };
  properties: {
    common: string[];       // all common CSS properties to transition
    colors: string[];       // color-related properties
    transform: string[];    // transform-related properties
  };
}

/**
 * Z-index levels for layering components
 */
export interface ThemeZIndex {
  base: number;      // 0
  below: number;     // -1
  dropdown: number;  // 100
  sticky: number;    // 200
  fixed: number;     // 300
  drawer: number;    // 400
  modal: number;     // 500
  popover: number;   // 600
  tooltip: number;   // 700
  toast: number;     // 800
  overlay: number;   // 900
  max: number;       // 9999
}

/**
 * Theme context type for React context
 */
export interface ThemeContextType {
  theme: Theme;
  currentTheme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleTheme: () => void;
  isThemeLoaded: boolean;
}

/**
 * Light theme colors
 */
export const LIGHT_THEME_COLORS: ThemeColors = {
  primary: '#3b82f6',
  primaryLight: '#93c5fd',
  primaryDark: '#1d4ed8',
  secondary: '#64748b',
  secondaryLight: '#94a3b8',
  secondaryDark: '#334155',

  background: '#ffffff',
  backgroundAlt: '#f9fafb',
  surface: '#f3f4f6',
  card: '#ffffff',
  cardHover: '#f3f4f6',
  border: '#e5e7eb',
  borderFocus: '#3b82f6',
  divider: '#e5e7eb',

  text: '#1e293b',
  textSecondary: '#64748b',
  textDisabled: '#9ca3af',
  textInverse: '#ffffff',
  heading: '#0f172a',
  link: '#2563eb',
  linkHover: '#1d4ed8',

  success: '#10b981',
  successLight: '#d1fae5',
  error: '#ef4444',
  errorLight: '#fee2e2',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  info: '#3b82f6',
  infoLight: '#dbeafe',

  chart: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1'],
  positive: '#10b981',
  negative: '#ef4444',
  neutral: '#64748b',
  highlight: '#fef3c7',

  focus: 'rgba(59, 130, 246, 0.5)',
  hover: 'rgba(0, 0, 0, 0.05)',
  active: 'rgba(59, 130, 246, 0.1)',
  disabled: 'rgba(0, 0, 0, 0.1)',

  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',

  overlay: 'rgba(0, 0, 0, 0.4)',
  scrim: 'rgba(0, 0, 0, 0.2)',
  backdropBlur: 'rgba(255, 255, 255, 0.8)',
};

/**
 * Dark theme colors
 */
export const DARK_THEME_COLORS: ThemeColors = {
  primary: '#3b82f6',
  primaryLight: '#60a5fa',
  primaryDark: '#2563eb',
  secondary: '#64748b',
  secondaryLight: '#94a3b8',
  secondaryDark: '#475569',

  background: '#0f172a',
  backgroundAlt: '#1e293b',
  surface: '#1e293b',
  card: '#1e293b',
  cardHover: '#334155',
  border: '#334155',
  borderFocus: '#60a5fa',
  divider: '#334155',

  text: '#f8fafc',
  textSecondary: '#cbd5e1',
  textDisabled: '#64748b',
  textInverse: '#0f172a',
  heading: '#f1f5f9',
  link: '#60a5fa',
  linkHover: '#93c5fd',

  success: '#10b981',
  successLight: '#064e3b',
  error: '#ef4444',
  errorLight: '#7f1d1d',
  warning: '#f59e0b',
  warningLight: '#78350f',
  info: '#3b82f6',
  infoLight: '#1e3a8a',

  chart: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1'],
  positive: '#10b981',
  negative: '#ef4444',
  neutral: '#94a3b8',
  highlight: '#854d0e',

  focus: 'rgba(59, 130, 246, 0.5)',
  hover: 'rgba(255, 255, 255, 0.05)',
  active: 'rgba(59, 130, 246, 0.2)',
  disabled: 'rgba(255, 255, 255, 0.1)',

  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',

  overlay: 'rgba(0, 0, 0, 0.7)',
  scrim: 'rgba(0, 0, 0, 0.6)',
  backdropBlur: 'rgba(15, 23, 42, 0.8)',
};

/**
 * Common font configuration
 */
export const DEFAULT_THEME_FONTS: ThemeFonts = {
  base: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  heading: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    md: '1rem',         // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },

  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

/**
 * Common breakpoints configuration
 */
export const DEFAULT_THEME_BREAKPOINTS: ThemeBreakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * Common spacing configuration
 */
export const DEFAULT_THEME_SPACING: ThemeSpacing = {
  0: '0px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
};

/**
 * Common border radius configuration
 */
export const DEFAULT_THEME_BORDER_RADIUS: ThemeBorderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.25rem',    // 4px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

/**
 * Common shadows configuration
 */
export const DEFAULT_THEME_SHADOWS: ThemeShadows = {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(59, 130, 246, 0.5)',

  top: '0 -6px 10px -5px rgba(0, 0, 0, 0.1)',
  right: '6px 0 10px -5px rgba(0, 0, 0, 0.1)',
  bottom: '0 6px 10px -5px rgba(0, 0, 0, 0.1)',
  left: '-6px 0 10px -5px rgba(0, 0, 0, 0.1)',
};

/**
 * Common transitions configuration
 */
export const DEFAULT_THEME_TRANSITIONS: ThemeTransitions = {
  duration: {
    fastest: '75ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slowest: '700ms',
  },
  timing: {
    ease: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    easeIn: 'cubic-bezier(0.42, 0, 1.0, 1.0)',
    easeOut: 'cubic-bezier(0, 0, 0.58, 1.0)',
    easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1.0)',
    easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  properties: {
    common: ['background-color', 'border-color', 'color', 'box-shadow', 'opacity', 'transform'],
    colors: ['background-color', 'border-color', 'color', 'fill', 'stroke'],
    transform: ['transform'],
  },
};

/**
 * Common z-index configuration
 */
export const DEFAULT_THEME_Z_INDEX: ThemeZIndex = {
  base: 0,
  below: -1,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  drawer: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  toast: 800,
  overlay: 900,
  max: 9999,
};

/**
 * Default light theme
 */
export const DEFAULT_LIGHT_THEME: Theme = {
  name: 'light',
  colors: LIGHT_THEME_COLORS,
  fonts: DEFAULT_THEME_FONTS,
  breakpoints: DEFAULT_THEME_BREAKPOINTS,
  spacing: DEFAULT_THEME_SPACING,
  borderRadius: DEFAULT_THEME_BORDER_RADIUS,
  shadows: DEFAULT_THEME_SHADOWS,
  transitions: DEFAULT_THEME_TRANSITIONS,
  zIndex: DEFAULT_THEME_Z_INDEX,
};

/**
 * Default dark theme
 */
export const DEFAULT_DARK_THEME: Theme = {
  name: 'dark',
  colors: DARK_THEME_COLORS,
  fonts: DEFAULT_THEME_FONTS,
  breakpoints: DEFAULT_THEME_BREAKPOINTS,
  spacing: DEFAULT_THEME_SPACING,
  borderRadius: DEFAULT_THEME_BORDER_RADIUS,
  shadows: DEFAULT_THEME_SHADOWS,
  transitions: DEFAULT_THEME_TRANSITIONS,
  zIndex: DEFAULT_THEME_Z_INDEX,
};

/**
 * Component-specific theme definitions
 * This is optional but can be useful for more detailed component theming
 */
export interface ComponentThemes {
  button: ButtonTheme;
  card: CardTheme;
  input: InputTheme;
  modal: ModalTheme;
  // Add other component-specific themes as needed
}

export interface ButtonTheme {
  primary: ButtonVariantTheme;
  secondary: ButtonVariantTheme;
  ghost: ButtonVariantTheme;
  danger: ButtonVariantTheme;
  success: ButtonVariantTheme;
  link: ButtonLinkTheme;
  sizes: {
    xs: ButtonSizeTheme;
    sm: ButtonSizeTheme;
    md: ButtonSizeTheme;
    lg: ButtonSizeTheme;
    xl: ButtonSizeTheme;
  };
}

export interface ButtonVariantTheme {
  bg: string;
  text: string;
  border: string;
  hoverBg: string;
  hoverText: string;
  hoverBorder: string;
  activeBg: string;
  activeText: string;
  activeBorder: string;
  disabledBg: string;
  disabledText: string;
  disabledBorder: string;
}

export interface ButtonLinkTheme {
  text: string;
  hoverText: string;
  activeText: string;
  disabledText: string;
}

export interface ButtonSizeTheme {
  padding: string;
  fontSize: string;
  borderRadius: string;
}

export interface CardTheme {
  bg: string;
  border: string;
  borderRadius: string;
  shadow: string;
  padding: string;
  hover: {
    bg: string;
    border: string;
    shadow: string;
  };
}

export interface InputTheme {
  bg: string;
  text: string;
  border: string;
  placeholderColor: string;
  focusBorder: string;
  focusRing: string;
  errorBorder: string;
  errorBg: string;
  errorText: string;
  disabledBg: string;
  disabledText: string;
  disabledBorder: string;
  sizes: {
    sm: InputSizeTheme;
    md: InputSizeTheme;
    lg: InputSizeTheme;
  };
}

export interface InputSizeTheme {
  height: string;
  padding: string;
  fontSize: string;
  borderRadius: string;
}

export interface ModalTheme {
  bg: string;
  backdropBg: string;
  border: string;
  shadow: string;
  borderRadius: string;
  padding: string;
  header: {
    bg: string;
    text: string;
    border: string;
    padding: string;
  };
  body: {
    bg: string;
    text: string;
    padding: string;
  };
  footer: {
    bg: string;
    text: string;
    border: string;
    padding: string;
  };
}