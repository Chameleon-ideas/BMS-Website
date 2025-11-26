"use client";

import React from "react";
import "./_smallboxone.scss";
import { motion } from "framer-motion";

// 👇 Child animation variants (required for stagger)
const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const SmallBoxOne = ({
  number = "1",
  heading = "Create your complimentary account today",
  description = "Get started quickly by creating a free account with just your email address.",
  bgColor = "rgba(255, 255, 255, 0.08)",
  capsuleColor = "#f9eb57",
}) => {
  return (
    <motion.div
      variants={childVariants} // 👈 REQUIRED for stagger to work
      className="small-box"
      style={{ backgroundColor: bgColor }}
    >
      <div className="round-capsule" style={{ backgroundColor: capsuleColor }}>
        <h4>{number}</h4>
      </div>

      <h3>{heading}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default SmallBoxOne;
