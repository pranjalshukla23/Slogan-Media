import React, { useEffect } from "react";
import "./WebAbout.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WebAbout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="web-about">
      <div className="web-about-body">
        <div className="web-about-content">
          <div className="web-about-heading" data-aos="fade-right">
            <p className="web-about-title">About Company</p>
            <h1>We Promise High Quality Web Development Solutions</h1>
            <p className="web-about-heading-content">
              Over <span>30+</span> Projects Delivered
            </p>
          </div>

          <div className="web-about-para" data-aos="fade-up">
            <p>
              We develop beautiful, functional, engaging websites and landing
              pages that help businesses and organizations connect with their
              audiences and achieve their goals. Our team of experienced
              designers and developers work closely with our clients to
              understand their unique needs and create a custom solution that
              meets their specific requirements.
            </p>
          </div>
        </div>
        <div className="web-about-img" data-aos="fade-down">
          <img src="img/web-dev/slogan-about.webp" alt="" />
          <img
            className="web-about-img-bottom"
            src="img/web-dev/slogan-about-img-bottom.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WebAbout;
