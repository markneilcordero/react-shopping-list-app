// pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import SummaryStats from "../components/dashboard/SummaryStats";
import StatusChart from "../components/dashboard/StatusChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import PriorityChart from "../components/dashboard/PriorityChart"; // Optional
import HistoryChart from "../components/dashboard/HistoryChart";   // Optional

import { getLocalData } from "../utils/localStorageHelpers";
import { prepareChartData } from "../utils/chartDataHelpers";

const STORAGE_KEY = "shopping-list-app-data";

export default function DashboardPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = getLocalData(STORAGE_KEY, []);
    setItems(data);
  }, []);

  const { statusData, categoryData, priorityData, historyData } =
    prepareChartData(items);

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <h2 className="fw-bold text-center mb-4">📊 Shopping List Dashboard</h2>

        <SummaryStats items={items} />

        <div className="row">
          <div className="col-md-6 mb-4">
            <StatusChart data={statusData} />
          </div>
          <div className="col-md-6 mb-4">
            <CategoryChart data={categoryData} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <PriorityChart data={priorityData} />
          </div>
          <div className="col-md-6 mb-4">
            <HistoryChart data={historyData} />
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
