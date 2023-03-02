import React from "react";
import "./HeadCareer.css";
import * as Scroll from "react-scroll";

const HeadCareer = () => {
  let scroll = Scroll.animateScroll;
  const scrollToA = function () {
    scroll.scrollTo(1800);
  };
  return (
    <div className="career-head">
      <div className="career-div">
        <h1>Hi, want to work with us?</h1>
        <p>
          Join our thriving team and immerse yourself in a dynamic, supportive
          work culture as you advance{" "}
        </p>
        <button onClick={scrollToA}>See Open Positions</button>
      </div>
    </div>
  );
};

export default HeadCareer;
