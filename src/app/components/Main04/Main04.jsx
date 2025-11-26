"use client";
import { motion } from "framer-motion";
import React from "react";
import "./_main04.scss";
import AppCard from "../AppCard/AppCard";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Main04 = () => {
  return (
    <main className="main04">
      <section className="for-center-main04">
        <div className="section-one">
          <motion.div
            className="white-capsule-two"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            <h4>Integration</h4>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            Link up with your favorite tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            We assist startups in standing out with exceptional messaging that
            effectively engages their audience.
          </motion.p>
        </div>

        <div className="section-two">
          <div className="part-one">
            <motion.div
              className="child-one"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <AppCard
                imgSrc="/pics/zapiericon.png"
                title="Zapier"
                subtitle="Communication"
              />
            </motion.div>

            <motion.div
              className="child-two"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <AppCard
                imgSrc="/pics/shopifyicon.png"
                title="Shopify"
                subtitle="e-commerce"
              />
            </motion.div>

            <motion.div
              className="child-three"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <AppCard
                imgSrc="/pics/slackicon.png"
                title="Slack"
                subtitle="Communication"
              />
            </motion.div>
          </div>

          <div className="part-two">
            <motion.div
              className="child-four"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <AppCard
                imgSrc="/pics/snapchat.png"
                title="Snapchat"
                subtitle="Messaging App"
              />
            </motion.div>

            <motion.div
              className="child-five"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <AppCard
                imgSrc="/pics/figma2.png"
                title="Figma"
                subtitle="Design Tool"
              />
            </motion.div>

            <motion.div
              className="child-six"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <AppCard
                imgSrc="/pics/tiktok.png"
                title="Tiktok"
                subtitle="Video Tool"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="get-started-button"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }}
        >
          <GetStartedButton text="See in action" dark={false} />
        </motion.div>
      </section>
    </main>
  );
};

export default Main04;
