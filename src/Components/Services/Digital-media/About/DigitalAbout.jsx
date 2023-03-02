import React, { useEffect } from "react";
import "./DigitalAbout.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Scroll from "react-scroll";

const DigitalAbout = () => {
  let scroll = Scroll.animateScroll;
  const scrollToD = function () {
    scroll.scrollMore(800);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="digital-about">
        <div className="digital-about-img">
          <img src="img/digital-media/slogan-about-digital.webp" alt="" />
        </div>
        <div className="digital-about-text" data-aos="fade-up">
          <h1>
            No matter what you're advertising, we can create a unique campaign
            to get you the best results.
          </h1>
          <p>
            We have helped businesses create their brand presence and achieve
            their goals. Our process is designed to empower your brand and
            outfit your business with the marketing tools needed to succeed.{" "}
          </p>
          <button className="digital-banner-btn" onClick={scrollToD}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalAbout;
