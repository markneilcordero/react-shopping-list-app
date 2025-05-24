// components/landing/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ hasData }) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(hasData ? "/shopping-list" : "/shopping-list");
  };

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Smart Shopping List App</h1>
        <p className="lead mb-4">
          Organize your grocery trips with ease. Use our built-in AI Assistant to manage your list, track items, and visualize your progress.
        </p>
        <button onClick={handleStart} className="btn btn-primary btn-lg">
          {hasData ? "Go to My List" : "Start Shopping"}
        </button>
      </div>
    </section>
  );
}
