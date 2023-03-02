import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../LandingPage/Footer/Footer";
import Header from "../../LandingPage/Header/Header";
import DigitalContact from "../../Services/Digital-media/ContactForm/DigitalContact";
import SocialAbout from "./About/SocialAbout";
import SocialBanner from "./Banner/SocialBanner";
import SocialMedia from "./Media/SocialMedia";
import SocialPartner from "./Partner/SocialPartner";
import SocialPoints from "./Points/SocialPoints";
import SocialPricing from "./Pricing/SocialPricing";
import SocialSop from "./Sop/SocialSop";
import SocialWorks from "./Works/SocialWorks";

const SocialM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Slogan:Digital Media Management and Marketing Services </title>
        <meta
          name="description"
          content="Grow your business and drive measurable results with our expert digital media management and marketing services."
        />
      </Helmet>
      <Header />
      <SocialBanner />
      <SocialAbout />
      <SocialPoints />
      <SocialSop />
      <SocialMedia />
      <SocialWorks />
      <SocialPricing />
      <SocialPartner />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default SocialM;
