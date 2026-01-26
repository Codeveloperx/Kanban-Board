/**
 * Generates a cryptographically secure UUID v4 using the Web Crypto API.
 * @returns {string}
 */
export function UUID() {
  return crypto.randomUUID();
}
