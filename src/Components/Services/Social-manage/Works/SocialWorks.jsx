import React from "react";
import "./SocialWorks.css";
import { StackedCarousel } from "react-stacked-carousel";
import "react-stacked-carousel/dist/index.css";

const SocialWorks = () => {
  return (
    <div className="social-works">
      <div className="social-works-heading">
        <h1>Our Previous Works</h1>
      </div>
      <div className="social-works-content">
        <StackedCarousel
          autoRotate={false}
          leftButton={
            <button className="social-work-btn">
              <i className="fa fa-chevron-left fa-fw" />
            </button>
          }
          rightButton={
            <button className="social-work-btn">
              <i className="fa fa-chevron-right fa-fw" />
            </button>
          }
        >
          <div key={"child1"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-1.webp"
              alt=""
            />
          </div>
          <div key={"child2"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-2.webp"
              alt=""
            />
          </div>
          <div key={"child3"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-3.webp"
              alt=""
            />
          </div>
          <div key={"child4"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-4.webp"
              alt=""
            />
          </div>
          <div key={"child5"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-5.webp"
              alt=""
            />
          </div>
          <div key={"child6"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-6.webp"
              alt=""
            />
          </div>
          <div key={"child7"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-7.webp"
              alt=""
            />
          </div>
          <div key={"child8"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-8.webp"
              alt=""
            />
          </div>
          <div key={"child9"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-9.webp"
              alt=""
            />
          </div>
          <div key={"child10"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-10.webp"
              alt=""
            />
          </div>
          <div key={"child11"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-11.webp"
              alt=""
            />
          </div>
          <div key={"child12"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-12.webp"
              alt=""
            />
          </div>
          <div key={"child13"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-13.webp"
              alt=""
            />
          </div>
          <div key={"child14"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-14.webp"
              alt=""
            />
          </div>
          <div key={"child15"}>
            <img
              className="social-cau"
              src="img/social-manage/work/slogan-15.webp"
              alt=""
            />
          </div>
        </StackedCarousel>
      </div>
    </div>
  );
};

export default SocialWorks;
