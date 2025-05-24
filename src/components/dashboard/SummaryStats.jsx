// components/dashboard/SummaryStats.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {Array} props.items - The full list of shopping items
 */
export default function SummaryStats({ items }) {
  const total = items.length;
  const purchased = items.filter((item) => item.purchased).length;
  const pending = total - purchased;

  return (
    <div className="row text-center mb-4">
      <div className="col-md-4 mb-2">
        <div className="card shadow-sm p-3">
          <h5 className="fw-bold">Total Items</h5>
          <p className="fs-4 text-primary">{total}</p>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="card shadow-sm p-3">
          <h5 className="fw-bold">Purchased</h5>
          <p className="fs-4 text-success">{purchased}</p>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="card shadow-sm p-3">
          <h5 className="fw-bold">Pending</h5>
          <p className="fs-4 text-warning">{pending}</p>
        </div>
      </div>
    </div>
  );
}
