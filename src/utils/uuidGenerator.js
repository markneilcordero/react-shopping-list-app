// utils/uuidGenerator.js

/**
 * Generates a short unique identifier.
 * @returns {string} A unique ID string.
 */
export function generateId() {
  return "_" + Math.random().toString(36).substring(2, 10);
}
