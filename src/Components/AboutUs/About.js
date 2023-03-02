import React, { useEffect } from "react";
import AboutBanner from "./Banner/AboutBanner";
import Footer from "../LandingPage/Footer/Footer";
import Header from "../LandingPage/Header/Header";
import DigitalContact from "../Services/Digital-media/ContactForm/DigitalContact";
import AboutImg from "./Images/AboutImg";
import AboutServices from "./Services/AboutServices";
import AboutDetail from "./about/AboutDetail";
import AboutLine from "./AboutLine";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <AboutBanner />
      <AboutDetail />
      <AboutServices />
      <AboutImg />
      <AboutLine />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default About;
