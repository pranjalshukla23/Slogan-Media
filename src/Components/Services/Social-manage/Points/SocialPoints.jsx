import React, { useEffect } from "react";
import "./SocialPoints.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialPoints = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="social-points">
      <div className="social-points-heading">
        <h1>
          Why is it necessary to use social media management services to
          maximize your business's potential?
        </h1>
        <p>
          There are several reasons why you should consider using a social media
          management service for your business:
        </p>
      </div>
      <div className="social-points-body">
        <div className="social-points-box" data-aos="fade-up">
          <div className="social-points-number">
            <h1>01</h1>
          </div>
          <div className="social-points-para">
            <p>
              <span>Save time and resources: </span>A social media management
              service can take over the time-consuming tasks of creating and
              scheduling posts, engaging with followers, and analyzing
              performance, freeing up your time and resources to focus on other
              areas of your business.
            </p>
          </div>
        </div>
        <div className="social-points-box" data-aos="fade-up">
          <div className="social-points-number">
            <h1>02</h1>
          </div>
          <div className="social-points-para">
            <p>
              <span>Increase reach and engagement: </span>A social media
              management service has the expertise and tools to help you reach a
              wider audience and increase engagement on your social media
              platforms. They can create targeted campaigns, identify and engage
              with influencers, and use paid advertising to reach your target
              audience.
            </p>
          </div>
        </div>
        <div className="social-points-box" data-aos="fade-up">
          <div className="social-points-number">
            <h1>03</h1>
          </div>
          <div className="social-points-para">
            <p>
              <span>Stay up-to-date with the latest trends and changes: </span>
              Social media platforms are constantly evolving, and a social media
              management service can help you stay on top of the latest trends
              and changes to ensure that you are using the most effective
              strategies to reach your audience.
            </p>
          </div>
        </div>
        <div className="social-points-box" data-aos="fade-up">
          <div className="social-points-number">
            <h1>04</h1>
          </div>
          <div className="social-points-para">
            <p>
              <span>Professional expertise: </span>A social media management
              service is staffed with professionals trained in social media
              marketing who can provide valuable insights and advice on how to
              best use social media to achieve your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPoints;
