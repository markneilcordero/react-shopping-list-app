// components/dashboard/PriorityChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * @param {Object} props
 * @param {Object} props.data - { Low: number, Medium: number, High: number }
 */
export default function PriorityChart({ data }) {
  const priorityKeys = Object.keys(data).filter((key) => data[key] > 0);

  if (!priorityKeys.length) {
    return <div className="text-center text-muted">No priority data to display.</div>;
  }

  const chartData = {
    labels: priorityKeys,
    datasets: [
      {
        data: priorityKeys.map((key) => data[key]),
        backgroundColor: ["#0d6efd", "#ffc107", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="fw-bold text-center">Items by Priority</h5>
      <Pie data={chartData} />
    </div>
  );
}
