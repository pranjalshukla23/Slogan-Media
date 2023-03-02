import React, { useEffect } from "react";
import "./SocialPartner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialPartner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="social-partner">
      <div className="social-partner-body" data-aos="fade-right">
        <div className="social-partner-heading">
          <h1>
            We have
            <hr />
            partnered
            <hr />
            with the bests
          </h1>
        </div>
        <div className="social-partner-top">
          <img src="img/social-manage/social-partners/1.png" alt="" />
          <img src="img/social-manage/social-partners/2.png" alt="" />
        </div>
      </div>
      <div className="social-partner-bottom" data-aos="fade-up">
        <img src="img/social-manage/social-partners/3.png" alt="" />
        <img src="img/social-manage/social-partners/4.png" alt="" />
      </div>
    </div>
  );
};

export default SocialPartner;
