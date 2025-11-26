"use client";
import { motion } from "framer-motion";
import React from "react";
import "./_main06.scss";
import PriceCard from "../PriceCard/PriceCard";

const Main06 = () => {
  return (
    <div className="main06">
      <section className="for-center-main06">
        <motion.div
          className="small-yellow-capsule-four"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }}
        >
          <h4>Our pricing</h4>
        </motion.div>

        <motion.h6
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }}
        >
          Select the pricing plan that best suits your needs
        </motion.h6>

        <motion.div
          className="handling-price-card"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }}
        >
          <div className="price-card-one">
            <PriceCard
              title="Simplified"
              description="For individuals and small teams with unlimited trial access."
              price="$19.00"
              perMonth="Per Month"
              buttonText="Get started"
              features={[
                { text: "Single Payment", type: "black" },
                { text: "Selling your own items", type: "gray" },
                { text: "Powerful Integration", type: "gray" },
              ]}
            />
          </div>
          <div className="price-card-two">
            <PriceCard
              title="Basic"
              description="For individuals and small teams."
              price="$3342.00"
              perMonth="Per Month"
              buttonText="Get started"
              features={[
                { text: "Unlimited Bandwidth", type: "black" },
                { text: "Promotional Tools", type: "black" },
                { text: "Single Payment", type: "black" },
                { text: "Powerful Integration", type: "black" },
                { text: "Selling your own items", type: "gray" },
                { text: "Support", type: "gray" },
              ]}
            />
          </div>

          <div className="price-card-three">
            <PriceCard
              title="Enhanced"
              description="For individuals and small teams with unlimited trial access."
              price="$4800.00"
              perMonth="Per Month"
              buttonText="Get started"
              features={[
                { text: "Selling on your own conditions", type: "black" },
                { text: "Seamless integrations", type: "black" },
                { text: "Real-time streaming", type: "gray" },
              ]}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Main06;
