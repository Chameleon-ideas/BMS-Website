"use client";

import React from "react";
import "./_main06.scss";
import PriceCard from "../PriceCard/PriceCard";

const Main06 = () => {
  return (
    <div className="main06">
      <section className="for-center-main06">
        <div className="small-yellow-capsule-four">
          <h4>Our pricing</h4>
        </div>

        <h6>Select the pricing plan that best suits your needs</h6>

        <div className="handling-price-card">
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
        </div>
      </section>
    </div>
  );
};

export default Main06;
