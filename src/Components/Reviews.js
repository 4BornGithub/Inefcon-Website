import React, { useState, useRef } from 'react';
import reviewsOne from "../Images/reviews-one.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
    const [centerIndex, setCenterIndex] = useState(0); // Track the index of the centered slide
    const sliderRef = useRef(null); // Reference to the Slider component

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        speed: 500,
        arrows: false,
        responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4.7,
        }
      }
    ],
        afterChange: (current) => setCenterIndex(current) // Update the center index after slide change
    };

    const reviews = [
        {
            name: "Rachael S., Psoriasis Warrior",
            text: "After years of trying everything, Tinefcon® was the only solution that brought long-term relief without side effects.",
            image: reviewsOne
        },
        {
            name: "John D., Eczema Fighter",
            text: "Tinefcon® has been a game-changer for me. My skin has never felt better!",
            image: reviewsOne
        },
        {
            name: "Emily R., Skin Care Advocate",
            text: "I finally found a product that works without any harsh chemicals. Highly recommend!",
            image: reviewsOne
        },
        {
            name: "Michael S., Rosacea Survivor",
            text: "Tinefcon® helped me regain confidence in my skin. Truly life-changing!",
            image: reviewsOne
        },
        {
            name: "Sarah C., Dermatology Enthusiast",
            text: "This product is a must-have for anyone struggling with skin issues.",
            image: reviewsOne
        }
    ];

    return (
        <>
            <div className='container py-50'>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'>
                        <div className='reviwes-name-h'>
                            <h3>{reviews[centerIndex].name}</h3>
                            <p>{reviews[centerIndex].text}</p>
                        </div>
                    </div>
                </div>
                <div className="slider-container reviews-slider">
                    <div className='reviews-heading'>
                        <h3>Reviews</h3>
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} onClick={() => sliderRef.current.slickGoTo(index)}>
                                {centerIndex === index ? (
                                    <div className='review-sec-img'>
                                        <img src={review.image} alt={review.name} />
                                    </div>
                                ) : (
                                    <div className='review-one-img'>
                                        <img src={review.image} alt={review.name} />
                                        <h5>{review.name.split(",")[0]}</h5>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Reviews;