"use client";
import { motion } from "framer-motion";
import React from "react";
import "./_main02.scss";
import SmallBoxOne from "../SmallBoxOne/SmallBoxOne";

const Main02 = () => {
  return (
    <main className="main02">
      <section className="for-center-main02">
        <div className="upper-div">
          <motion.div
            className="white-capsule"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }} // ensures the filter is applied initially
          >
            <h4>How it works</h4>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            Simple actions, limitless opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            Armed with concepts, we carefully design and refine every detail to
            align with your vision and goals.
          </motion.p>
        </div>

        <div className="lower-div">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} // 👈 THIS fixes the repeated animation
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="flex gap-10"
          >
            <SmallBoxOne
              number="1"
              heading="Create your free account today"
              description="Get started quickly by creating a free account with just your email address."
              capsuleColor="#f9eb57"
            />

            <SmallBoxOne
              number="2"
              heading="Customize and improve your experience"
              description="Discover our user-friendly customization tools. Designs, add your personal flair."
              capsuleColor="#c6f56f"
            />

            <SmallBoxOne
              number="3"
              heading="Accelerate the growth of your business"
              description="Watching your vision come to life as a digital masterpiece."
              capsuleColor="#83e7ee"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Main02;
