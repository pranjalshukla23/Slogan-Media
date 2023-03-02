import React from "react";
import "./DigitalCase.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "font-awesome/css/font-awesome.min.css";
import { Carousel } from "react-responsive-carousel";

const DigitalCase = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 2,
    },
  };

  return (
    <>
      <div className="digital-case">
        <div className="digital-case-heading">
          <h1>Case Studies</h1>
          <p>Our open secrets for the success with some of our clients</p>
        </div>
        <div className="digital-case-body">
          <AliceCarousel
            mouseTracking={true}
            // infinite={true}
            // duration={400}
            // autoPlay={true}
            startIndex={0}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            responsive={responsive}
            autoPlayInterval={3000}
            controlsStrategy="alternate"
            // autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            renderPrevButton={() => {
              return (
                <div className="alice-prev p-1 absolute top-0">
                  <div className="alice-prev-inside">
                    <i className="fa fa-chevron-left fa-fw" />
                  </div>
                </div>
              );
            }}
            renderNextButton={() => {
              return (
                <div className="alice-next p-1 absolute top-0">
                  <div className="alice-next-inside">
                    <i className="fa fa-chevron-right fa-fw" />
                  </div>
                </div>
              );
            }}
            className="digital-case-content"
          >
            <div className="digital-case-study">
              <div className="digital-case-individual">
                <div className="digital-case-img">
                  <img src="img/digital-media/case-icons/1.webp" alt="" />
                </div>
                <h1>LAZYURBAN - App downloads</h1>
                <p>
                  We knew that our target audience would not only be open to
                  buying a new product as the analytics showed that there is
                  more of a need for reorder. Thus, we targeted both
                  simultaneously and achieved the outcome. It didn't only
                  increase their sales but also established them as a brand in
                  the market.
                </p>
              </div>
            </div>
            <div className="digital-case-study">
              <div className="digital-case-individual">
                <div>
                  <img src="img/digital-media/case-icons/2.webp" alt="" />
                </div>
                <h1>Vedicvila - Website Purchase</h1>
                <p>
                  When we were creating a website purchase campaign for this
                  organic personal care brand in India, we knew that there were
                  several factors to consider. We created omni channel campaign
                  to engage audiences and them retargeting them to purchase.
                </p>
              </div>
            </div>

            <div className="digital-case-study">
              <div className="digital-case-individual">
                <div className="digital-case-img">
                  <img src="img/digital-media/case-icons/3.webp" alt="" />
                </div>
                <h1>Spray Foam Tech - Lead Generation</h1>
                <p>
                  Our lead generation campaign for Spray Foam Tech was a huge
                  success. We used Facebook Ads and Google Ads to create an
                  audience base, then retargeted them with a lead magnet to
                  collect leads. We generated 5k+ leads with cost per lead at
                  60% cheaper than their previous campaigns.
                </p>
              </div>
            </div>
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};

export default DigitalCase;
