// utils/localStorageHelpers.js

/**
 * Get data from localStorage by key.
 * @param {string} key - The localStorage key.
 * @param {*} defaultValue - Value to return if nothing is stored.
 * @returns {*} - Parsed data or defaultValue.
 */
export function getLocalData(key, defaultValue = []) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (e) {
    console.error("Failed to parse localStorage data", e);
    return defaultValue;
  }
}

/**
 * Save data to localStorage.
 * @param {string} key - The localStorage key.
 * @param {*} data - Data to stringify and save.
 */
export function saveLocalData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }
}

/**
 * Remove data from localStorage.
 * @param {string} key - The localStorage key to remove.
 */
export function removeLocalData(key) {
  localStorage.removeItem(key);
}

/**
 * Check if localStorage has existing valid data.
 * @param {string} key - The localStorage key to check.
 * @returns {boolean}
 */
export function checkExistingData(key) {
  const data = getLocalData(key, []);
  return Array.isArray(data) && data.length > 0;
}
