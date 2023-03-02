import React, { useState } from "react";
import "./BrandServices.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import PopUi from "../../PopUi";

const BrandServices = () => {
  return (
    <div className="brand-services">
      <div className="brand-services-body">
        <div className="brand-services-heading">
          <p>What We Do</p>
          <h1>Brand Builders. Brand Managers.</h1>
        </div>
        <div className="brand-services-content">
          <div className="brand-services-top" data-aos="zoom-in">
            <div className="brand-services-box">
              <img src="img/brand-media/icons/slogan-1.png" alt="" />
              <h1>Brand Identity</h1>
              <p>Creating a unique and consistent brand image and message.</p>

              <Popup
                trigger={
                  <button className="social-about-banner-btn">
                    Discover More
                  </button>
                }
                modal
                nested
              >
                {(close) => <PopUi close={close} word={"Brand Identity"} />}
              </Popup>
            </div>
            <div className="brand-services-box">
              <img src="img/brand-media/icons/slogan-2.png" alt="" />
              <h1>Branding strategy</h1>
              <p>
                Developing a comprehensive plan for building and promoting your
                brand.
              </p>
              <Popup
                trigger={
                  <button className="social-about-banner-btn">
                    Discover More
                  </button>
                }
                modal
                nested
              >
                {(close) => <PopUi close={close} word={"Branding strategy"} />}
              </Popup>
            </div>
            <div className="brand-services-box">
              <img src="img/brand-media/icons/slogan-3.png" alt="" />
              <h1>Packaging Design</h1>
              <p>
                Designing packaging that effectively represents and presents a
                product.
              </p>
              <Popup
                trigger={
                  <button className="social-about-banner-btn">
                    Discover More
                  </button>
                }
                modal
                nested
              >
                {(close) => <PopUi close={close} word={"Packaging Design"} />}
              </Popup>
            </div>
          </div>
          <div className="brand-services-top" data-aos="zoom-in">
            <div className="brand-services-box">
              <img src="img/brand-media/icons/slogan-4.png" alt="" />
              <h1>Collateral Design</h1>
              <p>
                Designing marketing materials like brochures and business cards
                to support the Brand
              </p>
              <Popup
                trigger={
                  <button className="social-about-banner-btn">
                    Discover More
                  </button>
                }
                modal
                nested
              >
                {(close) => <PopUi close={close} word={"Collateral Design"} />}
              </Popup>
            </div>
            <div className="brand-services-box">
              <img src="img/brand-media/icons/slogan-5.png" alt="" />
              <h1>Ads Design</h1>
              <p>
                Designing effective advertisements that capture attention and
                effectively communicate the desired message
              </p>
              <Popup
                trigger={
                  <button className="social-about-banner-btn">
                    Discover More
                  </button>
                }
                modal
                nested
              >
                {(close) => <PopUi close={close} word={"Ads Design"} />}
              </Popup>
            </div>
            <div className="brand-services-box">
              <img src="img/brand-media/icons/slogan-6.png" alt="" />
              <h1>UI/UX Design</h1>
              <p>
                Designing intuitive and user-friendly interfaces for websites
                and Apps to enhance the user experience.
              </p>
              <Popup
                trigger={
                  <button className="social-about-banner-btn">
                    Discover More
                  </button>
                }
                modal
                nested
              >
                {(close) => <PopUi close={close} word={"UI/UX Design"} />}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandServices;
