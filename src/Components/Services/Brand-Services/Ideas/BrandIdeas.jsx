import React from "react";
import "./BrandIdeas.css";
import * as Scroll from "react-scroll";

const BrandIdeas = () => {
  let scroll = Scroll.animateScroll;
  const scrollToB = function () {
    scroll.scrollMore(800);
  };
  return (
    <div className="brand-ideas">
      <div className="brand-ideas-heading">
        <h1>
          The perfect <span style={{ color: "#2D3AA4" }}>equation</span> of
          ideas
        </h1>
      </div>
      <div className="brand-ideas-body">
        <div className="brand-ideas-img" data-aos="fade-right">
          <img src="img/brand-media/slogan-2.webp" alt="" />
          <img src="img/brand-media/slogan-3.webp" alt="" />
        </div>
        <div className="brand-ideas-content" data-aos="slide-up">
          <div className="brand-ideas-content-top">
            <h1>Expert Designing Team</h1>
            <p>
              Our team of experienced branding professionals have a track record
              of success in helping businesses of all sizes and industries build
              and grow their brands. From logo design and packaging to Ads
              design and brand management, we have the skills and expertise to
              create and implement effective branding solutions that will
              elevate your business and set you apart from the competition.
              <br />
              <br />
              Trust us to help you create a strong and memorable brand that
              resonates with your target audience.
            </p>
          </div>
          <div className="brand-ideas-bottom">
            <div className="brand-ideas-number">
              <h1>01</h1>
            </div>
            <div className="brand-ideas-bottom-content">
              <h1>Brain Storming</h1>
              <p>
                We begin by understanding your business goals, target audience,
                and competitors to get a clear picture of where you stand in the
                market.
              </p>
            </div>
          </div>
          <div className="brand-ideas-bottom">
            <div className="brand-ideas-number">
              <h1>02</h1>
            </div>
            <div className="brand-ideas-bottom-content">
              <h1>Design Process</h1>
              <p>
                Based on the research and insights gathered, we work with you to
                develop a unique and consistent brand image and message.
              </p>
            </div>
          </div>
          <div className="brand-ideas-bottom">
            <div className="brand-ideas-number">
              <h1>03</h1>
            </div>
            <div className="brand-ideas-bottom-content">
              <h1>Development</h1>
              <p>
                Once the brand elements are finalized, we help you implement
                them across all touchpoints, including your website, social
                media, and marketing materials.
              </p>
            </div>
          </div>
          <div className="brand-ideas-bottom">
            <div className="brand-ideas-number">
              <h1>04</h1>
            </div>
            <div className="brand-ideas-bottom-content">
              <h1>Final Result</h1>
              <p>
                We provide ongoing support to help you maintain and promote your
                brand consistently over time.
              </p>
            </div>
          </div>
          <button className="social-about-banner-btn" onClick={scrollToB}>
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandIdeas;
