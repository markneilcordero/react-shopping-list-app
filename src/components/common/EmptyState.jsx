// components/common/EmptyState.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {string} props.message - Message to display when the list is empty
 */
export default function EmptyState({ message }) {
  return (
    <div className="text-center py-5 text-muted">
      <i className="bi bi-cart-x-fill" style={{ fontSize: "3rem" }}></i>
      <p className="mt-3 fs-5">{message}</p>
    </div>
  );
}
