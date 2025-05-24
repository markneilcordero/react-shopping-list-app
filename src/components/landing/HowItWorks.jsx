// components/landing/HowItWorks.jsx
import React from "react";
import { FaEdit, FaCheckCircle, FaChartBar, FaCloudDownloadAlt } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaEdit className="text-primary" size={36} />,
      title: "1. Add Your Items",
      description: "Quickly add items using the form or type natural commands in the AI Assistant.",
    },
    {
      icon: <FaCheckCircle className="text-success" size={36} />,
      title: "2. Mark as Purchased",
      description: "Check off items as you shop and keep track of what’s left.",
    },
    {
      icon: <FaChartBar className="text-warning" size={36} />,
      title: "3. Visualize Progress",
      description: "View charts and summaries on the dashboard to better understand your habits.",
    },
    {
      icon: <FaCloudDownloadAlt className="text-info" size={36} />,
      title: "4. Backup & Sync",
      description: "Export your data for backup or import it on another device to continue where you left off.",
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">How It Works</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 h-100 border rounded shadow-sm">
                <div className="mb-2">{step.icon}</div>
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-muted small">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
