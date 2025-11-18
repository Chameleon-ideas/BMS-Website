"use client";

import React from "react";
import "./_getstartedbutton.scss";

const GetStartedButton = ({ text, dark = true, width }) => {
  return (
    <button className={`small-button ${dark ? "black" : "white"}`}
    
    style={{width:width ? width:"auto"}}
    >
      <h2>{text}</h2>
    </button>
  );
};

export default GetStartedButton;
