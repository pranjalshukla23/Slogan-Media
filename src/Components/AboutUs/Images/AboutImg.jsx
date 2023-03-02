import React from "react";
import "./AboutImg.css";

const AboutImg = () => {
  return (
    <div className="about-img">
      <div className="about-img-body">
        <div className="about-img-heading">
          <h1>Create a Truly Unique Experience</h1>
        </div>
        <div className="about-img-content">
          <div className="about-img-flex">
            <div className="about-img-inside" data-aos="slide-right">
              <div className="about-img-container">
                <img src="img/about/slogan-1.webp" alt="" />
                <p>Mission and Vision</p>
              </div>
              <div className="about-img-para">
                <p>
                  Our mission is to help businesses succeed in the digital world
                  through expert digital marketing services, delivering
                  measurable results and ROI. Our vision is to be the leading
                  digital marketing agency, known for our transparency,
                  accountability, and commitment to excellence. We aim to be a
                  trusted partner for our clients, helping them achieve their
                  business goals and succeed in an increasingly digital world.
                </p>
              </div>
            </div>
            <div className="about-img-inside">
              <div className="about-img-container">
                <img src="img/about/slogan-2.webp" alt="" />
                <p>Our History</p>
              </div>
              <div className="about-img-para">
                <p>
                  We started with a dream to transform businesses and help them
                  harness the power of digital media and e-commerce. Five years
                  later, we are proud to be a Startup India registered startup
                  that has successfully helped over 200 businesses grow online.
                  Our team of experts has a track record of delivering
                  measurable results and driving ROI for our clients through a
                  variety of digital marketing services.
                </p>
              </div>
            </div>
          </div>
          <div className="about-img-flex">
            <div className="about-img-inside" data-aos="slide-right">
              <div className="about-img-container">
                <img src="img/about/slogan-3.webp" alt="" />
                <p>Expert Team</p>
              </div>
              <div className="about-img-para">
                <p>
                  Our team includes experienced professionals who are
                  knowledgeable in search engine optimization (SEO),
                  pay-per-click (PPC) advertising, social media marketing, email
                  marketing, content marketing, and more. We are constantly
                  learning and staying up-to-date on the latest trends and
                  techniques in the industry, ensuring that we are always
                  providing the best possible service.
                </p>
              </div>
            </div>
            <div className="about-img-inside" data-aos="slide-up">
              <div className="about-img-container">
                <img src="img/about/slogan-4.webp" alt="" />
                <p>Our Approach</p>
              </div>
              <div className="about-img-para">
                <p>
                  We believe that data and analytics are key to understanding
                  the effectiveness of our marketing efforts and continuously
                  improving and optimizing our strategies. We use a variety of
                  tools and techniques to gather, analyze, and interpret data to
                  give ourselves a data driven approach. We use this data to
                  inform our decision-making and ensure that our marketing
                  efforts are aligned with our clients' business goals and
                  objectives to get best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImg;
