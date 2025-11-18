"use client";

import React from "react";
import "./_main05.scss";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Main05 = () => {
  const testimonials = [
    {
      id: 1,
      image: "/pics/hero-shape-1.png",
      text: "I built a fully functional app for my business in a weekend-without a developer",
      name: "James Gunn",
      role: "Director",
    },
    {
      id: 2,
      image: "/pics/hero-shape-1.png",
      text: "NextSaas delivered our platform ahead of schedule—flawless execution",
      name: "Mary Johnson",
      role: "CEO",
    },
    {
      id: 3,
      image: "/pics/hero-shape-1.png",
      text: "Their team helped us scale our app seamlessly with zero downtime",
      name: "Robert Smith",
      role: "CTO",
    },
    {
      id: 4,
      image: "/pics/hero-shape-1.png",
      text: "Their team helped us scale our app seamlessly with zero downtime",
      name: "Robert Smith",
      role: "CTO",
    },
  ];

  return (
    <main className="main05">
      <section className="for-center-main05">
        <div className="upper-div-section">
          <div className="small-yellow-capsule-three">
            <h4>Customer success</h4>
          </div>

          <h3>Real apps. Real results.</h3>

          <p>
            "Real apps. Real results. NextSaaS delivered our entire platform
            ahead of schedule—flawless execution and real partnership."
          </p>
        </div>

        {/* Scrollable Testimonials */}
        <div className="lower-div-section">
          <div className="scroll-container">
            <div className="scroll-track">
              {testimonials.map((t) => (
                <TestimonialsCard key={t.id} {...t} />
              ))}
              {testimonials.map((t) => (
                <TestimonialsCard key={`dup-${t.id}`} {...t} />
              ))}
            </div>
          </div>
        </div>

        <div className="handling-button">
          <GetStartedButton text="View all reviews" />
        </div>
      </section>
    </main>
  );
};

export default Main05;
