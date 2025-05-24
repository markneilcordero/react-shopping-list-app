// utils/exportImportHelpers.js

/**
 * Generates a timestamped filename for exports.
 * @param {string} prefix - File prefix (e.g., 'shopping-list-data')
 * @returns {string} - Filename like 'shopping-list-data-2025-05-24T10-30-00.json'
 */
export function generateTimestampedFilename(prefix) {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, "-");
  return `${prefix}-${timestamp}.json`;
}

/**
 * Triggers download of JSON data as a file.
 * @param {Object|Array} data - The data to export
 * @param {string} filename - The filename to save as
 */
export function exportToJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

/**
 * Reads and parses JSON data from a user-uploaded file.
 * @param {File} file - Uploaded file (from input[type=file])
 * @param {Function} onSuccess - Callback to call with parsed data
 * @param {Function} onError - Callback to call on error
 */
export function importFromJson(file, onSuccess, onError) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      onSuccess(parsed);
    } catch (err) {
      console.error("Import failed:", err);
      onError("Invalid JSON file.");
    }
  };
  reader.onerror = () => {
    onError("Failed to read file.");
  };
  reader.readAsText(file);
}
