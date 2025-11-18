"use client";

import React from "react";
import "./_pricecard.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const PriceCard = ({
  title,
  description,
  price,
  perMonth,
  buttonText,
  width = "100%",
  features = [],
}) => {
  return (
    <div className="big-div-box" style={{ width }}>
      {/* Header */}
      <div className="div-one">
        <h4>{title}</h4>
        <p>{description}</p>
        <h2>{price}</h2>
        {perMonth && <h5>{perMonth}</h5>}
      </div>

      {/* Button */}
      <div className="div-two">
        <GetStartedButton text={buttonText} width="90%" />
      </div>

      {/* Features */}

      <div className="div-three">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item"
            style={{ width: feature.width || "100%" }}
          >
            <div className={`cicle-icon-one ${feature.type}`}>
              <i className="ri-check-line"></i>
            </div>

            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
