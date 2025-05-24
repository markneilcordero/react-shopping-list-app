// components/dashboard/HistoryChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

/**
 * @param {Object} props
 * @param {Object} props.data - { [date]: count }
 */
export default function HistoryChart({ data }) {
  const labels = Object.keys(data);

  if (!labels.length) {
    return <div className="text-center text-muted">No history data to display.</div>;
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: "Items Added",
        data: labels.map((label) => data[label]),
        borderColor: "#0d6efd",
        backgroundColor: "#0d6efd33",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="fw-bold text-center">Items Added Over Time</h5>
      <Line data={chartData} options={options} />
    </div>
  );
}
