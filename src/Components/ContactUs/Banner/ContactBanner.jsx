import React from "react";
import "./ContactBanner.css";
import * as Scroll from "react-scroll";

const ContactBanner = () => {
  let scroll = Scroll.animateScroll;

  const scrollToC = function () {
    scroll.scrollTo(800);
  };
  return (
    <div className="contact-banner aboutus-banner">
      <div className="aboutus-content" data-aos="slide-up">
        <div className="aboutus-body">
          <h1>Contact Us</h1>
          <p>
            We are always ready to talk to you to understand your business
            needs.
          </p>
          {/* <a href="https://calendly.com/nixonlab/30min" target="_blank"> */}
          <button
            className="digital-banner-btn text-white text-2xl m-2"
            onClick={scrollToC}
            style={{ borderRadius: "8px" }}
          >
            Get Started
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
