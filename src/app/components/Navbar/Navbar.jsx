"use client";

import React from "react";
import "./_navbar.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="for-center-navbar">
        <img className="img-one" src="/pics/favicon.svg" alt="favicon" />

        <div className="nav-links">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Pages">Pages</a>
          <a href="#Services">Services</a>
          <a href="#Blog">Blog</a>
          <a href="#Contact Us">Contact Us</a>
        </div>

        <div className="get-started-button">
          <GetStartedButton text="Get started" 
          dark={true} />
        </div>

         <ul className="one-burger-effect">
          <li>
            <i className="ri-menu-3-line"></i>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
