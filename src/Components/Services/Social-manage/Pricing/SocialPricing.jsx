import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./SocialPricing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import PopUi from "../../PopUi";

const SocialPricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
                Great for new businesses to create the new audience base
              </p>
              <p className="social-pricing-div-price">
                <span className="social-pricing-inr">INR</span>
                <span className="social-pricing-price">8990</span>
                <span className="social-pricing-month">/month</span>
              </p>
              <p className="social-pricing-div-bill">( USD 150/ month )</p>
              <p className="social-pricing-div-bill">Billed Yearly</p>
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
                    word={"Growth Package for Social Media"}
                  />
                )}
              </Popup>
            </div>
            <div className="social-pricing-div-check">
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                10 Static posts + 2 Video posts
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Page optimization
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Hashtag optimization
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Social Media Calendar
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />2 Platforms{" "}
                <i className="fa fa-facebook fa-sm fa-fw" />
                <i className="fa fa-instagram fa-sm fa-fw" />
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
                Best for businesses who wants to create customer base and sell
                products or services via socials
              </p>
              <p className="social-pricing-div-price">
                <span className="social-pricing-inr">INR</span>
                <span className="social-pricing-price">13990</span>
                <span className="social-pricing-month">/month</span>
              </p>
              <p className="social-pricing-div-bill">( USD 250/ month )</p>
              <p className="social-pricing-div-bill">Billed Yearly</p>
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
                    word={"Growth Package for Social Media"}
                  />
                )}
              </Popup>
            </div>
            <div className="social-pricing-div-check">
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                20 Static posts + 5 Video posts
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Page optimization
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Hashtag optimization
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Social Media Calendar
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />4 Platforms{" "}
                <i className="fa fa-facebook fa-sm fa-fw" />
                <i className="fa fa-instagram fa-sm fa-fw" />
                <i className="fa fa-linkedin fa-sm fa-fw" />
                <i className="fa fa-twitter fa-sm fa-fw" />
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Monthly Report and Analysis
              </p>
            </div>
          </div>
          <div className="social-pricing-content" data-aos="fade-up">
            <div className="social-pricing-div">
              <h1>Enterprise</h1>
              <p className="social-pricing-div-content">
                Ideal for business who want to generate leads or sell products
                or services with paid Ads
              </p>
              <p className="social-pricing-div-price">
                <span className="social-pricing-strategy">
                  Discuss budget with our best strategist
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
                    word={"Enterprise Package for Social Media"}
                  />
                )}
              </Popup>
            </div>
            <div className="social-pricing-div-check">
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                30 Static posts + 10 Video posts
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Page optimization
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Hashtag optimization
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Social Media Calendar
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />6 Platforms - Depending
                on the Strategy
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Monthly Report and Analysis
              </p>
              <p>
                <i className="fa fa-check fa-sm fa-fw" />
                Ads Campaign management
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default SocialPricing;
