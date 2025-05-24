// components/settings/ImportDataCard.jsx
import React, { useRef } from "react";
import { importFromJson } from "../../utils/exportImportHelpers";
import { saveLocalData } from "../../utils/localStorageHelpers";

/**
 * @param {Object} props
 * @param {string} props.storageKey - LocalStorage key to save data
 * @param {Function} props.onSuccess - Callback when import succeeds
 */
export default function ImportDataCard({ storageKey, onSuccess }) {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    importFromJson(
      file,
      (data) => {
        if (!Array.isArray(data)) {
          alert("Invalid data format. Expected an array.");
          return;
        }
        saveLocalData(storageKey, data);
        onSuccess?.();
      },
      (errMessage) => {
        alert(errMessage);
      }
    );

    // Reset file input so same file can be reselected if needed
    e.target.value = "";
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <h5 className="fw-bold mb-3">📥 Import Data</h5>
        <p className="text-muted small">
          Upload a JSON backup file to restore your shopping list.
        </p>
        <input
          type="file"
          accept=".json,application/json"
          ref={fileInputRef}
          className="d-none"
          onChange={handleFileChange}
        />
        <button className="btn btn-outline-success" onClick={triggerFileInput}>
          Import JSON
        </button>
      </div>
    </div>
  );
}
