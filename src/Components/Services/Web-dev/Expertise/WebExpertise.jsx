import React, { useState } from "react";
import PopUi from "../../PopUi";
import "./WebExpertise.css";
import Popup from "reactjs-popup";

const WebExpertise = () => {
  const [colour, setColour] = useState("#3426FF");
  const [colour1, setColour1] = useState("#3426FF");
  const [colour2, setColour2] = useState("#3426FF");
  const [colour3, setColour3] = useState("#3426FF");
  const Discovercolor = {
    color: `${colour}`,
  };
  const Discovercolor1 = {
    color: `${colour1}`,
  };
  const Discovercolor2 = {
    color: `${colour2}`,
  };
  const Discovercolor3 = {
    color: `${colour3}`,
  };
  return (
    <div className="web-expertise">
      <div className="web-expertise-heading">
        <h1>Strong IT expertise to keep you ahead of your competitions</h1>
      </div>
      <div className="web-expertise-body">
        <div
          className="web-expertise-content"
          onMouseEnter={() => setColour("#fff")}
          onMouseLeave={() => setColour("#3426FF")}
          data-aos="slide-up"
        >
          <img src="img/web-dev/expertise/1.png" alt="" />
          <h1>Product Design</h1>
          <p className="web-expertise-content-para">
            Our expertise and guidance can bring your ideas to life and create a
            product that stands out in the market.
          </p>
          {/* <a href="" className="web-expertise-content-a"></a> */}
          <Popup
            trigger={
              <div className="web-expertise-content-a">
                <p style={Discovercolor}>Discover Now</p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <PopUi close={close} word={"Product Design in Web Development"} />
            )}
          </Popup>
        </div>
        <div
          className="web-expertise-content"
          onMouseEnter={() => setColour1("#fff")}
          onMouseLeave={() => setColour1("#3426FF")}
          data-aos="slide-up"
        >
          <img src="img/web-dev/expertise/2.png" alt="" />
          <h1>Web Development</h1>
          <p className="web-expertise-content-para">
            Our experienced developers can create custom websites and apps that
            are tailored to your specific business needs and goals.
          </p>
          {/* <a href="" className="web-expertise-content-a"><p style={Discovercolor1}>Discover Now</p></a> */}
          <Popup
            trigger={
              <div className="web-expertise-content-a">
                <p style={Discovercolor}>Discover Now</p>
              </div>
            }
            modal
            nested
          >
            {(close) => <PopUi close={close} word={"Web Development"} />}
          </Popup>
        </div>
        <div
          className="web-expertise-content"
          onMouseEnter={() => setColour2("#fff")}
          onMouseLeave={() => setColour2("#3426FF")}
          data-aos="slide-up"
        >
          <img src="img/web-dev/expertise/3.png" alt="" />
          <h1>Data Analysis</h1>
          <p className="web-expertise-content-para">
            With our expertise and guidance, you can make data-driven decisions
            that drive your business forward.
          </p>
          <Popup
            trigger={
              <div className="web-expertise-content-a">
                <p style={Discovercolor}>Discover Now</p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <PopUi close={close} word={"Data Analysis in Web Development"} />
            )}
          </Popup>
        </div>
        <div
          className="web-expertise-content"
          onMouseEnter={() => setColour3("#fff")}
          onMouseLeave={() => setColour3("#3426FF")}
          data-aos="slide-up"
        >
          <img src="img/web-dev/expertise/4.png" alt="" />
          <h1>Data Security</h1>
          <p className="web-expertise-content-para">
            With our expertise and guidance, you can feel confident that your
            data is secure and your business is protected.
          </p>
          <Popup
            trigger={
              <div className="web-expertise-content-a">
                <p style={Discovercolor}>Discover Now</p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <PopUi close={close} word={"Data Security in Web Development"} />
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default WebExpertise;
