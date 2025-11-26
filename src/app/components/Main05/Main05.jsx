"use client";
import { motion } from "framer-motion";
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
          <motion.div
            className="small-yellow-capsule-three"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            <h4>Customer success</h4>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            Real apps. Real results
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            "Real apps. Real results. NextSaaS delivered our entire platform
            ahead of schedule—flawless execution and real partnership"
          </motion.p>
        </div>

        {/* Scrollable Testimonials */}
        <motion.div
          className="lower-div-section"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }}
        >
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
        </motion.div>

        <motion.div
          className="handling-button"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }}
        >
          <GetStartedButton text="View all reviews" />
        </motion.div>
      </section>
    </main>
  );
};

export default Main05;
