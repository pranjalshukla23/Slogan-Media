import React from "react";
import "./AboutServices.css";

const AboutServices = () => {
  return (
    <div className="about-services">
      <div className="about-services-body">
        <div className="about-services-heading">
          <h1>360° Solutions for all Digital Marketing Needs</h1>
        </div>
        <div className="about-services-content">
          <div className="about-services-flex" data-aos="zoom-in">
            <img src="img/about/slogan-icon1.png" alt="" />
            <h1>Digital Ads</h1>
            <p>
              We understand that digital advertisements are a critical component
              of any successful online marketing strategy. We work closely with
              our clients to develop customized digital ad campaigns that are
              tailored to their{" "}
            </p>
          </div>
          <div className="about-services-flex" data-aos="zoom-in">
            <img src="img/about/slogan-icon2.png" alt="" />
            <h1>Website Development</h1>
            <p>
              We offer advanced website development services to help businesses
              establish a strong online presence and reach target audience. We
              can help you build and launch websites that are visually
              appealing, user-friendly, and optimized for search engines.
            </p>
          </div>
          <div className="about-services-flex" data-aos="zoom-in">
            <img src="img/about/slogan-icon3.png" alt="" />
            <h1>Social Media Management</h1>
            <p>
              We work closely with our clients to understand their unique
              business goals and objectives, and we develop customized social
              media strategies that align with their needs. We use data and
              analytics to continually optimize and refine the campaigns
            </p>
          </div>
          <div className="about-services-flex" data-aos="zoom-in">
            <img src="img/about/slogan-icon4.png" alt="" />
            <h1>Brand Management</h1>
            <p>
              We offer brand management services to help businesses establish
              and maintain a strong, consistent brand identity. Our services
              include implementing strategies to ensure brand consistency and
              alignment with business values, mission, and target audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
