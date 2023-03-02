import React, { useEffect } from "react";
import Footer from "../../LandingPage/Footer/Footer";
import Header from "../../LandingPage/Header/Header";

const HyperLocal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="lead-cap">
        <div className="lead-top">
          <p>App</p>
          <h1>
            Complex food delivery system developed with modern technology and
            cutting-edge tools helps LazyUrban connect customers and restaurants
          </h1>
        </div>
        <div className="lead-img">
          <div className="lead-creator">
            <img src="/img/blog/leadCap/creator.png" alt="" />
            <p>By Aniket Das</p>
            <p className="lead-middle">Published on August 07, 2021</p>
            <p>2 min read</p>
          </div>
          <img src="/img/blog/hyper-local/slogan-bg1.webp" alt="" />
        </div>
        <div className="lead-content">
          <div className="lead-flex">
            <p>
              LazyUrban is a food delivery service that approached our team for
              the development of a hyperlocal food delivery system. The system
              was designed to connect customers with local restaurants and
              facilitate the delivery of food to their doorstep.
              <br />
              <br />
              Our team developed a complex system that included a partner app
              for restaurants, a delivery app for delivery partners, and a
              customer-facing app for placing orders. The partner app allowed
              restaurants to manage their menus, track orders, and communicate
              with customers. The delivery app allowed delivery partners to
              accept and track orders, and the customer app allowed customers to
              place orders and track the status of their deliveries.
              <br />
              <br />
              The system also featured an order management system that allowed
              restaurants to manage their orders and track the status of
              deliveries in real-time. This helped to ensure that orders were
              fulfilled efficiently and in a timely manner.
              <br />
              <br />
              To ensure the smooth operation of the system, we used modern
              technology and cutting-edge tools to develop the apps and systems.
              We also implemented robust security measures to protect the
              sensitive data of the users.
            </p>
            <h1>
              Hyper-local food delivery system developed by our team boosts
              reach and sales for LazyUrban through complex partner, delivery,
              and customer apps
            </h1>

            <p>
              After the development of the system was completed, we successfully
              deployed the apps and systems. The system was well-received by
              both customers and restaurants, and it helped LazyUrban expand
              their reach and increase their sales.
              <br />
              <br />
              To promote the system and drive traffic to it, we used a
              combination of online advertising and social media marketing. This
              included running targeted ads on platforms such as Google AdWords
              and Facebook, as well as promoting the system on the client's
              social media channels.
              <br />
              <br />
              Overall, the project was a success. The hyperlocal food delivery
              system developed by our team helped LazyUrban connect customers
              with local restaurants and facilitate the delivery of food to
              their doorstep. The use of modern technology and cutting-edge
              tools ensured that the system was reliable and efficient. The
              successful deployment of the apps and systems, along with targeted
              marketing efforts, helped the client expand their reach and
              increase their sales.
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

export default HyperLocal;
