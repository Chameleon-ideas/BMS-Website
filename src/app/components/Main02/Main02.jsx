"use client";

import React from "react";
import "./_main02.scss";
import SmallBoxOne from "../SmallBoxOne/SmallBoxOne";

const Main02 = () => {
  return (
    <main className="main02">
      <section className="for-center-main02">
        <div className="upper-div">
          <div className="white-capsule">
            <h4>How it works</h4>
          </div>

          <h2>Simple actions, limitless opportunities</h2>
          <p>
            Armed with concepts, we carefully design and refine every detail to
            align with your vision and goals.
          </p>
        </div>

        <div className="lower-div">
          <SmallBoxOne
            number="1"
            heading="Create your free account today"
            description="Get started quickly by creating a free is of account with just your email address."
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
            description="watching your vision come to life as a stunning digital masterpiece.."
            capsuleColor="#83e7ee"
          />
        </div>
      </section>
    </main>
  );
};

export default Main02;
