import React, { useState } from "react";
import "./WebPricing.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import PopUi from "../../PopUi";

const WebPricing = () => {
  return (
    <div className="web-pricing">
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
                  Great for portfolio websites, personal websites or simple
                  Landing Pages. Optimized for mobile devices.
                </p>
                <p className="social-pricing-div-price">
                  <span className="social-pricing-inr">INR</span>
                  <span className="social-pricing-price">15990</span>
                  <span
                    className="social-pricing-month"
                    style={{ fontWeight: "500" }}
                  >
                    ( USD 300)
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
                      word={"Startup Package for Web Development"}
                    />
                  )}
                </Popup>
              </div>
              <div className="social-pricing-div-check">
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Up to 5 Pages
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Mobile Optimized
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Shared Server
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />1 Business Email
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Custom Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Google Analytics
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
                  Best for Dynamic websites with complex functions and 5+ pages.
                  All device responsive and search engine optimized.
                </p>
                <p className="social-pricing-div-price">
                  <span className="social-pricing-inr">INR</span>
                  <span className="social-pricing-price">24990</span>
                  <span
                    className="social-pricing-month"
                    style={{ fontWeight: "500" }}
                  >
                    ( USD 500)
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
                      word={"Growth Package for Web Development"}
                    />
                  )}
                </Popup>
              </div>
              <div className="social-pricing-div-check">
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Up to 10 Pages
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  All device Optimized
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Shared Server
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />2 Business Email
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Custom Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Google Analytics
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  SEO Semantic Html Code
                </p>
              </div>
            </div>
            <div className="social-pricing-content" data-aos="fade-up">
              <div className="social-pricing-div">
                <h1>Enterprise</h1>
                <p className="social-pricing-div-content">
                  Ideal for eCommerce business with payment gateway, admin panel
                  and connected Apps.
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
                      word={"Enterprise Package for Web Development"}
                    />
                  )}
                </Popup>
              </div>
              <div className="social-pricing-div-check">
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Up to 20 Pages
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  All device Optimized
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Dedicated Server
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />5 Business Email
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Custom Design
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  Google Analytics
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  SEO Semantic Html Code
                </p>
                <p>
                  <i className="fa fa-check fa-sm fa-fw" />
                  On page optimization
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WebPricing;
