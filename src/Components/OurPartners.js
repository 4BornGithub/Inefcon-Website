
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Partners_img from "../Images/Partners-image.svg";
import Aakar from "../Images/Aakar.svg";

function OurPartners() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const handleWrapperMouseEnter = () => {
    const slickTrack = sliderRef.current?.innerSlider?.list.querySelector(".slick-track");
    if (slickTrack) {
      slickTrack.classList.add("add-padding");
    }
  };

  const handleWrapperMouseLeave = () => {
    const slickTrack = sliderRef.current?.innerSlider?.list.querySelector(".slick-track");
    if (slickTrack) {
      slickTrack.classList.remove("add-padding");
    }
  };

  return (
    <>
      <div className="container py-50">
        <div className="launch-activities-flex">
          <div className="launch-activities">
            <h3>Our Partners</h3>
          </div>
          <div className="d-flex gap-4">
            <button onClick={previous} className="btn btn-left">
              <i className="fa-solid fa-angles-left"></i>
            </button>
            <button onClick={next} className="btn btn-right">
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>

        <div className="slider-container sliderlaunch py-40">
          <Slider ref={sliderRef} {...settings}>
            <div>
              <div 
                className="partner-wrapper"
                onMouseEnter={handleWrapperMouseEnter}
                onMouseLeave={handleWrapperMouseLeave}
              >
                <div className="position-partners">
                  <div className="partners-img">
                    <img src={Partners_img} alt="PartnersImg" className="img-fluid" />
                  </div>
                  <div className="partners-detail">
                    <div className="partners-detail-name">
                      <h3>Aakar</h3>
                      <h5>India</h5>
                    </div>
                    <p>
                      <img src={Aakar} alt="Aakar" className="img-fluid" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                    </p>
                  </div>
                </div>
                <div className="partners-detail-one">
                  <div className="partners-detail-name-one">
                    <h3>Aakar</h3>
                    <h5>India</h5>
                  </div>
                  <p>
                    <img src={Aakar} alt="Aakar" className="img-fluid" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div 
                className="partner-wrapper"
                onMouseEnter={handleWrapperMouseEnter}
                onMouseLeave={handleWrapperMouseLeave}
              >
                <div className="position-partners">
                  <div className="partners-img">
                    <img src={Partners_img} alt="PartnersImg" className="img-fluid" />
                  </div>
                  <div className="partners-detail">
                    <div className="partners-detail-name">
                      <h3>Aakar</h3>
                      <h5>India</h5>
                    </div>
                    <p>
                      <img src={Aakar} alt="Aakar" className="img-fluid" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                    </p>
                  </div>
                </div>
                <div className="partners-detail-one">
                  <div className="partners-detail-name-one">
                    <h3>Aakar</h3>
                    <h5>India</h5>
                  </div>
                  <p>
                    <img src={Aakar} alt="Aakar" className="img-fluid" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                  </p>
                </div>
              </div>
            </div>
             <div>
              <div 
                className="partner-wrapper"
                onMouseEnter={handleWrapperMouseEnter}
                onMouseLeave={handleWrapperMouseLeave}
              >
                <div className="position-partners">
                  <div className="partners-img">
                    <img src={Partners_img} alt="PartnersImg" className="img-fluid" />
                  </div>
                  <div className="partners-detail">
                    <div className="partners-detail-name">
                      <h3>Aakar</h3>
                      <h5>India</h5>
                    </div>
                    <p>
                      <img src={Aakar} alt="Aakar" className="img-fluid" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                    </p>
                  </div>
                </div>
                <div className="partners-detail-one">
                  <div className="partners-detail-name-one">
                    <h3>Aakar</h3>
                    <h5>India</h5>
                  </div>
                  <p>
                    <img src={Aakar} alt="Aakar" className="img-fluid" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                  </p>
                </div>
              </div>
            </div>
             <div>
              <div 
                className="partner-wrapper"
                onMouseEnter={handleWrapperMouseEnter}
                onMouseLeave={handleWrapperMouseLeave}
              >
                <div className="position-partners">
                  <div className="partners-img">
                    <img src={Partners_img} alt="PartnersImg" className="img-fluid" />
                  </div>
                  <div className="partners-detail">
                    <div className="partners-detail-name">
                      <h3>Aakar</h3>
                      <h5>India</h5>
                    </div>
                    <p>
                      <img src={Aakar} alt="Aakar" className="img-fluid" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                    </p>
                  </div>
                </div>
                <div className="partners-detail-one">
                  <div className="partners-detail-name-one">
                    <h3>Aakar</h3>
                    <h5>India</h5>
                  </div>
                  <p>
                    <img src={Aakar} alt="Aakar" className="img-fluid" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                  </p>
                </div>
              </div>
            </div>
             <div>
              <div 
                className="partner-wrapper"
                onMouseEnter={handleWrapperMouseEnter}
                onMouseLeave={handleWrapperMouseLeave}
              >
                <div className="position-partners">
                  <div className="partners-img">
                    <img src={Partners_img} alt="PartnersImg" className="img-fluid" />
                  </div>
                  <div className="partners-detail">
                    <div className="partners-detail-name">
                      <h3>Aakar</h3>
                      <h5>India</h5>
                    </div>
                    <p>
                      <img src={Aakar} alt="Aakar" className="img-fluid" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                    </p>
                  </div>
                </div>
                <div className="partners-detail-one">
                  <div className="partners-detail-name-one">
                    <h3>Aakar</h3>
                    <h5>India</h5>
                  </div>
                  <p>
                    <img src={Aakar} alt="Aakar" className="img-fluid" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                  </p>
                </div>
              </div>
            </div>
             <div>
              <div 
                className="partner-wrapper"
                onMouseEnter={handleWrapperMouseEnter}
                onMouseLeave={handleWrapperMouseLeave}
              >
                <div className="position-partners">
                  <div className="partners-img">
                    <img src={Partners_img} alt="PartnersImg" className="img-fluid" />
                  </div>
                  <div className="partners-detail">
                    <div className="partners-detail-name">
                      <h3>Aakar</h3>
                      <h5>India</h5>
                    </div>
                    <p>
                      <img src={Aakar} alt="Aakar" className="img-fluid" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                    </p>
                  </div>
                </div>
                <div className="partners-detail-one">
                  <div className="partners-detail-name-one">
                    <h3>Aakar</h3>
                    <h5>India</h5>
                  </div>
                  <p>
                    <img src={Aakar} alt="Aakar" className="img-fluid" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default OurPartners;