// components/dashboard/StatusChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * @param {Object} props
 * @param {Object} props.data - Object with counts for purchased and pending
 */
export default function StatusChart({ data }) {
  if (!data || data.purchased + data.pending === 0) {
    return <div className="text-center text-muted">No data to display.</div>;
  }

  const chartData = {
    labels: ["Purchased", "Pending"],
    datasets: [
      {
        data: [data.purchased, data.pending],
        backgroundColor: ["#198754", "#ffc107"],
        borderColor: ["#198754", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="fw-bold text-center">Status Overview</h5>
      <Doughnut data={chartData} />
    </div>
  );
}
