// components/shopping/ShoppingForm.jsx
import React, { useEffect, useState } from "react";
import { generateId } from "../../utils/uuidGenerator";

export default function ShoppingForm({ onSave, editingItem, setEditingItem }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
    } else {
      setName("");
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter an item name.");

    const newItem = {
      id: editingItem ? editingItem.id : generateId(),
      name: name.trim(),
      purchased: editingItem ? editingItem.purchased : false,
    };

    onSave(newItem);
    setName("");
  };

  const handleCancel = () => {
    setEditingItem(null);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow-sm mb-4">
      <div className="row align-items-center">
        <div className="col-md-8 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter item name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-4 text-md-end">
          <button type="submit" className="btn btn-primary me-2">
            {editingItem ? "Update" : "Add Item"}
          </button>
          {editingItem && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
