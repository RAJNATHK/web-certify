/**
 * Centralized Pricing Logic & Configuration
 */

export const FREE_CODE_PREFIXES = ['CPP'];

export function isFreeTrack(codePrefix) {
  if (!codePrefix) return false;
  return FREE_CODE_PREFIXES.includes(codePrefix.toUpperCase());
}
