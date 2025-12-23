import type { Locale } from 'br-state-flags';

/**
 * Get Intl locale string from app locale
 * 
 * @param locale - App locale code
 * @returns Intl locale string
 */
function getIntlLocale(locale: Locale): string {
  switch (locale) {
    case 'en':
      return 'en-US';
    case 'fi':
      return 'fi-FI';
    case 'pt-BR':
      return 'pt-BR';
    default:
      return 'en-US';
  }
}

/**
 * Format a number according to the specified locale
 * 
 * @param num - Number to format
 * @param locale - Locale for formatting (default: 'en')
 * @returns Formatted number string
 * 
 * @example
 * ```ts
 * formatNumber(1234567.89, 'en') // "1,234,567.89"
 * formatNumber(1234567.89, 'pt-BR') // "1.234.567,89"
 * formatNumber(1234567.89, 'fi') // "1 234 567,89"
 * ```
 */
export function formatNumber(num: number, locale: Locale = 'en'): string {
  const intlLocale = getIntlLocale(locale);
  return new Intl.NumberFormat(intlLocale).format(num);
}

/**
 * Format a number with compact notation (e.g., 1.2M, 3.4K)
 * 
 * @param num - Number to format
 * @param locale - Locale for formatting (default: 'en')
 * @returns Formatted number string with compact notation
 * 
 * @example
 * ```ts
 * formatCompactNumber(1234567, 'en') // "1.2M"
 * formatCompactNumber(1234, 'en') // "1.2K"
 * ```
 */
export function formatCompactNumber(num: number, locale: Locale = 'en'): string {
  const intlLocale = getIntlLocale(locale);
  return new Intl.NumberFormat(intlLocale, {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
}

/**
 * Format a number with specific decimal places
 * 
 * @param num - Number to format
 * @param decimals - Number of decimal places
 * @param locale - Locale for formatting (default: 'en')
 * @returns Formatted number string
 */
export function formatNumberWithDecimals(
  num: number,
  decimals: number = 2,
  locale: Locale = 'en'
): string {
  const intlLocale = getIntlLocale(locale);
  return new Intl.NumberFormat(intlLocale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

