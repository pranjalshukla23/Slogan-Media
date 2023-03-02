import React, { useEffect } from "react";
import Footer from "../../../LandingPage/Footer/Footer";
import Header from "../../../LandingPage/Header/Header";
import "./LeadCap.css";

const LeadCap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="lead-cap">
        <div className="lead-top">
          <p>Lead Page</p>
          <h1>
            Successful lead capture for Spray Foam Quotes through targeted
            website development and automation technology
          </h1>
        </div>
        <div className="lead-img">
          <div className="lead-creator">
            <img src="/img/blog/leadCap/creator.png" alt="" />
            <p>By Samay Paul</p>
            <p className="lead-middle">Published on November 14, 2022</p>
            <p>2 min read</p>
          </div>
          <img src="/img/blog/leadCap/blogbg.webp" alt="" />
        </div>
        <div className="lead-content">
          <div className="lead-flex">
            <p>
              Spray Foam Quotes is a service provider for spray foam insulation.
              They approached our team for the development of a landing page to
              capture leads for their business. The website was designed with
              click through buttons to engage the audience and encourage them to
              share their contact details.
              <br />
              <br />
              To streamline the lead capturing process and make it more
              efficient, our team integrated the website with automation
              platforms such as Zapier and Leads Bridge. These platforms allowed
              us to automate the transfer of leads from the website to the
              client's CRM funnel, eliminating the need for manual data entry
              and saving time and resources.
              <br />
              <br />
              The lead capturing forms on the website were designed to be
              user-friendly and easy to fill out, with clear instructions on
              what information was required. To promote the website and drive
              traffic to it, we used a combination of online advertising and
              social media marketing. This included running targeted ads on
              platforms such as Google AdWords and Facebook, as well as
              promoting the website on the client's social media channels.
            </p>
            <h1>
              Automation and targeted marketing helped get over 2 thousand Leads{" "}
            </h1>

            <p>
              Thanks to the use of automation technology and targeted marketing
              efforts, we were able to collect over 2 thousand leads through the
              landing page. This was a significant increase in leads for the
              client, and they were very happy with the results.
              <br />
              <br />
              The integration of automation platforms such as Zapier and Leads
              Bridge allowed us to streamline the lead capturing process and
              bring the leads directly into the client's CRM funnel. This helped
              to save time and resources, and allowed the client to focus on
              converting the leads into paying customers.
              <br />
              <br />
              Overall, the website development project was a success. The lead
              capturing forms on the landing page effectively collected
              information from potential customers, and the use of automation
              technology and targeted marketing efforts helped drive traffic to
              the website. As a result, the client was able to significantly
              increase their pool of leads and take their business to the next
              level.
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

            <div className="lead-done">
              <h1>Get More Done Together With US</h1>
              <p>
                Get in touch with us for your next Landing Page development
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
              <img src="/img/blog/leadCap/ice.png" alt="" />
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

export default LeadCap;
