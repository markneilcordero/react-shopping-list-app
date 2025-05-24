// components/shopping/FilterBar.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {string} props.filter - Currently selected filter
 * @param {Function} props.setFilter - Function to update filter
 */
export default function FilterBar({ filter, setFilter }) {
  const filters = ["All", "Purchased", "Pending"];

  return (
    <div className="mb-3 text-center">
      <div className="btn-group" role="group" aria-label="Filter shopping items">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`btn btn-outline-primary ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
