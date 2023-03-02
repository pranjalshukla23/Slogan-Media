import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../LandingPage/Header/Header";
import Footer from "../../LandingPage/Footer/Footer";
import DigitalAbout from "./About/DigitalAbout";
import DigitalApproach from "./Approach/DigitalApproach";
import Digitalbanner from "./Banner/Digitalbanner";
import DigitalStrategy from "./Strategy/DigitalStrategy";
import DigitalCase from "./CaseStudy/DigitalCase";
import DigitalMarket from "./Marketing/DigitalMarket";
import DigitalContact from "./ContactForm/DigitalContact";
import DigitalAds from "./Ads/DigitalAds";

const Digital = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Slogan:Expert Digital Media Advertising and Marketing Services
        </title>
        <meta
          name="description"
          content="Increase online sales or generate verified leads with Our Digital Media Advertising and Marketing Services"
        />
      </Helmet>
      <Header />
      <Digitalbanner />
      <DigitalAbout />
      <DigitalStrategy />
      <DigitalApproach />
      <DigitalAds />
      <DigitalCase />
      <DigitalMarket />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default Digital;
