

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LaunchActivities() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="launch-activities-flex">
                <div className="launch-activities">
                  <h3>Launch Activities</h3>
                  <p>Tinefcon</p>
                </div>
                <div className="d-flex gap-4">
                  <button
                    className="btn btn-left"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <i className="fa-solid fa-angles-left"></i>
                  </button>
                  <button
                    className="btn btn-right"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <i className="fa-solid fa-angles-right"></i>
                  </button>
                </div>
              </div>
              <div className="launch-activities-p">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut.
                </p>
              </div>
            </div>
            <div className="slider-container sliderlaunch py-40">
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <div className="launch-img">
                    <img
                      src={
                        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt="Launch Activities"
                      className="img-fluid"
                    />
                    <div>
                      <button className="btn-download">Download</button>
                    </div>
                  </div>
                  <div className="launch-slider">
                    <h2>01.</h2>
                    <h4>Launch activity</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
                <div>
                  <div className="launch-img">
                    <img
                      src={
                        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt="Launch Activities"
                      className="img-fluid"
                    />
                    <div>
                      <button className="btn-download">Download</button>
                    </div>
                  </div>
                  <div className="launch-slider">
                    <h2>01.</h2>
                    <h4>Launch activity</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
                <div>
                  <div className="launch-img">
                    <img
                      src={
                        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt="Launch Activities"
                      className="img-fluid"
                    />
                    <div>
                      <button className="btn-download">Download</button>
                    </div>
                  </div>
                  <div className="launch-slider">
                    <h2>01.</h2>
                    <h4>Launch activity</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
                {/* Add additional slides as needed */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaunchActivities;