// components/landing/TestimonialSection.jsx
import React from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Jane D.",
      text: "The AI assistant is a game-changer! I just type what I need and it handles the rest. Love it!",
    },
    {
      name: "Mark S.",
      text: "This app helped me stay organized during weekly grocery runs. The dashboard is super helpful.",
    },
    {
      name: "Lina R.",
      text: "I imported my list from my laptop to my phone in seconds. So convenient and user-friendly!",
    },
  ];

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">What Users Are Saying</h2>
        <div className="row">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="border p-4 h-100 rounded shadow-sm">
                <p className="fst-italic">“{t.text}”</p>
                <hr />
                <p className="fw-semibold mb-0">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
