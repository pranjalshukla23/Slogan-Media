import React, { useEffect } from "react";
import "./Blog.css";
import { Link, Outlet } from "react-router-dom";
import Header from "../../LandingPage/Header/Header";
import Footer from "../../LandingPage/Footer/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="lead-cap">
        {/* <h1 className="Blogs-heading">Blogs</h1> */}
        <div className="Blog-section">
          <div className="Blog-section-body">
            <div className="Blog-section-flex">
              <img src="img/blog/leadCap/blogbg.webp" alt="" />
              <h1>
                Successful lead capture for Spray Foam Quotes through targeted
                website development and automation technology
              </h1>
              <Link to="lead">
                <p>View More</p>
              </Link>
            </div>
            <div className="Blog-section-flex">
              <img src="img/blog/sales/sloganbg2.webp" alt="" />
              <h1>
                Streamlined sales and payment management for Spray Foam Tech
                through custom web app development
              </h1>
              <Link to="sales">
                <p>View More</p>
              </Link>
            </div>
          </div>
          <div className="Blog-section-body">
            <div className="Blog-section-flex">
              <img src="img/blog/ecommerce/slogan-bg.webp" alt="" />
              <h1>
                Vedicvila increases online sales through user-friendly and
                secure e commerce website development
              </h1>
              <Link to="ecommerce">
                <p>View More</p>
              </Link>
            </div>
            <div className="Blog-section-flex">
              <img src="img/blog/hyper-local/slogan-bg1.webp" alt="" />
              <h1>
                Complex food delivery system developed with modern technology
                and cutting-edge tools helps LazyUrban connect customers and
                restaurants
              </h1>
              <Link to="apps">
                <p>View More</p>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="lead-bottom">
                <div className="lead-bottom-head">
                    <h1>Good or bad, we’d love to hear your thoughts. Find us on Twitter <span style={{color: 'blue'}}>(@twitter)</span></h1>
                </div>
                <div className="lead-bottom-body">
                    <p className="lead-bottom-title">Here are some related articles you may find interesting:</p>
                    <div className="lead-bottom-flex">
                        <img src="img/blog/leadCap/ice.png" alt="" />
                        <div className="lead-bottom-flex-content">
                            <p>Prod-4min</p>
                            <p>Prod-4min</p>
                            <div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </h2>
                            </div>
                        </div>
                    </div>
                    <div className="lead-bottom-flex">
                        <img src="img/blog/leadCap/ice.png" alt="" />
                        <div className="lead-bottom-flex-content">
                            <p>Prod-4min</p>
                            <p>Prod-4min</p>
                            <div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </h2>
                            </div>
                        </div>
                    </div>
                    <div className="lead-bottom-flex">
                        <img src="img/blog/leadCap/ice.png" alt="" />
                        <div className="lead-bottom-flex-content">
                            <p>Prod-4min</p>
                            <p>Prod-4min</p>
                            <div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </h2>
                            </div>
                        </div>
                    </div>
                    <div className="lead-bottom-flex">
                        <img src="img/blog/leadCap/ice.png" alt="" />
                        <div className="lead-bottom-flex-content">
                            <p>Prod-4min</p>
                            <p>Prod-4min</p>
                            <div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Blog;
