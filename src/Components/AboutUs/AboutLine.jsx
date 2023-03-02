import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutLine = () => {
  const [count, setCount] = useState(false);

  return (
    <div className="web-line">
      {/* <img src="img/banner.png" alt="" /> */}
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
                <span
                  classname="sm:text-xs"
                  style={{ fontSize: "18px", fontWeight: "normal" }}
                >
                  years
                </span>
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
                <CountUp start={0} end={35} duration={2} delay={0} />+
              </h2>
            )}
            <p>Skilled Experts</p>
          </div>
          <div>
            {/* <img src="img/customer.png" alt="" /> */}
            {count && (
              <h2>
                <CountUp start={0} end={100} duration={2} delay={0} />%
              </h2>
            )}
            <p>Remote Team</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default AboutLine;
