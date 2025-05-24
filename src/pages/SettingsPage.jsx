// pages/SettingsPage.jsx
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import ExportDataCard from "../components/settings/ExportDataCard";
import ImportDataCard from "../components/settings/ImportDataCard";
import ResetDataCard from "../components/settings/ResetDataCard";
import ConfirmModal from "../components/common/ConfirmModal"; // optional
import ToastNotification from "../components/common/ToastNotification"; // optional

import { removeLocalData } from "../utils/localStorageHelpers";

const STORAGE_KEY = "shopping-list-app-data";

export default function SettingsPage() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  const handleResetConfirmed = () => {
    removeLocalData(STORAGE_KEY);
    setToast({ type: "success", message: "App data has been reset." });
    setShowConfirmModal(false);
  };

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <h2 className="fw-bold text-center mb-4">⚙️ Settings & Data Management</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <ExportDataCard storageKey={STORAGE_KEY} />
          </div>
          <div className="col-md-4 mb-4">
            <ImportDataCard storageKey={STORAGE_KEY} onSuccess={() =>
              setToast({ type: "success", message: "Data imported successfully!" })
            } />
          </div>
          <div className="col-md-4 mb-4">
            <ResetDataCard onConfirm={() => setShowConfirmModal(true)} />
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />

      {/* Optional Components */}
      {showConfirmModal && (
        <ConfirmModal
          title="Confirm Reset"
          message="Are you sure you want to delete all saved data? This action cannot be undone."
          onConfirm={handleResetConfirmed}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}

      {toast && (
        <ToastNotification
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
