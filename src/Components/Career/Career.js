import React, { useEffect } from "react";
import Footer from "../LandingPage/Footer/Footer";
import Header from "../LandingPage/Header/Header";
import DigitalContact from "../Services/Digital-media/ContactForm/DigitalContact";
import CareerBetween from "./Between/CareerBetween";
import HeadCareer from "./Head/HeadCareer";
import Positions from "./Positions/Positions";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeadCareer />
      <CareerBetween />
      <Positions />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default Career;
