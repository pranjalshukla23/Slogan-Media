import React from "react";
import "./FlowChart.css";

const FlowChart = () => {
  return (
    <div className="flowChart-div">
      <div className="flowChart-heading">
        <h1>
          We integrate marketing and sales funnels with your CRM to help you
          automate your growth
        </h1>
      </div>
      {/* <img src="img/flowChart.webp" alt="" data-aos="zoom-in" /> */}
      <div className="border-2 border-red-500 w-full  flex justify-center">
        <ul className="border-l-2 border-green-800 my-2 relative">

          <li className=" rounded-md text-start flex justify-center relative mb-16 bg-white py-4">
            <span className="border-2 rounded-full bg-blue-500 w-4 h-4 absolute top-12 -left-2"></span>
            <div className="w-40 ml-4">
              <img src="/img/facebook.png" alt="" />
            </div>
            <div className="w-40">
              <img src="/img/instagram.png" alt="" />
            </div>
          </li>
          <li className=" rounded-md text-start flex justify-between relative mb-16 bg-white">
            <span className="border-2 rounded-full bg-blue-500 w-4 h-4 absolute top-12 -left-2"></span>
            <div>
              <img src="/img/salesforce.png" alt="" />
            </div>

          </li>
          <li className=" rounded-md text-start flex justify-between relative mb-16 bg-white">
            <span className="border-2 rounded-full bg-blue-500 w-4 h-4 absolute top-12 -left-2"></span>
            <div>
              <img src="/img/google-ai.png" alt="" />
            </div>
          </li>
          <li className=" rounded-md text-start flex justify-between relative mb-16 bg-white">
            <span className="border-2 rounded-full bg-blue-500 w-4 h-4 absolute top-12 -left-2"></span>
            <div>
              <img src="/img/slack.png" alt="" />
            </div>
          </li>
            <li className=" rounded-md text-start flex justify-between relative mb-16 bg-white">
            <span className="border-2 rounded-full bg-blue-500 w-4 h-4 absolute top-24 -left-2"></span>
            <div>
              <img src="/img/hubspot.png" alt="" />
            </div>
          </li>
          <li className=" rounded-md text-start flex justify-between relative bg-white">
            <span className="border-2 rounded-full bg-blue-500 w-4 h-4 absolute top-12 -left-2"></span>
            <div>
              <img src="/img/excel.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlowChart;
