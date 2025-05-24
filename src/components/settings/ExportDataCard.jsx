// components/settings/ExportDataCard.jsx
import React from "react";
import { getLocalData } from "../../utils/localStorageHelpers";
import { generateTimestampedFilename, exportToJson } from "../../utils/exportImportHelpers";

/**
 * @param {Object} props
 * @param {string} props.storageKey - LocalStorage key to export
 */
export default function ExportDataCard({ storageKey }) {
  const handleExport = () => {
    const data = getLocalData(storageKey, []);
    if (!data.length) {
      alert("No data to export.");
      return;
    }

    const filename = generateTimestampedFilename("shopping-list-data");
    exportToJson(data, filename);
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <h5 className="fw-bold mb-3">📤 Export Data</h5>
        <p className="text-muted small">
          Download your shopping list data as a .json file for backup or transfer.
        </p>
        <button className="btn btn-outline-primary" onClick={handleExport}>
          Export JSON
        </button>
      </div>
    </div>
  );
}
