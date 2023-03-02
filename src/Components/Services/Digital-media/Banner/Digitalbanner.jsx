import React, { useEffect } from "react";
import "./Digitalbanner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Digitalbanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="digital-banner">
        <div className="digital-banner-text">
          <h1>Digital Media Advertisement</h1>
          <p>We know what it takes to create a successful digital campaign</p>
          <a href="https://calendly.com/nixonlab/30min" target="_blank">
            <button
              className="digital-banner-btn text-white text-2xl m-2"
              style={{ borderRadius: "8px" }}
            >
              Book Free Consultation
            </button>
          </a>
        </div>
        <div className="digital-banner-img" data-aos="fade-up">
          <img src="img/digital-media/slogan-bew.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Digitalbanner;
