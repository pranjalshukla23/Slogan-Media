import React, { useState } from "react";
import "./BrandPricing.css";
import * as Scroll from "react-scroll";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import PopUi from "../../PopUi";

const BrandPricing = () => {
  let scroll = Scroll.animateScroll;

  const scrollTo = function () {
    scroll.scrollMore(600);
  };
  return (
    <>
      <div className="brand-project-start">
        <div className="brand-project-start-content">
          <h1>Let’s start your awesome project with us</h1>
          <p>
            Take your brand to the next level and differentiate yourself in the
            crowded market with our full-service brand design and management
            offerings.
          </p>
          <button className="social-about-banner-btn" onClick={scrollTo}>
            Get Started
          </button>
        </div>
      </div>

      <div className="social-pricing">
        <div className="social-pricing-body">
          <h1 className="social-pricing-title">
            Customized Pricing Options to Fit Your Business Needs
          </h1>
          <div className="social-pricing-flex">
            <div className="social-pricing-content" data-aos="fade-up">
              <div className="social-pricing-div">
                <h1>Startup</h1>
                <p className="social-pricing-div-content">
                  Great for new businesses and Startups
                </p>
                <p className="social-pricing-div-price mb-4">
                  <span className="social-pricing-inr">INR</span>
                  <span className="social-pricing-price">9990</span>
                  <span
                    className="social-pricing-month ml-3"
                    style={{ fontWeight: "500" }}
                  >
                    (USD 199)
                  </span>
                </p>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="social-price-banner-btn">
                      Get Started
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <PopUi close={close} word={"Startup Package for Brand"} />
                  )}
                </Popup>
              </div>
              <div className="social-pricing-div-check">
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Logo Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Color Scheme
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Font Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Visiting Card
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Letter Head
                </p>
              </div>
            </div>

            <div
              className="social-pricing-content social-pricing-growth"
              data-aos="fade-up"
            >
              <div className="social-pricing-div">
                <h1>Growth</h1>
                <p className="social-pricing-div-content">
                  Best for Growing business and Mid sized corporates
                </p>
                <p className="social-pricing-div-price mb-4">
                  <span className="social-pricing-inr">INR</span>
                  <span className="social-pricing-price">14990</span>
                  <span
                    className="social-pricing-month ml-3"
                    style={{ fontWeight: "500" }}
                  >
                    (USD 250)
                  </span>
                </p>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="social-price-banner-btn">
                      Get Started
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <PopUi close={close} word={"Growth Package for Brand"} />
                  )}
                </Popup>
              </div>
              <div className="social-pricing-div-check">
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Everything in Startup Package
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Brand Name
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Tag Line
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Social Elements
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Label Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Packaging Design
                </p>
              </div>
            </div>
            <div className="social-pricing-content" data-aos="fade-up">
              <div className="social-pricing-div">
                <h1>Enterprise</h1>
                <p className="social-pricing-div-content">
                  Ideal for large business and corporates
                </p>
                <p className="social-pricing-div-price mb-4">
                  <span className="social-pricing-inr ">INR</span>
                  <span className="social-pricing-price">24990</span>
                  <span
                    className="social-pricing-month ml-3 "
                    style={{ fontWeight: "500" }}
                  >
                    (USD 350)
                  </span>
                </p>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="social-price-banner-btn">
                      Get Started
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <PopUi
                      close={close}
                      word={"Enterprise Package for Brand"}
                    />
                  )}
                </Popup>
              </div>
              <div className="social-pricing-div-check">
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Everything in Growth Package
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Website UI/UX Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Domain Registration
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Brand Positioning
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Advertisement Materials
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div className="brand-logo" data-aos="fade-up">
        <img src="img/clients/7.webp" alt="" />
        <img src="img/clients/1.webp" alt="" />
        <img src="img/clients/2.webp" alt="" />
        <img src="img/clients/9.webp" alt="" />
        <img src="img/clients/6.webp" alt="" />
        <img src="img/clients/5.webp" alt="" />
        <img src="img/clients/10.webp" alt="" />
      </div>
    </>
  );
};

export default BrandPricing;
