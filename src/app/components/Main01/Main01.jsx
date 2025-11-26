"use client";
import { motion } from "framer-motion";
import React from "react";
import "./_main01.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Main01 = () => {
  const people = [
    {
      id: 1,
      name: "James Manwel",
      designation: "Frontend Developer",
      image: "/pics/pic1.png",
    },
    {
      id: 2,
      name: "Hitesh Kumar",
      designation: "UI/UX Designer",
      image: "/pics/pic2.png",
    },
    {
      id: 3,
      name: "Alex Stone",
      designation: "Project Manager",
      image: "/pics/pic3.png",
    },

    {
      id: 4,
      name: "Alex Stone",
      designation: "Project Manager",
      image: "/pics/pic4.png",
    },

    {
      id: 5,
      name: "Alex Stone",
      designation: "Project Manager",
      image: "/pics/pic5.png",
    },

    {
      id: 6,
      name: "Alex Stone",
      designation: "Project Manager",
      image: "/pics/pic6.png",
    },
  ];
  return (
    <main className="main01">
      <section className="for-center-main01">
        <motion.div
          className="div-part-one"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }} // ensures the filter is applied initially
        >
          <h2>Create a flawless website down to the last pixel</h2>

          <p>
            Creating a flawless website down to the last pixel means crafting a
            digital experience with exceptional attention to detail, where every
            element is perfectly aligned, visually balanced, and functionally
            seamless.
          </p>
        </motion.div>

        <motion.div
          className="div-part-two"
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          style={{ filter: "blur(20px)" }} // ensures the filter is applied initially
        >
          <div className="para-button-div">
            <p>
              Develop a fully functional website that includes engaging content
              and visuals.
            </p>
            <div className="get-started-button">
              <GetStartedButton text="Get Stared" dark={false} />
            </div>
          </div>

          <div className="parent-div">
            <div className="child-one">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>Build and launch effortlessly, no coding skills needed.</p>
            </div>

            <div className="child-two">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>Dive right into action and elevate your sales.</p>
            </div>

            <div className="child-three">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>We accelerate growth with cutting-edge digital solutions.</p>
            </div>

            <div className="child-four">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>We grasp the unique requirements of your business.</p>
            </div>
          </div>
        </motion.div>

        <div className="handling-two-big-divs">
          <motion.div
            className="div-part-three"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }} // ensures the filter is applied initially
          >
            <div className="upper-part-one">
              <div className="div-left-side">
                <div className="circle-picture-component">
                  <AnimatedTooltip items={people} />
                </div>
                <h4>Gather worldwide user data for the current</h4>
              </div>

              <div className="div-right-side">
                <div className="flex flex-col items-center">
                  {/* Circle with centered text */}
                  <div className="relative flex items-center justify-center">
                    <svg className="w-24 h-24" viewBox="0 0 36 36">
                      {/* Background ring */}
                      <path
                        d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      {/* Progress ring with animation */}
                      <path
                        className="progress-ring"
                        d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="90, 100"
                      />
                    </svg>

                    {/* Centered percentage text */}
                    <div className="absolute flex items-center justify-center">
                      <span className="text-white font-bold text-lg">95%</span>
                    </div>
                  </div>

                  {/* Capsule button below the circle */}
                  <span className="inline-block mt-3 px-4 py-1 bg-green-500 text-white text-sm rounded-full shadow-md">
                    Active User
                  </span>
                </div>
              </div>
            </div>
            <div className="lower-part-one">
              <h2>An intuitive website creation tool</h2>
              <p>
                An intuitive website creation tool is designed to simplify the
                process of building a website, making it accessible even for
                users
              </p>
            </div>
          </motion.div>

          <motion.div
            className="div-part-four"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }} // ensures the filter is applied initially
          >
            <div className="upper-part-three">
              <div className="headings-three-five">
                <h3>Curious George</h3>

                <h5>UI/UX designer</h5>
              </div>

              <div className="two-small-divs">
                <div className="icon-h4-tag-one">
                  <i className="ri-file-edit-line"></i>
                  <h4>40 Task</h4>
                </div>

                <div className="icon-h4-tag-two">
                  <i className="ri-star-s-line"></i>
                  <h4>4.7 (750 Reviews)</h4>
                </div>
              </div>
            </div>

            <div className="lower-part-four">
              <h2>Content creation powered by AI</h2>
              <p>
                Content creation powered by artificial intelligence (AI) is
                revolutionizing the way digital content is produced, curated,
                and delivered.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Main01;



