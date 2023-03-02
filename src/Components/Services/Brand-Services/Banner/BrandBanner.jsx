import React, { useEffect, useState } from "react";
import "./BrandBanner.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [count, setCount] = useState(false);
  return (
    <div className="brand-banner">
      <div className="web-banner">
        <div className="digital-banner-text">
          <h1>We create brand experiences</h1>
          <p>
            We design branding solutions to help your business maintain a strong
            identity
          </p>
          <a href="https://calendly.com/nixonlab/30min" target="_blank">
            <button
              className="digital-banner-btn text-white text-2xl m-2"
              style={{ borderRadius: "8px" }}
            >
              Book Free Consultation
            </button>
          </a>
        </div>
        <div className="brand-banner-vid">
          <div className="brand-banner-vid-div">
            <iframe
              src="https://www.youtube.com/embed/M_hC59-f3SA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="brand-count">
            <ScrollTrigger
              className="brand-justify"
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <div className="brand-count-flex">
                <div>
                  {/* <img src="img/clients.png" alt="" /> */}
                  {count && (
                    <h2>
                      <CountUp start={0} end={120} duration={2} delay={0} />+
                    </h2>
                  )}
                  <p>Happy Clients</p>
                </div>
                <div>
                  {/* <img src="img/customer.png" alt="" /> */}
                  {count && (
                    <h2>
                      <CountUp start={0} end={35} duration={2} delay={0} />
                    </h2>
                  )}
                  <p>Skilled Experts</p>
                </div>
              </div>
              <div className="brand-count-flex">
                <div>
                  {/* <img src="img/world.png" alt="" /> */}
                  {count && (
                    <h2>
                      <CountUp start={0} end={28} duration={2} delay={0} />+
                    </h2>
                  )}
                  <p>Finished Project</p>
                </div>

                <div>
                  {/* <img src="img/customer.png" alt="" /> */}
                  {count && (
                    <h2>
                      <CountUp start={0} end={107} duration={2} delay={0} />
                    </h2>
                  )}
                  <p>Media Posts</p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;
