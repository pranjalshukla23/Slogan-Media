import React, { useEffect } from "react";
import "./ContactVia.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactVia = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contact-via">
      <div className="contact-via-heading">
        <p>GET IN TOUCH</p>
        <h1>Get in touch with us.</h1>
      </div>
      <div className="contact-via-body">
        <div className="contact-via-flex" data-aos="zoom-in">
          <img src="img/contact/slogan-1.png" alt="" />
          <h1>Office Address</h1>
          <p>81, Aswininagar, Kolkata 700040, WB, India</p>
        </div>
        <div className="contact-via-flex" data-aos="zoom-in">
          <img src="img/contact/slogan-2.png" alt="" />
          <h1>Call Us</h1>
          <p>+91 7003964486</p>
        </div>
        <div className="contact-via-flex" data-aos="zoom-in">
          <img src="img/contact/slogan-3.png" alt="" />
          <h1>Email Us</h1>
          <p>hello@slogan.media</p>
        </div>
      </div>
    </div>
  );
};

export default ContactVia;
