"use client";

import React, { useState, useEffect } from "react";
import "./_header.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import Navbar from "../Navbar/Navbar";
import FloatingBubble from "../FloatingBubble/FloatingBubble";

const Header = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize window size on mount

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // helper function to create smooth parallax movement
  const getTransformStyle = (multiplier = 25) => {
    const offsetX =
      (mousePos.x - windowSize.width / 2) / (windowSize.width / 2);
    const offsetY =
      (mousePos.y - windowSize.height / 2) / (windowSize.height / 2);
    return {
      transform: `translate(${offsetX * multiplier}px, ${
        offsetY * multiplier
      }px)`,
    };
  };

  return (
    <header className="header">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="header-video"
      >
        <source src="/videos/Tube.mp4" type="video/mp4" />
      </video>

      <div className="navbar-capsule">
        <Navbar />
      </div>

      <section className="for-center-header">
        <div className="middle-div">
          <div className="yellow-capsule">
            <h4>Artificial intelligence solutions</h4>
          </div>

          <h1>Effortlessly build advanced website with AI-driven solutions</h1>

          <p>
            Effortlessly build advanced websites with AI-driven solutions that
            streamline every step of the development process. From intelligent
            design suggestions to automated
          </p>

          <div className="two-buttons">
            <GetStartedButton text="Get started" />
            <GetStartedButton text="Free trial" dark={false} />
          </div>
        </div>
      </section>

      {/* Floating bubbles with parallax effect */}
      <div className="image-one" style={getTransformStyle(25)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-two" style={getTransformStyle(40)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-three" style={getTransformStyle(30)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-four" style={getTransformStyle(45)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-five" style={getTransformStyle(20)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-six" style={getTransformStyle(35)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-seven" style={getTransformStyle(50)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>

      <div className="image-eight" style={getTransformStyle(28)}>
        <FloatingBubble imgSrc="/pics/hero-shape-1.png" />
      </div>
    </header>
  );
};

export default Header;
