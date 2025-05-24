// components/common/ToastNotification.jsx
import React, { useEffect } from "react";

/**
 * @param {Object} props
 * @param {"success" | "error"} props.type - Type of notification
 * @param {string} props.message - Message to display
 * @param {Function} props.onClose - Function to hide the toast
 */
export default function ToastNotification({ type, message, onClose }) {
  useEffect(() => {
    const timeout = setTimeout(onClose, 3000); // auto-close after 3s
    return () => clearTimeout(timeout);
  }, [onClose]);

  const alertClass =
    type === "success"
      ? "alert alert-success"
      : "alert alert-danger";

  return (
    <div
      className="position-fixed bottom-0 end-0 m-4"
      style={{ zIndex: 1080, minWidth: "250px" }}
    >
      <div className={`${alertClass} d-flex justify-content-between align-items-center`} role="alert">
        <span>{message}</span>
        <button
          type="button"
          className="btn-close btn-close-white ms-3"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
