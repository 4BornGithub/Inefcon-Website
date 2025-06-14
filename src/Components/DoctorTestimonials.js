
import React, { useState } from "react";
import Slider from "react-slick";
import DoctorOne from "../Images/doctor-one.svg";
import DoctorTwo from "../Images/doctor-two.svg";
import Quote from "../Images/Quote.svg";

function DoctorTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
     autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  // Array of slide data
  const slides = [
    {
      image: DoctorOne,
      name: "Dr. Sangeeta Amlad",
      title: "Sr. Director of Sales, Pinbox",
      quote:
        "I was skeptical about adding another tool to our tech stack, but Propel proved its worth in the first month. Best business decision we made this year.",
    },
    {
      image: DoctorTwo,
      name: "Rachael Schumm",
      title: "Chief Medical Officer, MedTech",
      quote:
        "Propel has streamlined our operations and improved patient outcomes significantly. Highly recommended!",
    },
    {
      image: DoctorOne,
      name: "Dr. John Doe",
      title: "Head of Research, BioHealth",
      quote:
        "The insights provided by Propel have been invaluable in driving our research forward.",
    },
    {
      image: DoctorOne,
      name: "Dr. Jane Smith",
      title: "CEO, HealthFirst",
      quote:
        "Propel has transformed the way we manage our workflows. It's a game-changer for our team.",
    },
  ];

  return (
    <>
      <div className="container py-50">
        <div className="row">
          <div className="doctor-testimonials-header">
            <h2>Doctor Testimonials</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid py-50 pt-0">
        <div className="slider-container doctor-slider">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div
                  className={`doctor-bg ${
                    activeSlide === index ? "d-block" : "d-none"
                  }`}
                >
                  <div className="doctor-flex">
                    <div className="doctor-testi">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="doctor-name">
                      <h4>{slide.title}</h4>
                      <h2>{slide.name}</h2>
                    </div>
                  </div>
                  <div className="Quote-text">
                    <img src={Quote} className="img-fluid" alt="Quote" />
                    <p>{slide.quote}</p>
                  </div>
                </div>
                <div
                  className={`doctor-two-position ${
                    activeSlide === index ? "d-none" : "d-block"
                  }`}
                >
                  <div className="doctor-two-img">
                    <img
                      src={slide.image}
                      className="img-fluid"
                      alt={slide.name}
                    />
                  </div>
                  <div className="doctor-two-name">
                    <h4>{slide.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default DoctorTestimonials;