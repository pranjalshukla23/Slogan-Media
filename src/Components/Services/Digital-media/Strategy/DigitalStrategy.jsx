import React from "react";
import "./DigitalStrategy.css";

const DigitalStrategy = () => {
  return (
    <div className="digital-strategy">
      <div className="digital-strategy-heading">
        <h1>
          Our proven Ninja Strategy will generate leads faster than you expect{" "}
        </h1>
      </div>
      <div className="digital-strategy-body">
        <div className="digital-strategy-content" data-aos="fade-down">
          <img
            className="pb-6"
            src="img/digital-media/slogan-strategy-1.webp"
            alt=""
          />
          <p>
            We have a team of experts who have deep knowledge in all aspects of
            digital marketing and we've helped over 120+ clients build their
            online presence & increase conversions with our services.
          </p>
        </div>
        <div className="digital-strategy-content" data-aos="fade-up">
          <p>
            We offer a comprehensive suite of integrated digital marketing
            services that will help you grow your business online. We can help
            you plan, manage and optimize your campaign to make the best use of
            your time and budget.
          </p>
          <img
            className="pt-6"
            src="img/digital-media/slogan-strategy-2.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalStrategy;
