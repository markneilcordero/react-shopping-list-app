// components/quicklog/QuickLogItem.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {Object} props.item - The logged item (id, name, quantity, category, createdAt)
 * @param {Function} props.onDelete - Function to call when deleting the item
 */
export default function QuickLogItem({ item, onDelete }) {
  const { id, name, quantity, category, createdAt } = item;

  const formatDate = (iso) => {
    const date = new Date(iso);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-1">{name}</h5>
        <p className="card-text mb-2">
          <strong>Quantity:</strong> {quantity}
          {category && (
            <>
              <br />
              <strong>Category:</strong> {category}
            </>
          )}
        </p>
        <p className="text-muted small mb-2">
          Logged on {formatDate(createdAt)}
        </p>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
