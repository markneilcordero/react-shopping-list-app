// components/quicklog/QuickLogList.jsx
import React from "react";
import QuickLogItem from "./QuickLogItem";

/**
 * @param {Object} props
 * @param {Array} props.purchases - Array of logged purchase items
 * @param {Function} props.onDelete - Function to delete an item by ID
 */
export default function QuickLogList({ purchases, onDelete }) {
  if (!purchases.length) {
    return (
      <div className="text-center text-muted py-5">
        <img
          src="empty-cart.svg"
          alt="No purchases"
          className="img-fluid"
          style={{ maxWidth: "350px", marginBottom: "1rem" }}
        />
        <p className="fs-5">No items have been logged yet.</p>
      </div>
    );
  }

  return (
    <div className="row">
      {purchases.map((item) => (
        <div className="col-md-6 col-lg-4 mb-3" key={item.id}>
          <QuickLogItem item={item} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
