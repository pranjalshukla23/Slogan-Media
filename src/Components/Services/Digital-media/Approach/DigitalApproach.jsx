import React, { useEffect } from "react";
import "./DigitalApproach.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DigitalApproach = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="digital-approach">
        <div className="digital-approach-heading">
          <h1>Our 5 Step Approach</h1>
          <p>
            Our proven step by step approach helps us get the result in shortest
            time possible
          </p>
        </div>
        <div className="digital-approach-body" data-aos="zoom-in">
          <div className="digital-approach-content">
            <img src="img/digital-media/icons/a2.png" alt="" />
            <h1>01</h1>
            <h2>Identifying the Goal</h2>
            <p>
              We will analyze your business need and understand your campaign
              goal. A campaign goal can be lead generation, page engagement,
              website purchase, or app downloads.
            </p>
          </div>
          <div className="digital-approach-content">
            <img src="img/digital-media/icons/a1.png" alt="" />
            <h1>02</h1>
            <h2>Audience Research</h2>
            <p>
              Based on your campaign goal and your competitors analysis we will
              understand your target audience and customer persona. We will try
              to understand your USP and your brand story to convey your story
              perfectly.
            </p>
          </div>
          <div className="digital-approach-content">
            <img src="img/digital-media/icons/a3.png" alt="" />
            <h1>03</h1>
            <h2>Strategy Develop</h2>
            <p>
              Based on your audience persona and campaign goal we will develop
              optimal strategy to get you the best ROI for the campaign. An
              optimal strategy allows to increase sales and achieve a
              competitive advantage.
            </p>
          </div>
          <div className="digital-approach-content">
            <img src="img/digital-media/icons/a4.png" alt="" />
            <h1>04</h1>
            <h2>Content Designing</h2>
            <p>
              Now comes the creative part where we create designs, copies and
              elements to spread your identity and brand story. Our power packed
              creative team will design creatives and designs.
            </p>
          </div>
          <div className="digital-approach-content">
            <img src="img/digital-media/icons/a5.png" alt="" />
            <h1>05</h1>
            <h2>Execution & Optimization</h2>
            <p>
              We will execute as per the strategy and based on the data and
              results we optimize the campaigns again and again until we get the
              best result and ROI. Our data driven strategy helps us determine
              optimum results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalApproach;
