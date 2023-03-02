import React, { useState, useEffect } from "react";
import "./HeroBanner.css";
import * as Scroll from "react-scroll";

const HeroBanner = () => {
  let scroll = Scroll.animateScroll;
  const scrollToL = function () {
    scroll.scrollTo(750);
  };

  const items = [
    { name: "Automation" },
    { name: "Sales Funnel" },
    { name: "Growth Hacking" },
    { name: "Digital Marketing" },
    { name: "Campaign Desigining" },
    { name: "Brand Management" },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setCurrentItemIndex((currentItemIndex + 1) % items.length),
      400
    );
    return () => {
      clearInterval(id);
    };
  }, [currentItemIndex]);

  return (
    <>
      <div className="HeroBanner">
        <div className="Hero-content">
          <h1 className="font-medium">{items[currentItemIndex].name}</h1>
          <p>
            Hack the Growth for your business. Our data driven strategies will
            help achieve your goal in shortest time possible.{" "}
          </p>
          <button onClick={scrollToL}>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
