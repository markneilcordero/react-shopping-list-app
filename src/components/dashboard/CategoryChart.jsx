// components/dashboard/CategoryChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

/**
 * @param {Object} props
 * @param {Object} props.data - { [category]: count, ... }
 */
export default function CategoryChart({ data }) {
  const categoryKeys = Object.keys(data);

  if (!categoryKeys.length) {
    return <div className="text-center text-muted">No category data to display.</div>;
  }

  const chartData = {
    labels: categoryKeys,
    datasets: [
      {
        label: "Items per Category",
        data: categoryKeys.map((key) => data[key]),
        backgroundColor: "#0d6efd",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    responsive: true,
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
      <h5 className="fw-bold text-center">Items by Category</h5>
      <Bar data={chartData} options={options} />
    </div>
  );
}
