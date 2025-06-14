import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function GlobalFootprint() {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container ">
        <div className="row py-50 pt-0">
          <div className="col-6 ">
            <div className="global-heading">
              <h3>Global Footprint Expansion</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="email-req-us text-end">
              <div className="email-req">
                <Link to={"#"}> Email Us</Link>
              </div>
              <p>
                From <span>Strategic Partnerships</span> to International
              </p>
              <p>Recognition</p>
              <p>
                <span>Tinefcon's global journey</span> of natural
              </p>
              <p>psoriasis therapy continues to make waves</p>
              <p>across continents.</p>
            </div>
          </div>
        </div>
        <div className="row py-50 pt-0">
          <Slider ref={sliderRef} {...settings}>
            <div className="our-history">
              <p>
                <span>OUR HISTORY</span> dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="our-history">
              <p>
                <span>OUR HISTORY</span> dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="our-history">
              <p>
                <span>OUR HISTORY</span> dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="our-history">
              <p>
                <span>OUR HISTORY</span> dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Slider>
          <div className="slider-btns">
            <button
              className="btn btn-left"
              onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
            >
              <i className="fa-solid fa-angles-left"></i>
            </button>
            <button
              className="btn btn-right"
              onClick={() => sliderRef.current && sliderRef.current.slickNext()}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
        <div className="row py-50 pt-0" data-aos="zoom-in" data-aos-duration="3000">
          <div className="col-3 px-0">
            <div>
              <div className="vietnam-philippines">
                <h3>Vietnam & Philippines</h3>
              </div>
              <div className="vietnam-rounds-flex">
                <div className="vietnam-round"></div>
                <div className="vietnam-round-h"></div>
              </div>
              <div className="vietnam-philippines">
                <h4>2022 </h4>
                <h5>Regional Launch</h5>
                <p>
                  Partnered with RV Group to introduce Tinefcon's natural
                  psoriasis solutions in Vietnam and the Philippines.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 px-0">
            <div>
              <div className="vietnam-philippines">
                <h3>Egypt & Kosovo</h3>
              </div>
              <div className="vietnam-rounds-flex">
                <div className="vietnam-round"></div>
                <div className="vietnam-round-h"></div>
              </div>
              <div className="vietnam-philippines">
                <h4>2023 </h4>
                <h5>New Market Reach</h5>
                <p>
                  Extended Tinefcon's global presence with entry into Egypt and
                  first consignment shipped to Kosovo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 px-0">
            <div>
              <div className="vietnam-philippines">
                <h3>Singapore, Malaysia & Indonesia</h3>
              </div>
              <div className="vietnam-rounds-flex">
                <div className="vietnam-round"></div>
                <div className="vietnam-round-h"></div>
              </div>
              <div className="vietnam-philippines">
                <h4>2023 </h4>
                <h5>Southeast Asia Growth</h5>
                <p>
                  Expanded into Southeast Asia via partnership with Wellesta,
                  while also entering Sri Lanka through collaboration with
                  MedMart.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 px-0">
            <div>
              <div className="vietnam-philippines">
                <h3>Algeria & India</h3>
              </div>
              <div className="vietnam-rounds-flex">
                <div className="vietnam-round"></div>
              </div>
              <div className="vietnam-philippines">
                <h4>2025 </h4>
                <h5>Regional Launch</h5>
                <p>
                  Expanded in Algeria and India by Partnering with Aakar Medical
                  Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalFootprint;
