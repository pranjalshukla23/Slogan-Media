import React, { useEffect } from "react";
import "./SocialBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

const SocialBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let scroll = Scroll.animateScroll;

  const scrollTo = function () {
    scroll.scrollTo(800);
  };
  const scrollToB = function () {
    // scroll.scrollToBottom();
    scroll.scrollTo(7100);
  };

  return (
    <div className="social-banner">
      <div className="social-banner-body">
        <div className="social-banner-img" data-aon="fade-up">
          <img src="img/social-manage/slogan-banner-logo.webp" alt="" />
        </div>
        <div className="social-banner-content">
          <h1>Social Media Management</h1>
          <p>
            Connect with your audience with strategic social media management.
            Develop a social media marketing strategy that will build your
            brand, boost your exposure, amplify your SEO, and ramp up your
            business.
          </p>
          <div className="social-banner-button">
            <button className="social-banner-btn" onClick={scrollTo}>
              Learn More
            </button>
            {/* <Link to='#section1'> */}
            <button className="social-banner-btn" onClick={scrollToB}>
              Contact Us
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;
