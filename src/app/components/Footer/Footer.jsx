"use client";
import { motion } from "framer-motion";
import React from "react";
import "./_footer.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="gradient-pic-one" src="/pics/gradient-1.png" alt="pic1" />
      <img className="gradient-pic-two" src="/pics/gradient-2.png" alt="pic2" />
      <section className="for-center-footer">
        <div className="div-one">
          <div className="left-part-div">
            <motion.h2
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              Build a complete website using the assistance
            </motion.h2>

            <motion.h6
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              Start your free trial today and see your ideas come to life easily
              and creatively.
            </motion.h6>
          </div>

          <div className="right-part-div">
            <motion.div
              className="email-button-div"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <input
                className="enter-email-input"
                type="email"
                placeholder="Enter your email"
              />

              <div className="button">
                <GetStartedButton text="Get Started" dark={false} />
              </div>
            </motion.div>

            <div className="icons-headings">
              <motion.h5
                initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                style={{ filter: "blur(20px)" }}
              >
                <i className="ri-check-line"></i>No credit card required
              </motion.h5>

              <motion.h6
                initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                style={{ filter: "blur(20px)" }}
              >
                <i className="ri-check-line"></i>14-Day free trial
              </motion.h6>
            </div>
          </div>
        </div>

        <div className="single-line"></div>

        <div className="div-two">
          <motion.div
            className="part-one"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            style={{ filter: "blur(20px)" }}
          >
            <img src="/pics/dark-logo.svg" alt="logo" />

            <p>
              Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id
              mauris.
            </p>

            <div className="icon-div">
              <i className="ri-facebook-line"></i>

              <i className="ri-youtube-line"></i>

              <i className="ri-instagram-line"></i>

              <i className="ri-behance-line"></i>

              <i className="ri-linkedin-line"></i>
            </div>
          </motion.div>

          <div className="handling-three-div">
            <motion.div
              className="part-two"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <h3>Company</h3>

              <h6>About Us</h6>

              <h6>Career</h6>

              <h6>Case Studies</h6>

              <h6>Contact Us</h6>
            </motion.div>

            <motion.div
              className="part-three"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <h3>Support</h3>

              <h6>FAQ</h6>

              <h6>Documentation</h6>

              <h6>Tutorial</h6>

              <h6>Support</h6>
            </motion.div>

            <motion.div
              className="part-four"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              style={{ filter: "blur(20px)" }}
            >
              <h3>Legal Policies</h3>

              <h6>Terms & Conditions</h6>

              <h6>Privacy Policy</h6>

              <h6>Affiliate Policy</h6>

              <h6>Refund Policy</h6>
            </motion.div>
          </div>
        </div>

        <div className="single-line-two"></div>

        <div className="div-three">
          <p>Copyright ©NextSaaS – smart application for modern business</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
