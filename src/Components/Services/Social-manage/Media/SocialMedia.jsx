import React, { useEffect } from "react";
import "./SocialMedia.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialMedia = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="social-media">
      <div className="social-media-body">
        <div className="social-media-content" data-aos="fade-right">
          <h1>Elevating Your Presence on Popular Social Media Platforms</h1>
          <p>
            We understand that each social media platform serves a unique
            purpose and caters to a specific audience. With this in mind, we
            collaborate with you to create custom content that aligns with the
            aesthetic and purpose of each major social media platform, ensuring
            that your brand stands out and effectively reaches your target
            audience.
          </p>
        </div>
        <div className="social-media-img" data-aos="fade-up">
          <img src="img/social-manage/social-icons/1.png" alt="" />
          <img src="img/social-manage/social-icons/2.png" alt="" />
          <img src="img/social-manage/social-icons/3.png" alt="" />
          <img src="img/social-manage/social-icons/4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
