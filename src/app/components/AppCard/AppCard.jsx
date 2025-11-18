"use client";

import React from "react";
import "./_appcard.scss";

const AppCard = ({ 
  imgSrc, 
  title, 
  subtitle, 
  icon = "ri-arrow-right-up-fill", 
  bgColor = "#c6f56f" 
}) => {
  return (
    <div className="small-box-two">
      <div className="left-side-div-one">
        <img className="pic-one" src={imgSrc} alt={title} />
        <div className="heading-tags">
          <h2>{title}</h2>
          <h5>{subtitle}</h5>
        </div>
      </div>

      <div
        className="right-side-div-one"
        style={{ backgroundColor: bgColor }}
      >
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default AppCard;
