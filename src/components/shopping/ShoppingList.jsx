// components/shopping/ShoppingList.jsx
import React from "react";
import ShoppingItemCard from "./ShoppingItemCard";

/**
 * @param {Object} props
 * @param {Array} props.items - List of shopping items
 * @param {Function} props.onEdit - Function to edit an item
 * @param {Function} props.onDelete - Function to delete an item
 * @param {Function} props.onTogglePurchased - Function to toggle item status
 */
export default function ShoppingList({ items, onEdit, onDelete, onTogglePurchased }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-6 col-lg-4 mb-3">
          <ShoppingItemCard
            item={item}
            onEdit={() => onEdit(item)}
            onDelete={() => onDelete(item.id)}
            onTogglePurchased={() => onTogglePurchased(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
