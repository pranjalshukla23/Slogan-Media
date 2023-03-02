import React from "react";
import "./CaseStudy.css";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div className="web-caseStudy">
      <div className="web-case-body">
        <div className="web-case-heading" data-aos="fade-right">
          <p>What we do</p>
          <h1>Our Case Studies</h1>
        </div>
        <div className="web-case-flex">
          <div className="web-case-content" data-aos="slide-up">
            <div className="web-case-img">
              <img src="img/web-dev/case/slogan-1.webp" alt="" />
            </div>
            <div className="web-case-content-heading">
              <Link to="/blog/lead">
                <h1>Lead Capture Page</h1>
              </Link>
              <p>Website</p>
            </div>
          </div>
          <div className="web-case-content" data-aos="slide-up">
            <div className="web-case-img">
              <img src="img/web-dev/case/slogan-2.webp" alt="" />
            </div>
            <div className="web-case-content-heading">
              <Link to="/blog/sales">
                <h1>Sales Panel</h1>
              </Link>
              <p>Web-App</p>
            </div>
          </div>
          <div className="web-case-content" data-aos="slide-up">
            <div className="web-case-img">
              <img src="img/web-dev/case/slogan-3.webp" alt="" />
            </div>
            <div className="web-case-content-heading">
              <Link to="/blog/ecommerce">
                <h1>eCommerce</h1>
              </Link>
              <p>App/ Website</p>
            </div>
          </div>
          <div className="web-case-content" data-aos="slide-up">
            <div className="web-case-img">
              <img src="img/web-dev/case/slogan-4.webp" alt="" />
            </div>
            <div className="web-case-content-heading">
              <Link to="/blog/apps">
                <h1>Hyper Local Delivery</h1>
              </Link>
              <p>App/ Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
