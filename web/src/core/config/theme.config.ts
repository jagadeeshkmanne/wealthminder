// Theme configuration for the application
export const themeConfig = {
  // Color palette
  colors: {
    light: {
      primary: {
        main: '#3b82f6', // blue-500
        light: '#93c5fd', // blue-300
        dark: '#1d4ed8', // blue-700
        contrast: '#ffffff'
      },
      secondary: {
        main: '#64748b', // slate-500
        light: '#94a3b8', // slate-400
        dark: '#334155', // slate-700
        contrast: '#ffffff'
      },
      background: {
        default: '#f8fafc', // slate-50
        paper: '#ffffff',
        contrast: '#0f172a' // slate-900
      },
      text: {
        primary: '#0f172a', // slate-900
        secondary: '#334155', // slate-700
        disabled: '#94a3b8', // slate-400
        hint: '#64748b' // slate-500
      },
      error: {
        main: '#ef4444', // red-500
        light: '#fca5a5', // red-300
        dark: '#b91c1c', // red-700
        contrast: '#ffffff'
      },
      warning: {
        main: '#f59e0b', // amber-500
        light: '#fcd34d', // amber-300
        dark: '#b45309', // amber-700
        contrast: '#ffffff'
      },
      info: {
        main: '#06b6d4', // cyan-500
        light: '#67e8f9', // cyan-300
        dark: '#0e7490', // cyan-700
        contrast: '#ffffff'
      },
      success: {
        main: '#10b981', // emerald-500
        light: '#6ee7b7', // emerald-300
        dark: '#047857', // emerald-700
        contrast: '#ffffff'
      },
      divider: '#e2e8f0' // slate-200
    },
    dark: {
      primary: {
        main: '#3b82f6', // blue-500
        light: '#93c5fd', // blue-300
        dark: '#1d4ed8', // blue-700
        contrast: '#ffffff'
      },
      secondary: {
        main: '#94a3b8', // slate-400
        light: '#cbd5e1', // slate-300
        dark: '#64748b', // slate-500
        contrast: '#0f172a' // slate-900
      },
      background: {
        default: '#0f172a', // slate-900
        paper: '#1e293b', // slate-800
        contrast: '#f8fafc' // slate-50
      },
      text: {
        primary: '#f8fafc', // slate-50
        secondary: '#e2e8f0', // slate-200
        disabled: '#64748b', // slate-500
        hint: '#94a3b8' // slate-400
      },
      error: {
        main: '#ef4444', // red-500
        light: '#fca5a5', // red-300
        dark: '#b91c1c', // red-700
        contrast: '#ffffff'
      },
      warning: {
        main: '#f59e0b', // amber-500
        light: '#fcd34d', // amber-300
        dark: '#b45309', // amber-700
        contrast: '#ffffff'
      },
      info: {
        main: '#06b6d4', // cyan-500
        light: '#67e8f9', // cyan-300
        dark: '#0e7490', // cyan-700
        contrast: '#ffffff'
      },
      success: {
        main: '#10b981', // emerald-500
        light: '#6ee7b7', // emerald-300
        dark: '#047857', // emerald-700
        contrast: '#ffffff'
      },
      divider: '#475569' // slate-600
    }
  },

  // Font settings
  typography: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ].join(','),
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ].join(','),
      mono: [
        'JetBrains Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ].join(',')
    },
    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
      '8xl': '6rem', // 96px
      '9xl': '8rem' // 128px
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    }
  },

  // Layout settings
  layout: {
    headerHeight: '64px',
    sidebarWidth: '256px',
    sidebarCollapsedWidth: '80px',
    footerHeight: '48px',
    contentMaxWidth: '1280px',
    borderRadius: {
      none: '0',
      sm: '0.125rem', // 2px
      DEFAULT: '0.25rem', // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1rem', // 16px
      '3xl': '1.5rem', // 24px
      full: '9999px'
    },
    spacing: {
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '1rem', // 16px
      lg: '1.5rem', // 24px
      xl: '2rem', // 32px
      '2xl': '3rem', // 48px
      '3xl': '4rem' // 64px
    }
  },

  // Animation settings
  animation: {
    durations: {
      fastest: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '400ms',
      slowest: '500ms'
    },
    easings: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  // Z-index levels
  zIndex: {
    negative: -1,
    zero: 0,
    low: 10,
    medium: 20,
    high: 30,
    header: 100,
    sidebar: 200,
    modal: 1000,
    popover: 1100,
    tooltip: 1200,
    toast: 1300,
    overlay: 1400
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(59, 130, 246, 0.5)'
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Theme transition
  themeTransition: 'all 0.2s ease-in-out',

  // Chart colors for data visualization
  chartColors: [
    '#3b82f6', // blue-500
    '#ef4444', // red-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#8b5cf6', // violet-500
    '#ec4899', // pink-500
    '#06b6d4', // cyan-500
    '#14b8a6', // teal-500
    '#f97316', // orange-500
    '#6366f1'  // indigo-500
  ]
};

export default themeConfig;