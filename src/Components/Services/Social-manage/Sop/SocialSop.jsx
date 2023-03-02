import React, { useEffect } from "react";
import "./SocialSop.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialSop = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsiveSop = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

  return (
    <div className="social-sop">
      <div className="social-sop-body">
        <div className="social-sop-title">
          <h1>Our SOP for Social Media Management and Marketing</h1>
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
              <div className="social-sop alice-prev p-1 absolute top-0">
                <div className="alice-prev-inside">
                  <i className="fa fa-chevron-left fa-fw" />
                </div>
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="social-sop alice-next p-1 absolute top-0">
                <div className="alice-next-inside">
                  <i className="fa fa-chevron-right fa-fw" />
                </div>
              </div>
            );
          }}
          className="social-sop-content"
        >
          <div className="social-sop-div">
            <img src="img/social-manage/sop/1.png" alt="" />
            <h2>Establish Objectives</h2>
            <p>
              Let’s sit down and examine how social media marketing can support
              your business goal.
            </p>
          </div>
          <div className="social-sop-div">
            <img src="img/social-manage/sop/2.png" alt="" />
            <h2>Editorial Calendar</h2>
            <p>
              Through a collaborative research process, we’ll identify the
              best-fit topics in an editorial calendar.
            </p>
          </div>
          <div className="social-sop-div">
            <img src="img/social-manage/sop/3.png" alt="" />
            <h2>Writing & Editing</h2>
            <p>
              Our social media specialists combine art and science to create
              compelling social media posts that resonate.
            </p>
          </div>
          <div className="social-sop-div">
            <img src="img/social-manage/sop/4.png" alt="" />
            <h2>Graphic Design</h2>
            <p>
              Our social media specialists design engaging, eye-catching
              graphics and/or videos.
            </p>
          </div>
          <div className="social-sop-div">
            <img src="img/social-manage/sop/5.png" alt="" />
            <h2>Publication & Promotion</h2>
            <p>
              We publish posts on your profiles, and optionally support it with
              engagement, boosted posts, or paid campaigns.
            </p>
          </div>
          <div className="social-sop-div">
            <img src="img/social-manage/sop/6.png" alt="" />
            <h2>Reporting & Analysis</h2>
            <p>
              You receive a fully customized monthly report, as well as analysis
              and strategy to drive further performance.
            </p>
          </div>
        </AliceCarousel>
      </div>
    </div>
  );
};

export default SocialSop;
