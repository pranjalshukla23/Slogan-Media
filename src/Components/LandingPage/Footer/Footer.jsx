import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <div className="single_footer single_footer_address">
              <h4>Newsletter</h4>
              <p className="md:text-sm">
                Subscribe our newsletter and get exciting offers.
              </p>
              <div className="signup_form">
                <form action="/" className="subscribe">
                  <input
                    type="text"
                    className="subscribe__input"
                    placeholder="Enter Email Address"
                  />
                  <button type="button" className="subscribe__btn">
                    <img src="img/send.png" alt="" />
                  </button>
                </form>
              </div>
            </div>
            <h4>follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/sloganmediaindia"
                target="_blank"
              >
                <i className="fa fa-facebook fa-lg fa-fw"></i>
              </a>
              <a href="https://twitter.com/MediaSlogan" target="_blank">
                <i className="fa fa-twitter fa-lg fa-fw"></i>
              </a>
              <a
                href="https://www.instagram.com/sloganmediaindia/"
                target="_blank"
              >
                <i className="fa fa-instagram fa-lg fa-fw"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/sloganmedia/"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-lg fa-fw"></i>
              </a>
            </div>
          </div>

          <div className="footer-col col2">
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Popup trigger={<a>our services</a>}>
                  <div>
                    <Link to="/digital-media-advertisement">
                      Digital&nbsp;Media&nbsp;Advertisement
                    </Link>
                    <br />

                    <Link to="/social-media-management">
                      Social&nbsp;Media&nbsp;Management
                    </Link>
                    <br />
                    <Link to="/web-development">Website&nbsp;Development</Link>
                    <br />
                    <Link to="/branding-and-brand-management">
                      Branding&nbsp;and&nbsp;Brand&nbsp;Management
                    </Link>
                    <br />
                  </div>
                </Popup>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Plans</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col2">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">Why Slogan?</Link>
              </li>
              <li>
                <Link to="/contact">Partner with us</Link>
              </li>
              <li>
                <Link to="/career">
                  Join&nbsp;our&nbsp;team&nbsp;
                  <sup className="hiring">HIRING</sup>{" "}
                </Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col col2">
            <h4>support</h4>
            <ul>
              <li>
                <a href="/">Support Center</a>
              </li>
              <li>
                <a href="https://g.page/r/CfzlZR72mQVdEBI/review">Feedback</a>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
