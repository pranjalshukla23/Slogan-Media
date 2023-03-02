import React, { useEffect } from "react";
import "./WebBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WebBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="web-banner">
      <div className="digital-banner-text" data-aon="slide-up">
        <h1>Web Development</h1>
        <p>We Develop Customized Websites to Help You Achieve Your Goals</p>
        <a href="https://calendly.com/nixonlab/30min" target="_blank">
          <button
            className="digital-banner-btn text-white text-2xl m-2"
            style={{ borderRadius: "8px" }}
          >
            Book Free Consultation
          </button>
        </a>
      </div>
      <div className="digital-banner-img">
        <img src="img/web-dev/slogan-banner.webp" alt="" />
      </div>
    </div>
  );
};

export default WebBanner;
