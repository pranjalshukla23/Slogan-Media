import React, { useEffect } from "react";
import "./BrandAbout.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Scroll from "react-scroll";

const BrandAbout = () => {
  let scroll = Scroll.animateScroll;
  const scrollToB = function () {
    scroll.scrollMore(600);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="brand-about">
      <div className="web-about">
        <div className="web-about-body">
          <div className="web-about-img" data-aon="slide-up">
            <img src="img/web-dev/slogan-about.webp" alt="" />
            <img
              className="web-about-img-bottom"
              src="img/web-dev/slogan-about-img-bottom.webp"
              alt=""
            />
          </div>
          <div className="brand-about-content" data-aon="slide-up">
            <p className="brand-about-title">What We Are</p>
            <h1>
              Expertly crafted branding solutions to help your business thrive
            </h1>
            <p className="brand-about-para">
              Elevate your brand and stand out in the market with our
              comprehensive brand design and management services. Our team of
              experts will work with you to create a unique and consistent brand
              image and message, and will help you maintain and promote it
              across all touchpoints.
            </p>
            <button className="social-about-banner-btn" onClick={scrollToB}>
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAbout;
