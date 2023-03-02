import React, { useEffect } from "react";
import Footer from "../../LandingPage/Footer/Footer";
import Header from "../../LandingPage/Header/Header";

const EcommerceBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="lead-cap">
        <div className="lead-top">
          <p>Ecommerce</p>
          <h1>
            Vedicvila increases online sales through user-friendly and secure e
            commerce website development
          </h1>
        </div>
        <div className="lead-img">
          <div className="lead-creator">
            <img src="/img/blog/leadCap/creator.png" alt="" />
            <p>By Aniket Das</p>
            <p className="lead-middle">Published on August 07, 2021</p>
            <p>2 min read</p>
          </div>
          <img src="/img/blog/ecommerce/slogan-bg.webp" alt="" />
        </div>
        <div className="lead-content">
          <div className="lead-flex">
            <p>
              Vedicvila is a personal care brand that approached our team for
              the development of an e commerce website to sell their products
              online. They wanted a platform that was user-friendly, secure, and
              able to handle a large volume of sales.
              <br />
              <br />
              Our team used high-end technology to develop the e commerce
              website and inventory management system for Vedicvila. We made
              sure that the platform was easy to use and navigate, with a clean
              and visually appealing design.
              <br />
              <br />
              To enhance the security of the platform, we implemented several
              measures such as SSL encryption and secure payment gateways. We
              integrated payment gateways such as Stripe and Razorpay to allow
              customers to make payments seamlessly and securely. We also
              implemented robust fraud detection systems to prevent unauthorized
              transactions and protect the interests of both the client and the
              customers.
            </p>
            <h1>
              High-end technology and secure payment gateways help Vedicvila
              achieve significant increase in online sales through user-friendly
              ecommerce website development.
            </h1>

            <p>
              In addition to the ecommerce website, we also developed an
              inventory management system for the client. This system allowed
              them to track the stock levels of their products in real-time and
              place orders for new stock when needed. This helped them to
              maintain an optimal level of inventory and avoid running out of
              stock or overstocking.
              <br />
              <br />
              To promote the ecommerce website and drive traffic to it, we used
              a combination of online advertising and social media marketing.
              This included running targeted ads on platforms such as Google
              AdWords and Facebook, as well as promoting the website on the
              client's social media channels.
              <br />
              <br />
              Overall, the ecommerce website development project was a success.
              The platform was user-friendly, secure, and able to handle a large
              volume of sales. The integration of payment gateways such as
              Stripe and razorpay made the payment process seamless for
              customers. The use of online advertising and social media
              marketing helped drive traffic to the website and increase sales.
              As a result, Vedicvila was able to significantly increase their
              online sales and reach a wider audience.
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

            <div className="lead-done" style={{ backgroundColor: "#4D6AB5" }}>
              <h1>Get More Done Together With US</h1>
              <p>
                Get in touch with us for your next e commerce development
                Project
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

export default EcommerceBlog;
