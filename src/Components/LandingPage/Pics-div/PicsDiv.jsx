import React, { useEffect, useState } from "react";
import "./PicsDiv.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const PicsDiv = () => {
  const [count, setCount] = useState(false);
  return (
    <div>
      <div className="web-line">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className="web-line-bg">
            <div>
              {/* <img src="img/clients.png" alt="" /> */}
              {count && (
                <h2>
                  <CountUp start={0} end={29} duration={2} delay={0} />
                  <span className="PicsDiv"> years</span>
                </h2>
              )}
              <p>Average Employee age</p>
            </div>
            <div>
              {/* <img src="img/world.png" alt="" /> */}
              {count && (
                <h2>
                  0.
                  <CountUp start={0} end={91} duration={2} delay={0} />
                </h2>
              )}
              <p>Employee Gender Ratio</p>
            </div>
            <div>
              {/* <img src="img/customer.png" alt="" /> */}

              {count && (
                <h2>
                  <CountUp start={0} end={130} duration={2} delay={0} />
                  <span className="PicsDiv"> years</span>
                </h2>
              )}
              <p>Collective Employee Experience</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default PicsDiv;
