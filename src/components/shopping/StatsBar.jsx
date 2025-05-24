// components/shopping/StatsBar.jsx
import React from "react";

/**
 * @param {Object} props
 * @param {Array} props.items - Full list of shopping items
 */
export default function StatsBar({ items }) {
  const total = items.length;
  const purchased = items.filter((item) => item.purchased).length;
  const pending = total - purchased;

  return (
    <div className="alert alert-info text-center fw-semibold">
      🛒 Total: {total} | ✅ Purchased: {purchased} | ⏳ Pending: {pending}
    </div>
  );
}
