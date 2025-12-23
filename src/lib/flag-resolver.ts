/**
 * Re-export package utilities for convenience
 * 
 * The br-state-flags package (v0.1.0+) now provides all these utilities natively.
 * This file serves as a convenience layer that re-exports from the package.
 * 
 * @see https://github.com/arthurreira/br-state-flags
 */

import { 
  resolveFlagComponent as packageResolveFlagComponent,
  getFlagComponent as packageGetFlagComponent,
  requireFlagComponent,
  FLAG_VIEWBOXES as PACKAGE_FLAG_VIEWBOXES,
  flagComponents,
  type FlagComponent,
  type FlagResolutionResult,
  type BRStateUF,
} from 'br-state-flags';

// Re-export types
export type { FlagComponent, FlagResolutionResult, BRStateUF };

// Re-export utilities with original names
export const resolveFlagComponent = packageResolveFlagComponent;
export const getFlagComponent = packageGetFlagComponent;
export const FLAG_VIEWBOXES = PACKAGE_FLAG_VIEWBOXES;
export { requireFlagComponent, flagComponents };

/**
 * Get flag viewBox for a state code (convenience wrapper)
 * 
 * @param stateCode - Brazilian state code
 * @returns ViewBox string or undefined if not found
 */
export function getFlagViewBox(stateCode: string): string | undefined {
  return PACKAGE_FLAG_VIEWBOXES[stateCode as BRStateUF];
}

/**
 * Check if a flag component exists for a state code
 * 
 * @param stateCode - Brazilian state code
 * @returns True if flag component exists
 */
export function hasFlagComponent(stateCode: string): boolean {
  return packageGetFlagComponent(stateCode as BRStateUF) !== null;
}

