import React, { useEffect } from "react";
import "./ServicesWeProvide.css";

const ServicesWeProvide = () => {
  return (
    <div className="servicesProvide">
      <div className="servicesProvide-heading">
        <h1>What We Can Help You With</h1>
      </div>
      <ul id="Grid">
        <div className="servicesProvide-div">
          <li>
            <div className="front">
              <img src="img/services/1.png" alt="" />
              <h2>Social Media Advertisement</h2>
              <p>
                SMA is the use of social media—the platforms on which users
                build social networks and share information—to build a company's
                brand, increase sales, and drive website traffic.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/2.png" alt="" />
              <h2>Search Engine Advertisement</h2>
              <p>
                SEA allows you to directly display your paid ads on search
                results and Website on various search engines, like Google,
                Bing, and Yahoo
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/3.png" alt="" />
              <h2>Branding & Brand Management</h2>
              <p>
                Brand management is a concept which deals with strategizing and
                evaluating brands in terms of brand positioning, target
                customers, brand perception and brand image
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/4.png" alt="" />
              <h2>
                Campaign <br /> Designing
              </h2>
              <p>
                An advertising campaign is a specifically designed strategy that
                is carried out across different mediums in order to achieve
                desired results such as increased brand awareness or increased
                sales.
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/5.png" alt="" />
              <h2>
                Email <br /> Marketing
              </h2>
              <p>
                Our email marketing service is an excellent way to reach your
                audience. We will make them aware of new products and discounts,
                keep them engaged with special offers, or educate them on the
                value of your brand.
              </p>
            </div>
          </li>
        </div>
        <div className="servicesProvide-div">
          <li>
            <div className="front">
              <img src="img/services/6.png" alt="" />
              <h2>
                UI/UX <br /> Designing
              </h2>
              <p>
                UI/UX design is not just about creating a beautiful site. We
                design to help your customers understand their requirements,
                finding what they need, and achieving their goals - easily!
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/7.png" alt="" />
              <h2>Sales Funnel Optimization</h2>
              <p>
                With Sales Funnel optimization, we create optimized funnels to
                fine-tune a sales or marketing process and its stages for the
                highest acquisition, conversion, and retention of prospective
                customers.
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/8.png" alt="" />
              <h2>
                CRM <br /> Automation
              </h2>
              <p>
                We automate your CRM to save valuable time and produce greater
                ROI by streamlining manual tasks, like mail firing, follow up
                etc. thereby making your customer life easier.
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/9.png" alt="" />
              <h2>Website & Landing Page Development</h2>
              <p>
                A website is where your audience will find you, and a landing
                page is the first step to conversion for your visitor. We create
                data-driven and descriptive web pages for your customers to
                engage and convert.
              </p>
            </div>
          </li>
          <li>
            <div className="front">
              <img src="img/services/10.png" alt="" />
              <h2>E-Commerce Management</h2>
              <p>
                SEA allows you to directly display your paid ads on search
                results and Website on various search engines, like Google,
                Bing, and Yahoo
              </p>
            </div>
            {/* <div className="back">
                        SMA is the use of social media—the platforms on which users build social networks and share information—to build a company's brand, increase sales, and
                        </div> */}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ServicesWeProvide;
