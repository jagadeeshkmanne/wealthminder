/**
 * String utility functions for the WealthMinder application
 */

/**
 * Truncate a string to a specified length and add ellipsis
 * @param str String to truncate
 * @param maxLength Maximum length
 * @param ellipsis Suffix to add when truncated
 * @returns Truncated string
 */
export const truncate = (
  str: string,
  maxLength: number,
  ellipsis = '...'
): string => {
  if (!str) return '';

  if (str.length <= maxLength) return str;

  return str.slice(0, maxLength) + ellipsis;
};

/**
 * Capitalize the first letter of each word in a string
 * @param str String to capitalize
 * @returns Capitalized string
 */
export const capitalizeWords = (str: string): string => {
  if (!str) return '';

  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Capitalize only the first letter of a string
 * @param str String to capitalize
 * @returns Capitalized string
 */
export const capitalizeFirst = (str: string): string => {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Generate initials from a name
 * @param name Full name
 * @param maxLength Maximum number of initials
 * @returns Initials string
 */
export const getInitials = (name: string, maxLength = 2): string => {
  if (!name) return '';

  return name
    .split(' ')
    .filter(part => part.length > 0)
    .slice(0, maxLength)
    .map(part => part[0].toUpperCase())
    .join('');
};

/**
 * Remove special characters from a string
 * @param str Input string
 * @param allowSpaces Allow spaces in the output
 * @returns Cleaned string
 */
export const removeSpecialChars = (str: string, allowSpaces = true): string => {
  if (!str) return '';

  const pattern = allowSpaces ? /[^\w\s]/gi : /[^\w]/gi;
  return str.replace(pattern, '');
};

/**
 * Format a scheme name for better display
 * @param schemeName Original scheme name from AMFI
 * @returns Formatted scheme name
 */
export const formatSchemeName = (schemeName: string): string => {
  if (!schemeName) return '';

  // Remove repetitive text like "Scheme" or "Plan" when not needed
  let formatted = schemeName
    .replace(/-\s*Growth\s*Plan/i, ' - Growth')
    .replace(/-\s*Direct\s*Plan/i, ' - Direct')
    .replace(/Scheme/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Capitalize important words
  return capitalizeWords(formatted);
};

/**
 * Generate a slug from a string
 * @param str Input string
 * @returns URL-friendly slug
 */
export const generateSlug = (str: string): string => {
  if (!str) return '';

  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/--+/g, '-');    // Replace multiple hyphens with single hyphen
};

/**
 * Extract fund house name from a scheme name
 * @param schemeName Full scheme name
 * @returns Fund house name
 */
export const extractFundHouse = (schemeName: string): string => {
  if (!schemeName) return '';

  // Most scheme names start with the fund house name
  const parts = schemeName.split(' ');

  // Try to extract fund house name (typically the first 2-3 words)
  if (parts.length >= 2) {
    // Common fund house patterns
    if (schemeName.includes('HDFC')) return 'HDFC';
    if (schemeName.includes('ICICI') || schemeName.includes('ICICI Prudential')) return 'ICICI Prudential';
    if (schemeName.includes('SBI')) return 'SBI';
    if (schemeName.includes('Axis')) return 'Axis';
    if (schemeName.includes('Kotak')) return 'Kotak';
    if (schemeName.includes('Aditya Birla') || schemeName.includes('ABSL')) return 'Aditya Birla Sun Life';
    if (schemeName.includes('Nippon') || schemeName.includes('Reliance')) return 'Nippon India';
    if (schemeName.includes('DSP')) return 'DSP';

    // Default: return first two words
    return `${parts[0]} ${parts[1]}`;
  }

  return parts[0] || '';
};