// components/shopping/ShoppingItemCard.jsx
import React from "react";

export default function ShoppingItemCard({ item, onEdit, onDelete, onTogglePurchased }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5
          className={`card-title fw-semibold d-flex justify-content-between align-items-start ${
            item.purchased ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {item.name}
          <span className="badge bg-light text-dark">
            {item.purchased ? "Purchased" : "Pending"}
          </span>
        </h5>

        <div className="d-flex justify-content-between mt-3">
          <button
            className={`btn btn-sm ${
              item.purchased ? "btn-outline-warning" : "btn-success"
            }`}
            onClick={onTogglePurchased}
          >
            {item.purchased ? "Undo" : "Mark as Purchased"}
          </button>

          <div>
            <button className="btn btn-sm btn-outline-primary me-2" onClick={onEdit}>
              Edit
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
