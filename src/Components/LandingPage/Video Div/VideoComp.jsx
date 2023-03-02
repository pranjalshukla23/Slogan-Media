import React, { useEffect } from "react";
import "./VideoComp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const VideoComp = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const options = {
  //     loop: true,
  //     margin: 0,
  //     nav: true,
  //     animateIn: "bounceInRight",
  //     animateOut: "bounceOut",
  //     dots: true,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       768: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 3,
  //       },
  //     }
  //   }

  return (
    <>
      <div className="video-div flex">
        <div className="youtube-video">
          <iframe
            src="https://www.youtube.com/embed/M_hC59-f3SA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-text">
          <Carousel
            className="owl-carousel"
            autoPlay={true}
            interval="3000"
            infiniteLoop={true}
          >
            <div className="carousal-box">
              <h2 className="font-semibold">
                We Go Beyond The Lead. We create customized lead nurturing &
                automated marketing systems that can grow your business.
              </h2>

              <p>
                It's not enough to simply collect leads any more, lead nurturing
                can help you build relationships with your customers while also
                providing them with relevant information, increasing both their
                trust and overall satisfaction with your company.
              </p>
            </div>
            <div className="carousal-box">
              <h2 className="font-semibold">
                We make sure your ads get to the right people. We optimize your
                ads and landing page to get the best ROI and most profit.
              </h2>
              <p>
                Setting up an ad campaign is an extremely effective way to get
                more leads, but it's not enough. You still need to configure
                your ads optimally and optimize your landing pages. Nothing else
                matters if you can't get the lead to fulfill their part in the
                process.
              </p>
            </div>
            <div className="carousal-box">
              <h2 className="font-semibold">
                We collect and analyze data from your campaign to understand the
                results and make strategic decisions to increase result.
              </h2>
              <p>
                Data analysis will give you a clear understanding of the
                effectiveness of your campaign and the kind of changes that are
                necessary in order to have a successful campaign. Out data
                driven approach makes your campaign better everytime with clear
                data visualization.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="band">
        {/* <img src="img/banner.png" alt="" /> */}

        <div className="band-bg ">
          <div>
            <img src="img/clients.png" alt="" />
            <h2>120+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <img src="img/world.png" alt="" />
            <h2>5+</h2>
            <p>Countries</p>
          </div>
          <div>
            <img src="img/customer.png" alt="" />
            <h2>91%</h2>
            <p>Return Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComp;
