/**
 * Number utility functions for the WealthMinder application
 */

/**
 * Format a number as currency
 * @param value Number to format
 * @param currency Currency code (default: INR)
 * @param locale Locale for formatting (default: en-IN)
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number,
  currency = 'INR',
  locale = 'en-IN'
): string => {
  if (isNaN(value)) return '';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Format a number as percentage
 * @param value Number to format (0.1 = 10%)
 * @param decimalPoints Number of decimal points
 * @param locale Locale for formatting
 * @returns Formatted percentage string
 */
export const formatPercentage = (
  value: number,
  decimalPoints = 2,
  locale = 'en-IN'
): string => {
  if (isNaN(value)) return '';

  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints
  }).format(value);
};

/**
 * Format a number with thousand separators
 * @param value Number to format
 * @param decimalPoints Number of decimal points
 * @param locale Locale for formatting
 * @returns Formatted number string
 */
export const formatNumber = (
  value: number,
  decimalPoints = 2,
  locale = 'en-IN'
): string => {
  if (isNaN(value)) return '';

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints
  }).format(value);
};

/**
 * Calculate the XIRR (Extended Internal Rate of Return)
 * Basic implementation - for production, use a more robust financial library
 * @param cashflows Array of cashflow objects with amount and date
 * @returns XIRR value as a decimal (multiply by 100 for percentage)
 */
export const calculateXIRR = (cashflows: Array<{ amount: number; date: Date }>): number => {
  if (!cashflows.length) return 0;

  // Sort cashflows by date
  const sortedCashflows = [...cashflows].sort((a, b) => a.date.getTime() - b.date.getTime());

  // Basic XIRR implementation
  // This is a simplification. In production, use a financial library for accuracy
  const guess = 0.1; // Initial guess of 10%
  const maxIterations = 100;
  const tolerance = 0.0001;

  let rate = guess;

  // Newton-Raphson method to approximate XIRR
  for (let i = 0; i < maxIterations; i++) {
    let f = 0;
    let df = 0;

    for (let j = 0; j < sortedCashflows.length; j++) {
      const dt = (sortedCashflows[j].date.getTime() - sortedCashflows[0].date.getTime()) / (365 * 24 * 60 * 60 * 1000);
      const factor = Math.pow(1 + rate, dt);
      f += sortedCashflows[j].amount / factor;
      df += -dt * sortedCashflows[j].amount / Math.pow(factor, 2);
    }

    // Check if we've converged
    if (Math.abs(f) < tolerance) {
      return rate;
    }

    // Update rate
    rate = rate - f / df;

    // Check if rate is NaN or not changing
    if (isNaN(rate) || !isFinite(rate)) {
      return 0;
    }
  }

  return rate;
};

/**
 * Calculate Compound Annual Growth Rate (CAGR)
 * @param initialValue Initial investment value
 * @param finalValue Final investment value
 * @param years Number of years
 * @returns CAGR as a decimal (multiply by 100 for percentage)
 */
export const calculateCAGR = (
  initialValue: number,
  finalValue: number,
  years: number
): number => {
  if (initialValue <= 0 || years <= 0) return 0;

  return Math.pow(finalValue / initialValue, 1 / years) - 1;
};

/**
 * Format large numbers as compact (e.g., 1.2K, 1.5M)
 * @param value Number to format
 * @param locale Locale for formatting
 * @returns Formatted compact number string
 */
export const formatCompactNumber = (value: number, locale = 'en-IN'): string => {
  if (isNaN(value)) return '';

  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(value);
};