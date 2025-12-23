import type { Locale } from 'br-state-flags';
import { REGIONS_CONFIG } from './constants';

/**
 * Valid locale values
 */
const VALID_LOCALES: readonly Locale[] = ['en', 'pt-BR', 'fi'] as const;

/**
 * Valid region names
 */
const VALID_REGIONS = Object.keys(REGIONS_CONFIG) as readonly string[];

/**
 * Valid Brazilian state codes
 */
const VALID_STATE_CODES = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR',
  'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'
] as const;

/**
 * Type guard to check if a string is a valid locale
 */
export function isValidLocale(value: string): value is Locale {
  return VALID_LOCALES.includes(value as Locale);
}

/**
 * Type guard to check if a string is a valid region
 */
export function isValidRegion(value: string): boolean {
  return VALID_REGIONS.includes(value);
}

/**
 * Type guard to check if a string is a valid state code
 */
export function isValidStateCode(value: string): boolean {
  return (VALID_STATE_CODES as readonly string[]).includes(value);
}

/**
 * Validate and normalize a locale value
 * 
 * @param locale - Locale string to validate
 * @param fallback - Fallback locale if invalid (default: 'en')
 * @returns Valid locale
 */
export function validateLocale(locale: string, fallback: Locale = 'en'): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  if (import.meta.env.DEV) {
    console.warn(`[Validation] Invalid locale: ${locale}, falling back to ${fallback}`);
  }
  return fallback;
}

/**
 * Validate a state code
 * 
 * @param code - State code to validate
 * @returns True if valid, false otherwise
 */
export function validateStateCode(code: string): boolean {
  const isValid = isValidStateCode(code);
  if (!isValid && import.meta.env.DEV) {
    console.warn(`[Validation] Invalid state code: ${code}`);
  }
  return isValid;
}

/**
 * Validate a region name
 * 
 * @param region - Region name to validate
 * @returns True if valid, false otherwise
 */
export function validateRegion(region: string): boolean {
  const isValid = isValidRegion(region);
  if (!isValid && import.meta.env.DEV) {
    console.warn(`[Validation] Invalid region: ${region}`);
  }
  return isValid;
}

