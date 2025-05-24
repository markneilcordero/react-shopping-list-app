// components/settings/ResetDataCard.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {Function} props.onConfirm - Function to open confirmation modal
 */
export default function ResetDataCard({ onConfirm }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <h5 className="fw-bold mb-3 text-danger">🗑️ Reset App Data</h5>
        <p className="text-muted small">
          Permanently delete all saved items from LocalStorage. This cannot be undone.
        </p>
        <button className="btn btn-outline-danger" onClick={onConfirm}>
          Reset App
        </button>
      </div>
    </div>
  );
}
