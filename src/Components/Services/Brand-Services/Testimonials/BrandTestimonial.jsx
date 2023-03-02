import React from "react";
import "./BrandTestimonial.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import * as Scroll from "react-scroll";

const BrandTestimonial = () => {
  let scroll = Scroll.animateScroll;
  const scrollToB = function () {
    scroll.scrollMore(600);
  };
  const responsiveSop = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1024: {
      items: 2,
    },
  };

  return (
    <div className="brand-testi">
      <div className="brand-testi-heading">
        <h1 data-aos="slide-right">
          Building brands in culture,
          <br />
          Building culture in brands
        </h1>
        <p data-aos="slide-right">
          Managing and maintaining the consistent representation of a brand
          across all touchpoints to maintain its integrity and reputation.
        </p>
      </div>
      <div className="brand-testi-div" data-aos="fade-up">
        <div className="brand-testi-body">
          <div className="brand-testi-body-head">
            <p>Testimonials</p>
            <h1>Story happy people use our service.</h1>
            <a
              href="https://www.designrush.com/agency/profile/slogan"
              target="_blank"
            >
              <button className="social-about-banner-btn" onClick={scrollToB}>
                Rate Us On Design Rush
              </button>
            </a>
          </div>

          <AliceCarousel
            mouseTracking={true}
            // infinite={true}
            // duration={400}
            // autoPlay={true}
            startIndex={0}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            responsive={responsiveSop}
            autoPlayInterval={3000}
            controlsStrategy="alternate"
            // autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            renderPrevButton={() => {
              return (
                <div className=" alice-prev p-1 absolute top-0">
                  <div className="alice-prev-inside">
                    <i className="fa fa-chevron-left fa-fw" />
                  </div>
                </div>
              );
            }}
            renderNextButton={() => {
              return (
                <div className=" alice-next p-1 absolute top-0">
                  <div className="alice-next-inside">
                    <i className="fa fa-chevron-right fa-fw" />
                  </div>
                </div>
              );
            }}
            className="brand-testi-carousel"
          >
            <div className="brand-testi-card">
              <div className="brand-testi-carousel-top">
                <h1>“Beyond Expectation”</h1>
                <p>
                  I recently hired the team at Slogan to design of my company's
                  logo, and I must say, the results were beyond my expectations.
                  The team took the time to understand my company's brand and
                  goals, and used their expertise to create a range of logo
                  options that truly captured the essence of my business.
                </p>
              </div>
              <div className="brand-testi-carousel-bottom">
                <h1>Prasant Giri</h1>
                <p>Director, The Happy Times</p>
              </div>
            </div>
            <div className="brand-testi-card">
              <div className="brand-testi-carousel-top">
                <h1>“Understand audience”</h1>
                <p>
                  They are designing the Advertisement materials for my company
                  for more than a year now and every time they surprise me with
                  their designing skill and commitment to work. They understand
                  the business and understand the market and audience taste.
                </p>
              </div>
              <div className="brand-testi-carousel-bottom">
                <h1>Adrian Prez</h1>
                <p>MD, Spray Foam Tech, UK</p>
              </div>
            </div>
            <div className="brand-testi-card">
              <div className="brand-testi-carousel-top">
                <h1>“Excellent Service’’</h1>
                <p>
                  From the very beginning, the team took the time to understand
                  my company's brand and marketing goals, and used their
                  expertise to create a range of designs that truly captured the
                  essence of my business. They were open to feedback and
                  revisions, and consistently provided excellent customer
                  service.
                </p>
              </div>
              <div className="brand-testi-carousel-bottom">
                <h1>Harbazz Singh</h1>
                <p>MD, Realtomation, IN</p>
              </div>
            </div>
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default BrandTestimonial;
