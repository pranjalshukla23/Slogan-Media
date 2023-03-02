import React, { useEffect } from "react";
import "./SocialAbout.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Scroll from "react-scroll";

const SocialAbout = () => {
  let scroll = Scroll.animateScroll;
  const scrollToS = function () {
    scroll.scrollMore(600);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="social-about">
      <div className="social-about-body">
        <div className="social-about-content" data-aos="fade-right">
          <h1>What is Social Media Management?</h1>
          <p>
            Social media marketing is an important part of your business’s
            marketing strategy. It is a way for businesses to connect with
            customers and potential customers by providing them with content
            that is relevant to their interests. Social media marketing can be
            used to promote your company’s products and services, as well as
            build relationships with the company's audience. The goal of social
            media marketing is to create awareness about a product or service,
            raise its visibility and establish it as the expert in its field.
            <br />
            <br />
            The use of social media as a marketing tool has been around for many
            years in the form of blogging and content creation. The strategy has
            expanded to include social search, which is when companies optimize
            their content for use on popular social media platforms such as
            Twitter and Facebook. It is important for businesses to target the
            correct audience when creating content online in order to maximize
            their effectiveness. Social media management helps businesses create
            the right type of content that will resonate with their ideal
            customer base.
          </p>
          <button className="social-about-banner-btn" onClick={scrollToS}>
            Learn More
          </button>
        </div>
        <div className="social-about-img" data-aos="fade-up">
          <img src="img/social-manage/slogan-about-img.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialAbout;
