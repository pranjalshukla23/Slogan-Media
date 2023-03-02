import React, { useEffect } from "react";
import Footer from "../../LandingPage/Footer/Footer";
import Header from "../../LandingPage/Header/Header";
import DigitalContact from "../../Services/Digital-media/ContactForm/DigitalContact";
import BrandAbout from "./About/BrandAbout";
import BrandBanner from "./Banner/BrandBanner";
import BrandIdeas from "./Ideas/BrandIdeas";
import BrandPricing from "./Pricing/BrandPricing";
import BrandServices from "./services/BrandServices";
import BrandTestimonial from "./Testimonials/BrandTestimonial";
import { Helmet } from "react-helmet";

const Brand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Slogan:Tell your brand's story with the best branding solution
        </title>
        <meta
          name="description"
          content="Establish your brand and effectively communicate your brand story with the best branding and brand management solution"
        />
      </Helmet>
      <Header />
      <BrandBanner />
      <BrandAbout />
      <BrandServices />
      <BrandTestimonial />
      <BrandIdeas />
      <BrandPricing />
      <DigitalContact />
      <Footer />
    </>
  );
};

export default Brand;
