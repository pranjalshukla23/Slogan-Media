import React, { useEffect } from "react";
import Footer from "../LandingPage/Footer/Footer";
import Header from "../LandingPage/Header/Header";
import DigitalContact from "../Services/Digital-media/ContactForm/DigitalContact";
import ContactBanner from "./Banner/ContactBanner";
import ContactBlock from "./ContactBlock/ContactBlock";
import ContactVia from "./ContactVia/ContactVia";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ContactBanner />
      <ContactVia />
      <ContactBlock />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default ContactUs;
