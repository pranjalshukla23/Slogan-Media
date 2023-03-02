import React, { useEffect } from "react";
import WebBanner from "./Banner/WebBanner";
import Footer from "../../LandingPage/Footer/Footer";
import Header from "../../LandingPage/Header/Header";
import DigitalContact from "../../Services/Digital-media/ContactForm/DigitalContact";
import WebAbout from "./About/WebAbout";
import WebExpertise from "./Expertise/WebExpertise";
import WebPricing from "./Pricing/WebPricing";
import WebServices from "./Services/WebServices";
import CaseStudy from "./CaseStudy/CaseStudy";
import WebLine from "./WebLine/WebLine";
import WebTesti from "./Testimonials/WebTesti";
import { Helmet } from "react-helmet";

const WebDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Best Web Development service from Slogan</title>
        <meta
          name="description"
          content="Get beautiful and engaging websites and landing pages from the skilled developers at Slogan."
        />
      </Helmet>
      <Header />
      <WebBanner />
      <WebAbout />
      <WebServices />
      <WebExpertise />
      <CaseStudy />
      <WebTesti />
      <WebPricing />
      <WebLine />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default WebDev;
