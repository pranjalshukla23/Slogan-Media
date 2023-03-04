import React, { useState, useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const mobile_menu = document.getElementById("mobile_menu");
  const menu_bars = document.getElementById("menu_bars");
  const menu_close = document.getElementById("menu_close");

  const mount = () => {
    console.log("clicked");
    mobile_menu.classList.toggle("hidden");
    menu_bars.classList.toggle("hidden");
    menu_close.classList.toggle("hidden");
  };

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }
  });

  return (
    <div className="header">
      <nav
        className={`flex fixed items-center pr-10 top-0 bg-white w-full z-20 ${
          show && "hidden"
        }`}
      >
        <Link to="/" className="link-header">
          <img src="img/logo.png" alt=""></img>
        </Link>

        <div className="hidden sm:flex gap-20  md:gap-8">
          <ul className="flex gap-12 items-center text-2xl font-medium header-div">
            <li>
              <Link className="py-5 block nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-5 block nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="dropdown">
              <a className="py-5 block">
                Services<i className="fa fa-caret-down fa-lg fa-fw"></i>
              </a>
              <div className="dropdown-content z-30">
                <Link to="/digital-media-advertisement">
                  Digital Media Advertisement
                </Link>
                <Link to="/social-media-management">
                  Social Media Management
                </Link>
                <Link to="/web-development">Website Development</Link>
                <Link to="/branding-and-brand-management">
                  Branding and Brand Management
                </Link>
              </div>
            </li>
            {/* <li>
                            <Link className="py-5 block" to="/">Case Studies</Link>
                        </li> */}
            <li>
              <Link className="py-5 block nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <button id="menu_btn" className="w-10 sm:hidden" onClick={mount}>
          <svg
            id="menu_bars"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>

          <svg
            id="menu_close"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-x hidden"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        <div
          id="mobile_menu"
          className=" absolute top-full bg-white right-10 left-10 hidden z-20"
        >
          <div className="flex flex-col gap-10 p-5 sm:hidden">
            <ul className="flex flex-col gap-2 items-center text-center">
              <li className="w-full">
                <Link className="py-5 block" to="/">
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link className="py-5 block" to="/about">
                  About Us
                </Link>
              </li>
              <li className="w-full dropdown">
                <a className="py-5 block">
                  Services<i className="fa fa-caret-down fa-lg fa-fw"></i>
                </a>
                <div className="dropdown-content z-30">
                  <Link to="/digital-media-advertisement">
                    Digital Media Advertisement
                  </Link>
                  <Link to="/social-media-management">
                    Social Media Management
                  </Link>
                  <Link to="/web-development">Website Development</Link>
                  <Link to="/branding-and-brand-management">
                    Branding and Brand Management
                  </Link>
                </div>
              </li>
              {/* <li className="w-full">
                                <Link className="py-5 block" to="/">Case Studies</Link>
                            </li> */}
              <li className="w-full">
                <Link className="py-5 block" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <a
              href="https://calendly.com/nixonlab/30min"
              className="mr-auto ml-auto"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="book-btn-sm text-white py-2 px-5"
                style={{ backgroundColor: "#6F65FA", borderRadius: "8px" }}
              >
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </nav>
      <a
        href="https://calendly.com/nixonlab/30min"
        className="header-btn "
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="book-btn text-white text-sm m-2 mr-10 fixed"
          style={{ borderRadius: "8px" }}
        >
          Schedule A Call
        </button>
      </a>
    </div>
  );
};

export default Header;
