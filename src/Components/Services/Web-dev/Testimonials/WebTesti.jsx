import React from "react";
import "./WebTesti.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const WebTesti = () => {
  const responsiveWeb = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1024: {
      items: 3,
    },
  };
  return (
    <div className="web-testi">
      <div className="web-testi-body">
        <div className="web-services-heading">
          <p>Testimonials</p>
          <h1>What the Clients Say!</h1>
        </div>
        <AliceCarousel
          mouseTracking={true}
          // infinite={true}
          // duration={400}
          // autoPlay={true}
          startIndex={0}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          responsive={responsiveWeb}
          autoPlayInterval={3000}
          controlsStrategy="alternate"
          // autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
          renderPrevButton={() => {
            return (
              <div className="alice-prev p-1 absolute top-0">
                <div className="alice-prev-inside">
                  <div className="alice-radius">
                    <i className="fa fa-chevron-left fa-fw" />
                  </div>
                </div>
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="alice-next p-1 absolute top-0">
                <div className="alice-next-inside">
                  <div className="alice-radius">
                    <i className="fa fa-chevron-right fa-fw" />
                  </div>
                </div>
              </div>
            );
          }}
          className="web-testi-flex ml-0"
        >
          <div className="web-testi-content" data-aos="slide-right">
            <div className="web-testi-para">
              <h1>“Budget Friendly”</h1>
              <p>
                The team was professional and efficient, completing the project
                on time and within budget. They took the time to understand my
                vision and brought it to life with a beautifully designed and
                user-friendly website.{" "}
              </p>
              <img
                className="web-testi-quote"
                src="img/web-dev/testimonial/quote.png"
                alt=""
              />
            </div>
            <div className="web-testi-user">
              <img src="img/web-dev/testimonial/1.png" alt="" />
              <div>
                <h1>Ankit Ray</h1>
                <p>CEO, Brevis Fashion Co, IN</p>
              </div>
            </div>
          </div>
          <div className="web-testi-content" data-aos="slide-right">
            <div className="web-testi-para">
              <h1>“Visually Stunning”</h1>
              <p>
                Throughout the process, they consistently provided a range of
                options and were always open to feedback and revisions. They
                were able to take my ideas and turn them into a cohesive,
                visually stunning website that perfectly represents my brand.
              </p>
              <img
                className="web-testi-quote"
                src="img/web-dev/testimonial/quote.png"
                alt=""
              />
            </div>
            <div className="web-testi-user">
              <img src="img/web-dev/testimonial/new2.png" alt="" />
              <div>
                <h1>Omprakash Modi</h1>
                <p>CEO, Prakash Foods, IN</p>
              </div>
            </div>
          </div>
          <div className="web-testi-content" data-aos="slide-right">
            <div className="web-testi-para">
              <h1>“Latest Technology”</h1>
              <p>
                They used their expertise to bring my vision to life, using the
                latest programming languages and technology to ensure a
                seamless, efficient development process. Their expertise on
                using modern tools and frameworks is impressive.
              </p>
              <img
                className="web-testi-quote"
                src="img/web-dev/testimonial/quote.png"
                alt=""
              />
            </div>
            <div className="web-testi-user">
              <img src="img/web-dev/testimonial/3.png" alt="" />
              <div>
                <h1>Rohit Bansal</h1>
                <p>CEO, Pepco Infotech, IN</p>
              </div>
            </div>
          </div>
          <div className="web-testi-content" data-aos="slide-right">
            <div className="web-testi-para">
              <h1>“Customer Service”</h1>
              <p>
                I recently worked with the team at Slogan on the development of
                my company's website, and I must say, their customer service was
                top-notch. From the very beginning, they were responsive,
                communicative, and always available to answer my questions and
                address my concerns.
              </p>
              <img
                className="web-testi-quote"
                src="img/web-dev/testimonial/quote.png"
                alt=""
              />
            </div>
            <div className="web-testi-user">
              <img src="img/web-dev/testimonial/4.png" alt="" />
              <div>
                <h1>Caleb Tellor</h1>
                <p>MD, Papa Chills Pizza, CA</p>
              </div>
            </div>
          </div>
        </AliceCarousel>
      </div>
    </div>
  );
};

export default WebTesti;
