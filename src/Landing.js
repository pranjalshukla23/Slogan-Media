import React, { useEffect } from "react";

import Header from "./Components/LandingPage/Header/Header";
import Footer from "./Components/LandingPage/Footer/Footer";
import Clients from "./Components/LandingPage/Clients/Clients";
import Domains from "./Components/LandingPage/Domains/Domains";
import FlowChart from "./Components/LandingPage/flowChart/FlowChart";
import HeroBanner from "./Components/LandingPage/Hero-banner/HeroBanner";
import PicsDiv from "./Components/LandingPage/Pics-div/PicsDiv";
import ServicesWeProvide from "./Components/LandingPage/ServicesWeProvide/ServicesWeProvide";
import Testimonials from "./Components/LandingPage/Testimonials/Testimonials";
import VideoComp from "./Components/LandingPage/Video Div/VideoComp";
import Recognition from "./Components/LandingPage/Recognition/Recognition";
import { Helmet } from "react-helmet";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Slogan Media</title>
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="sloan media, agency, website development, software development, marketing"
        />
        <meta
          name="description"
          content="Expert performance marketing and growth hacking services to drive measurable results and business growth."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />

        <meta property="og:title" content="Slogan Media" />

        <meta
          property="og:description"
          content="Expert performance marketing and growth hacking services to drive measurable results and business growth"
        />

        <meta property="og:image" content="LINK TO THE IMAGE FILE" />

        <meta property="og:url" content="PERMALINK" />

        <meta property="og:site_name" content="SITE NAME" />
        <link rel="canonical" href="http://example.com/" />
      </Helmet>
      <Header />
      <HeroBanner />
      <VideoComp />
      <FlowChart />
      <ServicesWeProvide />
      <PicsDiv />
      <Clients />
      <Domains />
      <Testimonials />
      <Recognition />
      <Footer />
    </>
  );
};

export default Landing;
