import React from "react";
import "./ContactBlock.css";

const ContactBlock = () => {
  return (
    <div className="contact-block">
      <div className="contact-via-heading">
        <p>Book Consultation</p>
        <h1>Serious about working with us?</h1>
      </div>
      <div className="contact-block-contant">
        <h1>
          Book a free online consultation with one of our senior executive
        </h1>
        <a
          href="https://calendly.com/nixonlab/30min"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="digital-banner-btn text-white text-2xl m-2"
            style={{ borderRadius: "8px" }}
          >
            Schedule A Call
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactBlock;
