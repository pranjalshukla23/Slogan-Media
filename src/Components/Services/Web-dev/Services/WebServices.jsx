import React from "react";
import "./WebServices.css";

const WebServices = () => {
  return (
    <div className="web-services">
      <div className="web-services-inside">
        <div className="web-services-heading" data-aos="fade-right">
          <p>Our Service</p>
          <h1>We offer wide range of Web-Dev services</h1>
        </div>
        <div className="web-services-body">
          <div className="web-services-row">
            <div className="web-services-content" data-aos="fade-up">
              <div className="web-services-flex">
                <img src="img/web-dev/services/1.png" alt="" />
                <h1>UI/UX Design</h1>
              </div>
              <p>
                Choose our UI/UX design services to elevate the look and feel of
                your website or application, and create a product that your
                users will love.
              </p>
            </div>
            <div className="web-services-content" data-aos="fade-up">
              <div className="web-services-flex">
                <img src="img/web-dev/services/2.png" alt="" />
                <h1>Web Development</h1>
              </div>
              <p>
                Our web development services can help bring your vision to life.
                Whether you need a simple brochure website or a complex web
                application, we got you covered.
              </p>
            </div>
            <div className="web-services-content" data-aos="fade-up">
              <div className="web-services-flex">
                <img src="img/web-dev/services/3.png" alt="" />
                <h1>Data Security</h1>
              </div>
              <p>
                Choose our data security services to ensure that your business
                is protected against cyber threats and data breaches.
              </p>
            </div>
          </div>
          <div className="web-services-row">
            <div className="web-services-content" data-aos="fade-up">
              <div className="web-services-flex">
                <img src="img/web-dev/services/4.png" alt="" />
                <h1>Landing Page</h1>
              </div>
              <p>
                We use the latest technologies and best practices to ensure that
                your landing pages are engaging, , scalable, and ready to grab
                customer details.
              </p>
            </div>
            <div className="web-services-content" data-aos="fade-up">
              <div className="web-services-flex">
                <img src="img/web-dev/services/5.png" alt="" />
                <h1>Ecommerce Management</h1>
              </div>
              <p>
                Streamline your eCommerce store and drive sales. With our
                expertise and support, you can take your business to new
                heights.
              </p>
            </div>
            <div className="web-services-content" data-aos="fade-up">
              <div className="web-services-flex">
                <img src="img/web-dev/services/6.png" alt="" />
                <h1>IT Consultation</h1>
              </div>
              <p>
                Whether you're looking to upgrade your existing systems, adopt
                new technologies, or simply want to stay informed about the
                latest trends, we can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
