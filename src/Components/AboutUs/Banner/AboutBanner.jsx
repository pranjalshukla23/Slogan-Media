import React, { useEffect } from "react";
import "./AboutBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Scroll from "react-scroll";

const AboutBanner = () => {
  let scroll = Scroll.animateScroll;
  const scrollToA = function () {
    scroll.scrollTo(800);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="aboutus-banner">
      <div className="aboutus-content" data-aos="fade-up">
        <div className="aboutus-body">
          <h1>About Us</h1>
          <p>
            We design branding solutions to help your business maintain a strong
            identity
          </p>
          {/* <a href="https://calendly.com/nixonlab/30min" target="_blank"> */}
          <button
            className="digital-banner-btn text-white text-2xl m-2"
            onClick={scrollToA}
            style={{ borderRadius: "8px" }}
          >
            Learn More
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
