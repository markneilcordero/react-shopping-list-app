// components/quicklog/QuickLogForm.jsx
import React, { useState } from "react";
import { generateId } from "../../utils/uuidGenerator";

export default function QuickLogForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName || quantity <= 0) {
      alert("Please enter a valid item name and quantity.");
      return;
    }

    const newItem = {
      id: generateId(),
      name: trimmedName,
      quantity,
      category: category.trim(),
      createdAt: new Date().toISOString(),
    };

    onAdd(newItem);
    setName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow-sm mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-md-4">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Apples"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            min="1"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Category (optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Produce"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="col-md-2 text-end">
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
