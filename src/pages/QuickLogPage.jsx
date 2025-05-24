// pages/QuickLogPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import QuickLogForm from "../components/quicklog/QuickLogForm";
import QuickLogList from "../components/quicklog/QuickLogList";

import { getLocalData, saveLocalData } from "../utils/localStorageHelpers";

const QUICK_LOG_KEY = "shopping-quick-log";

export default function QuickLogPage() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const data = getLocalData(QUICK_LOG_KEY, []);
    setPurchases(data);
  }, []);

  const updateLog = (updatedList) => {
    saveLocalData(QUICK_LOG_KEY, updatedList);
    setPurchases(updatedList);
  };

  const handleAddPurchase = (newItem) => {
    updateLog([...purchases, newItem]);
  };

  const handleDeletePurchase = (id) => {
    updateLog(purchases.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <h2 className="fw-bold mb-4 text-center">🧾 Quick Purchase Log</h2>

        <QuickLogForm onAdd={handleAddPurchase} />
        <QuickLogList purchases={purchases} onDelete={handleDeletePurchase} />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
