/**
 * Validation utility functions for the WealthMinder application
 */

/**
 * Validate email format
 * @param email Email to validate
 * @returns True if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param password Password to validate
 * @param minLength Minimum password length
 * @returns Object with validation result and reason if invalid
 */
export const validatePassword = (
  password: string,
  minLength = 8
): { isValid: boolean; reason?: string } => {
  if (!password) {
    return { isValid: false, reason: 'Password is required' };
  }

  if (password.length < minLength) {
    return {
      isValid: false,
      reason: `Password must be at least ${minLength} characters`
    };
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      reason: 'Password must contain at least one uppercase letter'
    };
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      reason: 'Password must contain at least one lowercase letter'
    };
  }

  // Check for at least one number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      reason: 'Password must contain at least one number'
    };
  }

  // Check for at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      isValid: false,
      reason: 'Password must contain at least one special character'
    };
  }

  return { isValid: true };
};

/**
 * Validate a mobile number (Indian format)
 * @param mobile Mobile number to validate
 * @returns True if mobile number is valid
 */
export const isValidMobile = (mobile: string): boolean => {
  if (!mobile) return false;

  // Indian mobile numbers are 10 digits, optionally starting with +91 or 0
  const mobileRegex = /^(\+91|0)?[6-9]\d{9}$/;
  return mobileRegex.test(mobile);
};

/**
 * Validate PAN (Permanent Account Number) format
 * @param pan PAN to validate
 * @returns True if PAN is valid
 */
export const isValidPAN = (pan: string): boolean => {
  if (!pan) return false;

  // PAN format: AAAPL1234C (5 alphabets, 4 numbers, 1 alphabet)
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan);
};

/**
 * Validate numeric input
 * @param value Value to validate
 * @param allowDecimal Allow decimal numbers
 * @param allowNegative Allow negative numbers
 * @returns True if value is valid
 */
export const isValidNumber = (
  value: string,
  allowDecimal = true,
  allowNegative = false
): boolean => {
  if (!value) return false;

  const regex = allowDecimal
    ? allowNegative
      ? /^-?\d*\.?\d*$/
      : /^\d*\.?\d*$/
    : allowNegative
      ? /^-?\d*$/
      : /^\d*$/;

  return regex.test(value) && value !== '.' && value !== '-';
};

/**
 * Validate percentage input (0-100)
 * @param value Value to validate
 * @param allowDecimal Allow decimal percentages
 * @returns True if value is a valid percentage
 */
export const isValidPercentage = (
  value: string | number,
  allowDecimal = true
): boolean => {
  if (value === '' || value === undefined || value === null) return false;

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numValue)) return false;

  if (numValue < 0 || numValue > 100) return false;

  if (!allowDecimal && numValue % 1 !== 0) return false;

  return true;
};

/**
 * Validate if a string is a valid date
 * @param dateString Date string to validate
 * @param format Expected format (simple validation only)
 * @returns True if date string is valid
 */
export const isValidDate = (
  dateString: string,
  format = 'DD/MM/YYYY'
): boolean => {
  if (!dateString) return false;

  // Simple validation for DD/MM/YYYY format
  if (format === 'DD/MM/YYYY') {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(dateString)) return false;

    // Check if date actually exists
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year &&
           date.getMonth() === month - 1 &&
           date.getDate() === day;
  }

  // For other formats, do a simple check if date is valid
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * Validate if the sum of percentages equals 100%
 * @param percentages Array of percentage values
 * @param tolerance Allowed deviation from 100% (default: 0.01 for rounding errors)
 * @returns True if percentages sum to 100% within tolerance
 */
export const isValidPercentageSum = (
  percentages: number[],
  tolerance = 0.01
): boolean => {
  if (!percentages.length) return false;

  const sum = percentages.reduce((acc, curr) => acc + curr, 0);
  return Math.abs(sum - 100) <= tolerance;
};