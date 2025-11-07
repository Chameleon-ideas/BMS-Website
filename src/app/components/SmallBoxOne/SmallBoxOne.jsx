"use client";

import React from "react";
import "./_smallboxone.scss";

const SmallBoxOne = ({
  number = "1",
  heading = "Create your complimentary account today",
  description = "Get started quickly by creating a free account with just your email address.",
  bgColor = "rgba(255, 255, 255, 0.08)", // translucent card background
  capsuleColor = "#f9eb57",
}) => {
  return (
    <div className="small-box" style={{ backgroundColor: bgColor }}>
      <div className="round-capsule" style={{ backgroundColor: capsuleColor }}>
        <h4>{number}</h4>
      </div>

      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SmallBoxOne;
