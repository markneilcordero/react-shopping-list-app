// components/landing/CallToAction.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-primary text-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to Simplify Your Grocery Shopping?</h2>
        <p className="lead mb-4">
          Take control of your shopping list with smart tools, powerful insights, and an AI assistant.
        </p>
        <button
          className="btn btn-light btn-lg fw-semibold"
          onClick={() => navigate("/shopping-list")}
        >
          Start Now
        </button>
      </div>
    </section>
  );
}
