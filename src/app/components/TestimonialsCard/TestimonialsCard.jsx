"use client";

import React from "react";
import "./_testimonialscard.scss";

const TestimonialsCard = ({ image, text, name, role }) => {
  return (
    <div className="testimonial-card">
      <div className="card-inner">
        <div className="card-avatar">
          <img src={image} alt={name} />
        </div>

        <h4 className="card-text">"{text}"</h4>

        <div className="card-user">
          <h3>{name}</h3>
          <h5>{role}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
