"use client";

import React from "react";
import "./_main04.scss";
import AppCard from "../AppCard/AppCard";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Main04 = () => {
  return (
    <main className="main04">
      <section className="for-center-main04">
        <div className="section-one">
          <div className="white-capsule-two">
            <h4>Integration</h4>
          </div>

          <h2>Link up with your favorite tools</h2>

          <p>
            We assist startups in standing out with exceptional messaging that
            effectively engages their audience.
          </p>
        </div>

        <div className="section-two">
          <div className="part-one">
            <div className="child-one">
              <AppCard
                imgSrc="/pics/zapiericon.png"
                title="Zapier"
                subtitle="Communication"
              />
            </div>

            <div className="child-two">
              <AppCard
                imgSrc="/pics/shopifyicon.png"
                title="Shopify"
                subtitle="e-commerce"
              />
            </div>

            <div className="child-three">
              <AppCard
                imgSrc="/pics/slackicon.png"
                title="Slack"
                subtitle="Communication"
              />
            </div>
          </div>

          <div className="part-two">
            <div className="child-four">
              <AppCard
                imgSrc="/pics/snapchat.png"
                title="Snapchat"
                subtitle="Messaging App"
              />
            </div>

            <div className="child-five">
              <AppCard
                imgSrc="/pics/figma2.png"
                title="Figma"
                subtitle="Design Tool"
              />
            </div>

            <div className="child-six">
              <AppCard
                imgSrc="/pics/tiktok.png"
                title="Tiktok"
                subtitle="Video Tool"
              />
            </div>
          </div>
        </div>

        <div className="get-started-button">
          <GetStartedButton text="See in action" dark={false} />
        </div>
      </section>
    </main>
  );
};

export default Main04;
