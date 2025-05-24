// components/shopping/SortControls.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {string} props.sort - Currently selected sort option
 * @param {Function} props.setSort - Function to update sort option
 */
export default function SortControls({ sort, setSort }) {
  const options = [
    { label: "Date Added", value: "date" },
    { label: "Name (A-Z)", value: "name" },
    { label: "Purchased Status", value: "purchased" },
  ];

  return (
    <div className="mb-4 text-center">
      <label className="form-label me-2 fw-semibold">Sort by:</label>
      <div className="btn-group" role="group" aria-label="Sort options">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`btn btn-outline-secondary ${sort === option.value ? "active" : ""}`}
            onClick={() => setSort(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
