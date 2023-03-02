import React, { useEffect } from "react";
import Footer from "../../LandingPage/Footer/Footer";
import Header from "../../LandingPage/Header/Header";

const SalesPanel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="lead-cap">
        <div className="lead-top">
          <p>Web App</p>
          <h1>
            Streamlined sales and payment management for Spray Foam Tech through
            custom web app development
          </h1>
        </div>
        <div className="lead-img">
          <div className="lead-creator">
            <img src="/img/blog/leadCap/creator.png" alt="" />
            <p>By Samay Paul</p>
            <p className="lead-middle">Published on December 07, 2022</p>
            <p>2 min read</p>
          </div>
          <img src="/img/blog/sales/sloganbg2.webp" alt="" />
        </div>
        <div className="lead-content">
          <div className="lead-flex">
            <p>
              Spray Foam Tech is a UK-based company that provides spray foam
              insulation services. They approached our team for the development
              of a web app to streamline their sales process and manage payments
              from customers.
              <br />
              <br />
              Our team used high-end technology such as CodeIgniter, Meteor, and
              Django to create the backend and database for the platform. We
              also made sure that the platform was responsive and could be
              accessed on all devices, including smartphones and tablets.
              <br />
              <br />
              The web app included a sales pitch feature that allowed the sales
              team to present the products and services to potential customers.
              There was also a survey process in place to gather information
              from customers and understand their needs and preferences. This
              information was then used to tailor the sales pitch and provide
              customized recommendations to customers.
            </p>
            <h1>
              Custom web app development helps improve sales process and payment
              management for enhanced customer experience.
            </h1>

            <p>
              In addition, the platform featured a quotation management system
              that allowed the sales team to generate and send customized quotes
              to customers in real-time. The payment process was also integrated
              into the web app, allowing customers to make payments easily and
              securely. To ensure the smooth operation of the web app, our team
              provided ongoing support and maintenance services. This included
              fixing any technical issues that arose and making updates to the
              platform to ensure it remained up-to-date and relevant.
              <br />
              <br />
              Overall, the web app development project was a success. The
              platform helped Spray Foam Tech streamline their sales process and
              manage payments efficiently. The use of high-end technology such
              as CodeIgniter, Meteor, and Django ensured that the backend and
              database were robust and scalable. The responsive design of the
              platform also made it accessible on all devices, further
              increasing its convenience and usability. As a result, the client
              was able to significantly improve their sales process and enhance
              their customer experience.
            </p>
          </div>
          <div className="lead-popular">
            <p className="lead-popular-header">Popular Post</p>
            <div className="lead-popular-post">
              <img src="/img/pizza.png" alt="" />
              <div className="lead-popular-post-content">
                <h2>Prod</h2>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
              </div>
            </div>
            {/* <div className="lead-popular-post">
                            <img src="/img/pizza.png" alt="" />
                            <div className='lead-popular-post-content'>
                                <h2>Prod</h2>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="lead-popular-post">
                            <img src="/img/pizza.png" alt="" />
                            <div className='lead-popular-post-content'>
                                <h2>Prod</h2>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="lead-popular-post">
                            <img src="/img/pizza.png" alt="" />
                            <div className='lead-popular-post-content'>
                                <h2>Prod</h2>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div> */}

            <div className="lead-done" style={{ backgroundColor: "#0EDBCF" }}>
              <h1>Get More Done Together With US</h1>
              <p>
                Get in touch with us for your next Web App development Project
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className="lead-bottom">
          <div className="lead-bottom-head">
            <h1>
              Good or bad, we’d love to hear your thoughts. Find us on Twitter{" "}
              <span style={{ color: "blue" }}>(@twitter)</span>
            </h1>
          </div>
          <div className="lead-bottom-body">
            <p className="lead-bottom-title">
              Here are some related articles you may find interesting:
            </p>
            <div className="lead-bottom-flex">
              <img src="/img/blog/leadCap/ice.webp" alt="" />
              <div className="lead-bottom-flex-content">
                <p>Prod-4min</p>
                <p>Prod-4min</p>
                <div>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="lead-bottom-flex">
              <img src="/img/blog/leadCap/ice.webp" alt="" />
              <div className="lead-bottom-flex-content">
                <p>Prod-4min</p>
                <p>Prod-4min</p>
                <div>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="lead-bottom-flex">
              <img src="/img/blog/leadCap/ice.webp" alt="" />
              <div className="lead-bottom-flex-content">
                <p>Prod-4min</p>
                <p>Prod-4min</p>
                <div>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="lead-bottom-flex">
              <img src="/img/blog/leadCap/ice.webp" alt="" />
              <div className="lead-bottom-flex-content">
                <p>Prod-4min</p>
                <p>Prod-4min</p>
                <div>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalesPanel;
