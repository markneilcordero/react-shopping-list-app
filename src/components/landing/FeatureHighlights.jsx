// components/landing/FeatureHighlights.jsx
import React from "react";
import {
  FaRobot,
  FaChartPie,
  FaCloudUploadAlt,
  FaListAlt,
  FaClipboardCheck,
} from "react-icons/fa";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <FaRobot className="text-primary mb-2" size={40} />,
      title: "AI Assistant",
      description: "Use natural commands like 'Add milk' to manage your shopping list with ease.",
    },
    {
      icon: <FaListAlt className="text-success mb-2" size={40} />,
      title: "Smart Organization",
      description: "Categorize, sort, and filter your items by priority, type, or status.",
    },
    {
      icon: <FaChartPie className="text-warning mb-2" size={40} />,
      title: "Dashboard Insights",
      description: "Visualize your shopping data using clean and simple charts.",
    },
    {
      icon: <FaCloudUploadAlt className="text-info mb-2" size={40} />,
      title: "Backup & Restore",
      description: "Export and import your shopping list as JSON across devices.",
    },
    {
      icon: <FaClipboardCheck className="text-danger mb-2" size={40} />,
      title: "Quick Purchase Log",
      description: "Log what you actually bought — even if you didn’t plan ahead with a list.",
    },
  ];

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Why You'll Love This App</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                {feature.icon}
                <h5 className="fw-semibold mt-2">{feature.title}</h5>
                <p className="text-muted small">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
