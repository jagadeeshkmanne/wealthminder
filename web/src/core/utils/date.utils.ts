/**
 * Date utility functions for the WealthMinder application
 */

import { format, parse, differenceInDays, differenceInMonths, differenceInYears, addDays, addMonths, addYears } from 'date-fns';

/**
 * Format a date to display format
 * @param date Date to format
 * @param formatString Optional format string
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string | number, formatString = 'dd/MM/yyyy'): string => {
  if (!date) return '';

  const dateObj = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  return format(dateObj, formatString);
};

/**
 * Parse a string date into a Date object
 * @param dateString Date string to parse
 * @param formatString Format of the input date string
 * @returns Parsed Date object
 */
export const parseDate = (dateString: string, formatString = 'dd/MM/yyyy'): Date => {
  return parse(dateString, formatString, new Date());
};

/**
 * Calculate the duration between two dates
 * @param startDate Start date
 * @param endDate End date (defaults to current date)
 * @param unit Unit of time ('days', 'months', 'years')
 * @returns Duration in specified unit
 */
export const calculateDuration = (
  startDate: Date | string | number,
  endDate: Date | string | number = new Date(),
  unit: 'days' | 'months' | 'years' = 'days'
): number => {
  const start = typeof startDate === 'string' || typeof startDate === 'number'
    ? new Date(startDate)
    : startDate;

  const end = typeof endDate === 'string' || typeof endDate === 'number'
    ? new Date(endDate)
    : endDate;

  switch (unit) {
    case 'days':
      return differenceInDays(end, start);
    case 'months':
      return differenceInMonths(end, start);
    case 'years':
    default:
      return differenceInYears(end, start);
  }
};

/**
 * Add a specified amount of time to a date
 * @param date Base date
 * @param amount Amount to add
 * @param unit Unit of time ('days', 'months', 'years')
 * @returns New date with added time
 */
export const addToDate = (
  date: Date | string | number,
  amount: number,
  unit: 'days' | 'months' | 'years' = 'days'
): Date => {
  const dateObj = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  switch (unit) {
    case 'days':
      return addDays(dateObj, amount);
    case 'months':
      return addMonths(dateObj, amount);
    case 'years':
    default:
      return addYears(dateObj, amount);
  }
};

/**
 * Check if a date is in the past
 * @param date Date to check
 * @returns True if date is in the past
 */
export const isDateInPast = (date: Date | string | number): boolean => {
  const dateObj = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  return dateObj < new Date();
};

/**
 * Get financial year from date
 * @param date Input date
 * @returns Financial year string (e.g., "2023-24")
 */
export const getFinancialYear = (date: Date | string | number = new Date()): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();

  // In India, financial year is from April to March
  if (month < 3) {
    // Jan-Mar is part of previous FY
    return `${year-1}-${String(year).slice(2)}`;
  } else {
    // Apr-Dec is part of current FY
    return `${year}-${String(year+1).slice(2)}`;
  }
};