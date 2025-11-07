"use client";

import React from "react";
import "./_floatingbubble.scss";

const FloatingBubble = ({ imgSrc, size = 50, top, left }) => {
  return (
    <div
      className="floating-bubble"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: top,
        left: left,
      }}
    >
      <img src={imgSrc} alt="bubbles" />
      <span className="tail"></span>
    </div>
  );
};

export default FloatingBubble;
