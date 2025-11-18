"use client";

import React from "react";
import "./_footer.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Footer = () => {
  return (
    <footer className="footer">
      <img  className="gradient-pic-one" src="/pics/gradient-1.png" alt="pic1" />
         <img className="gradient-pic-two" src="/pics/gradient-2.png" alt="pic2" />
      <section className="for-center-footer">
        <div className="div-one">
          <div className="left-part-div">
            <h2>Build a complete website using the assistance</h2>

            <h6>
              Start your free trial today and see your ideas come to life easily
              and creatively.
            </h6>
          </div>

          <div className="right-part-div">
            <div className="email-button-div">
              <input
                className="enter-email-input"
                type="email"
                placeholder="Enter your email"
              />

              <div className="button">
                <GetStartedButton text="Get Started" dark={false} />
              </div>
            </div>

            <div className="icons-headings">
              <h5>
                <i className="ri-check-line"></i>No credit card required
              </h5>

              <h6>
                <i className="ri-check-line"></i>14-Day free trial
              </h6>
            </div>
          </div>
        </div>

        <div className="single-line"></div>

        <div className="div-two">
          <div className="part-one">
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
          </div>

         <div className="handling-three-div">

           <div className="part-two">
            <h3>Company</h3>

            <h6>About Us</h6>

            <h6>Career</h6>

            <h6>Case Studies</h6>

            <h6>Contact Us</h6>
          </div>

          <div className="part-three">
            <h3>Support</h3>

            <h6>FAQ</h6>

            <h6>Documentation</h6>

            <h6>Tutorial</h6>

            <h6>Support</h6>
          </div>

          <div className="part-four">
            <h3>Legal Policies</h3>

            <h6>Terms & Conditions</h6>

            <h6>Privacy Policy</h6>

            <h6>Affiliate Policy</h6>

            <h6>Refund Policy</h6>
          </div>
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
