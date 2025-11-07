"use client";

import React from "react";
import "./_getstartedbutton.scss";

const GetStartedButton = ({ text, dark = true }) => {
  return (
    <button className={`small-button ${dark ? "black" : "white"}`}>
      <h2>{text}</h2>
    </button>
  );
};

export default GetStartedButton;
