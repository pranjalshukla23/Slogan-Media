import React, { useEffect, useState } from "react";
import "./WebLine.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const WebLine = () => {
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
                <CountUp start={0} end={120} duration={2} delay={0} />+
              </h2>
            )}
            <p>Happy Clients</p>
          </div>
          <div>
            {/* <img src="img/world.png" alt="" /> */}
            {count && (
              <h2>
                <CountUp start={0} end={28} duration={2} delay={0} />+
              </h2>
            )}
            <p>Finished Project</p>
          </div>
          <div>
            {/* <img src="img/customer.png" alt="" /> */}
            {count && (
              <h2>
                <CountUp start={0} end={35} duration={2} delay={0} />
              </h2>
            )}
            <p>Skilled Experts</p>
          </div>
          <div>
            {/* <img src="img/customer.png" alt="" /> */}
            {count && (
              <h2>
                <CountUp start={0} end={107} duration={2} delay={0} />
              </h2>
            )}
            <p>Media Posts</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default WebLine;
