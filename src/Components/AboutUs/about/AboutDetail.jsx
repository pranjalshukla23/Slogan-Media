import React from "react";
import "./AboutDetail.css";

const AboutDetail = () => {
  return (
    <div className="aboutus-detail">
      <div className="web-about">
        <div className="web-about-body">
          <div className="web-about-img" data-aon="slide-right">
            <img src="img/about/slogan-about1.webp" alt="" />
          </div>
          <div className="brand-about-content" data-aon="slide-up">
            <p className="brand-about-title">5 years of experience</p>
            <h1>We do what we love & we love what we do.</h1>
            <p className="brand-about-para">
              We specialize in SEO, Social Media Ads, social media marketing,
              email marketing, and content marketing. Our focus is on delivering
              measurable results and driving ROI for our clients.
            </p>
            <div className="aboutus-detail-content">
              <div className="aboutus-detail-div">
                <div className="aboutus-detail-i">
                  {" "}
                  <i className="fa fa-check fa-sm fa-fw" />{" "}
                </div>
                <div>
                  <h1 className="aboutus-detail-heading">
                    Digital Advertisements
                  </h1>
                  <p>
                    We utilize advanced targeting techniques to ensure that your
                    ads are seen by the right people at the right time. We also
                    use data and analytics to continually optimize and refine
                    your campaigns, maximizing the impact and ROI of your ad
                    spend. Whether you're looking to increase brand awareness,
                    generate leads, or drive sales, we have the expertise to
                    help you achieve your objectives through digital
                    advertisements.
                  </p>
                </div>
              </div>
              <div className="aboutus-detail-div">
                <div className="aboutus-detail-i">
                  {" "}
                  <i className="fa fa-check fa-sm fa-fw" />{" "}
                </div>
                <div>
                  <h1 className="aboutus-detail-heading">
                    Landing Pages Development
                  </h1>
                  <p>
                    We are skilled in developing high-converting landing pages
                    that are optimized for both user experience and conversion.
                    We use a variety of tactics, including keyword research,
                    on-page optimization, and call-to-action placement, to
                    improve the visibility and performance of our clients'
                    landing pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
