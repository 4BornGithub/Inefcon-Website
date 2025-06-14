// import React, { useEffect, useRef, useState } from "react";
// import CountUp from "react-countup";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Slider from "react-slick";
// import PhaseOne from "../Images/PhaseOne.svg"
// import PhaseTwo from "../Images/Phase Two.svg"
// import PhaseThree from "../Images/PhaseThree.svg"
// import PhaseFour from "../Images/PhaseFour.svg"

// function ClinicalEvaluation() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   const [animate, setAnimate] = useState(false);
//   const [currentCount, setCurrentCount] = useState({
//     patentedCountries: 0,
//     patients: 0,
//     countries: 0,
//     improvement: 0,
//   });
//   const sectionRef = useRef(null);
//   const [visibleRounds, setVisibleRounds] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true); // Trigger animation when section is visible
//           AOS.init({ once: true }); // Initialize AOS animations

//           const delays = [0, 2000, 4000, 6000, 8000, 10000]; // Delay for each round in milliseconds
//           delays.forEach((delay, index) => {
//             setTimeout(() => {
//               setVisibleRounds((prev) => [...prev, index + 1]); // Add round index to visibleRounds
//             }, delay);
//           });

//           observer.disconnect(); // Stop observing after triggering the logic
//         }
//       },
//       { threshold: 0.3 } // Adjust threshold as needed
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <div className="container py-50" ref={sectionRef}>
//         <div className="row">
//           <div className="col-9">
//             <div className="clinical-evaluation-header">
//               <p>
//                 <span>Tinefcon®</span> has been studied in{" "}
//                 <span>500+ patients</span> across clinical trials, showing
//                 significant PASI reduction and quality of life improvement, with
//                 support from 11+ <span>international publications.</span>
//               </p>
//             </div>
//           </div>
//           <div className="col-3">
//             <div className="clinical-evaluation-subheader">
//               <h5>
//                 <span>10+ Years</span> Long research
//               </h5>
//             </div>
//           </div>
//           <div className="col-12">
//             <div>
//               <button className="btn-clinical" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Clinical trials</button>
//             </div>
//             <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//               <div class="modal-dialog modal-dialog-centered modal-xl">
//                 <div class="modal-content">
//                   <div class="modal-header">
//                     <h1 class="modal-title" id="staticBackdropLabel">Clinical trials</h1>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                   </div>
//                   <div class="modal-body">
//                     <div className="phase-flex">
//                       <button className="btn-phase">Phase 1</button>
//                       <button className="btn-phase">Phase 2</button>
//                     </div>

//                     <div className="slider-container">
//                       <Slider {...settings}>
//                         <div>
//                           <div className="row">
//                             <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
//                               <div className="phase-p" >
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>

//                               </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//                               <div className="phase-img">
//                                 <div className="PhaseOne"><img src={PhaseOne} alt="PhaseOne" className="img-fluid" /></div>
//                                 <div className="Phasetwo"> <img src={PhaseTwo} alt="PhaseTwo" className="img-fluid" /></div>
//                               </div>
//                               <div className="phase-img">
//                                 <div className="Phasethree"> <img src={PhaseThree} alt="PhaseThree" className="img-fluid" /> </div>
//                                 <div className="Phasefour">   <img src={PhaseFour} alt="PhaseFour" className="img-fluid" /> </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="row">
//                             <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
//                               <div className="phase-p" >
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>

//                               </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//                               <div className="phase-img">
//                                 <div className="PhaseOne"><img src={PhaseOne} alt="PhaseOne" className="img-fluid" /></div>
//                                 <div className="Phasetwo"> <img src={PhaseTwo} alt="PhaseTwo" className="img-fluid" /></div>
//                               </div>
//                               <div className="phase-img">
//                                 <div className="Phasethree"> <img src={PhaseThree} alt="PhaseThree" className="img-fluid" /> </div>
//                                 <div className="Phasefour">   <img src={PhaseFour} alt="PhaseFour" className="img-fluid" /> </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="row">
//                             <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
//                               <div className="phase-p" >
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>

//                               </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//                               <div className="phase-img">
//                                 <div className="PhaseOne"><img src={PhaseOne} alt="PhaseOne" className="img-fluid" /></div>
//                                 <div className="Phasetwo"> <img src={PhaseTwo} alt="PhaseTwo" className="img-fluid" /></div>
//                               </div>
//                               <div className="phase-img">
//                                 <div className="Phasethree"> <img src={PhaseThree} alt="PhaseThree" className="img-fluid" /> </div>
//                                 <div className="Phasefour">   <img src={PhaseFour} alt="PhaseFour" className="img-fluid" /> </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="row">
//                             <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
//                               <div className="phase-p" >
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>

//                               </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//                               <div className="phase-img">
//                                 <div className="PhaseOne"><img src={PhaseOne} alt="PhaseOne" className="img-fluid" /></div>
//                                 <div className="Phasetwo"> <img src={PhaseTwo} alt="PhaseTwo" className="img-fluid" /></div>
//                               </div>
//                               <div className="phase-img">
//                                 <div className="Phasethree"> <img src={PhaseThree} alt="PhaseThree" className="img-fluid" /> </div>
//                                 <div className="Phasefour">   <img src={PhaseFour} alt="PhaseFour" className="img-fluid" /> </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="row">
//                             <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
//                               <div className="phase-p" >
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>

//                               </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//                               <div className="phase-img">
//                                 <div className="PhaseOne"><img src={PhaseOne} alt="PhaseOne" className="img-fluid" /></div>
//                                 <div className="Phasetwo"> <img src={PhaseTwo} alt="PhaseTwo" className="img-fluid" /></div>
//                               </div>
//                               <div className="phase-img">
//                                 <div className="Phasethree"> <img src={PhaseThree} alt="PhaseThree" className="img-fluid" /> </div>
//                                 <div className="Phasefour">   <img src={PhaseFour} alt="PhaseFour" className="img-fluid" /> </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="row">
//                             <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
//                               <div className="phase-p" >
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                                 </p>

//                               </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//                               <div className="phase-img">
//                                 <div className="PhaseOne"><img src={PhaseOne} alt="PhaseOne" className="img-fluid" /></div>
//                                 <div className="Phasetwo"> <img src={PhaseTwo} alt="PhaseTwo" className="img-fluid" /></div>
//                               </div>
//                               <div className="phase-img">
//                                 <div className="Phasethree"> <img src={PhaseThree} alt="PhaseThree" className="img-fluid" /> </div>
//                                 <div className="Phasefour">   <img src={PhaseFour} alt="PhaseFour" className="img-fluid" /> </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </Slider>
//                     </div>
//                     <div>
//                       <div className="slider-btns clinical-slider">
//                         <button
//                           className="btn btn-left"
//                         >
//                           <i className="fa-solid fa-angles-left"></i>
//                         </button>
//                         <button
//                           className="btn btn-right"
//                         >
//                           <i className="fa-solid fa-angles-right"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row d-flex align-items-end py-50 pt-0">
//           <div className="col-6">
//             <div className="row">
//               <div className="col-6 mb-clinical">
//                 <div className="clinical-evaluation-card">
//                   <h4>
//                     {animate ? (
//                       <CountUp
//                         start={0}
//                         end={35}
//                         duration={1}
//                         delay={0}
//                         onUpdate={(value) =>
//                           setCurrentCount((prev) => ({
//                             ...prev,
//                             patentedCountries: Math.floor(value),
//                           }))
//                         }
//                       />
//                     ) : (
//                       currentCount.patentedCountries
//                     )}{" "}
//                     +
//                   </h4>
//                   <p>Patented Countries</p>
//                 </div>
//               </div>
//               <div className="col-6 mb-clinical">
//                 <div className="clinical-evaluation-card">
//                   <h4>
//                     {animate ? (
//                       <CountUp
//                         start={0}
//                         end={500}
//                         duration={1}
//                         delay={0}
//                         onUpdate={(value) =>
//                           setCurrentCount((prev) => ({
//                             ...prev,
//                             patients: Math.floor(value),
//                           }))
//                         }
//                       />
//                     ) : (
//                       currentCount.patients
//                     )}
//                     +
//                   </h4>
//                   <h5>Patients</h5>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="clinical-evaluation-card">
//                   <h4>
//                     {animate ? (
//                       <CountUp
//                         start={0}
//                         end={20}
//                         duration={1}
//                         delay={0}
//                         onUpdate={(value) =>
//                           setCurrentCount((prev) => ({
//                             ...prev,
//                             countries: Math.floor(value),
//                           }))
//                         }
//                       />
//                     ) : (
//                       currentCount.countries
//                     )}{" "}
//                     +
//                   </h4>
//                   <h5>Countries</h5>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="clinical-evaluation-card">
//                   <h4>
//                     {animate ? (
//                       <CountUp
//                         start={0}
//                         end={70}
//                         duration={1}
//                         delay={0}
//                         onUpdate={(value) =>
//                           setCurrentCount((prev) => ({
//                             ...prev,
//                             improvement: Math.floor(value),
//                           }))
//                         }
//                       />
//                     ) : (
//                       currentCount.improvement
//                     )}{" "}
//                     %
//                   </h4>
//                   <h5>Improvement</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="evaluation-position">
//               {visibleRounds.includes(1) && (
//                 <div
//                   className="round-one"
//                   data-aos="zoom-in"
//                   data-aos-duration="3000"
//                 >
//                   <div className="lorem-round lorem-round-text">
//                     <span></span>
//                     <p>Lorem Ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               )}
//               {visibleRounds.includes(2) && (
//                 <div
//                   className="round-two"
//                   data-aos="zoom-in"
//                   data-aos-duration="3000"
//                 >
//                   <div className="lorem-round-tow lorem-round-text">
//                     <span></span>
//                     <p>Lorem Ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               )}
//               {visibleRounds.includes(3) && (
//                 <div
//                   className="round-three"
//                   data-aos="zoom-in"
//                   data-aos-duration="3000"
//                 >
//                   <div className="lorem-round-three lorem-round-text">
//                     <span></span>
//                     <p>Lorem Ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               )}
//               {visibleRounds.includes(4) && (
//                 <div
//                   className="round-four"
//                   data-aos="zoom-in"
//                   data-aos-duration="3000"
//                 >
//                   <div className="lorem-round-four lorem-round-text">
//                     <span></span>
//                     <p>Lorem Ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               )}
//               {visibleRounds.includes(5) && (
//                 <div
//                   className="round-five"
//                   data-aos="zoom-in"
//                   data-aos-duration="3000"
//                 >
//                   <div className="lorem-round-five lorem-round-text">
//                     <span></span>
//                     <p>Lorem Ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               )}
//               {visibleRounds.includes(6) && (
//                 <div
//                   className="round-six"
//                   data-aos="zoom-in"
//                   data-aos-duration="3000"
//                 >
//                   <div className="lorem-round-six lorem-round-text">
//                     <span></span>
//                     <p>Lorem Ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ClinicalEvaluation;

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhaseOne from "../Images/PhaseOne.svg";
import PhaseTwo from "../Images/Phase Two.svg";
import PhaseThree from "../Images/PhaseThree.svg";
import PhaseFour from "../Images/PhaseFour.svg";

function ClinicalEvaluation() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [animate, setAnimate] = useState(false);
  const [currentCount, setCurrentCount] = useState({
    patentedCountries: 0,
    patients: 0,
    countries: 0,
    improvement: 0,
  });
  const sectionRef = useRef(null);
  const sliderRef = useRef(null); // Ref for slider control
  const [visibleRounds, setVisibleRounds] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Trigger animation when section is visible
          AOS.init({ once: true }); // Initialize AOS animations

          const delays = [0, 2000, 4000, 6000, 8000, 10000]; // Delay for each round
          delays.forEach((delay, index) => {
            setTimeout(() => {
              setVisibleRounds((prev) => [...prev, index + 1]);
            }, delay);
          });

          observer.disconnect(); // Stop observing after triggering
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Slider navigation functions
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="container py-50" ref={sectionRef}>
        <div className="row">
          <div className="col-9">
            <div className="clinical-evaluation-header">
              <p>
                <span>Tinefcon®</span> has been studied in{" "}
                <span>500+ patients</span> across clinical trials, showing
                significant PASI reduction and quality of life improvement, with
                support from 11+ <span>international publications.</span>
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="clinical-evaluation-subheader">
              <h5>
                <span>10+ Years</span> Long research
              </h5>
            </div>
          </div>
          <div className="col-12">
            <div>
              <button
                className="btn-clinical"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Clinical trials
              </button>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="staticBackdropLabel">
                      Clinical trials
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="phase-flex">
                      <button className="btn-phase">Phase 1</button>
                      <button className="btn-phase">Phase 2</button>
                    </div>

                    <div className="slider-container">
                      <Slider {...settings} ref={sliderRef}>
                        <div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div className="phase-p">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div className="phase-img">
                                <div className="PhaseOne">
                                  <img
                                    src={PhaseOne}
                                    alt="PhaseOne"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasetwo">
                                  <img
                                    src={PhaseTwo}
                                    alt="PhaseTwo"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="phase-img">
                                <div className="Phasethree">
                                  <img
                                    src={PhaseThree}
                                    alt="PhaseThree"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasefour">
                                  <img
                                    src={PhaseFour}
                                    alt="PhaseFour"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div className="phase-p">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div className="phase-img">
                                <div className="PhaseOne">
                                  <img
                                    src={PhaseOne}
                                    alt="PhaseOne"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasetwo">
                                  <img
                                    src={PhaseTwo}
                                    alt="PhaseTwo"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="phase-img">
                                <div className="Phasethree">
                                  <img
                                    src={PhaseThree}
                                    alt="PhaseThree"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasefour">
                                  <img
                                    src={PhaseFour}
                                    alt="PhaseFour"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div className="phase-p">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div className="phase-img">
                                <div className="PhaseOne">
                                  <img
                                    src={PhaseOne}
                                    alt="PhaseOne"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasetwo">
                                  <img
                                    src={PhaseTwo}
                                    alt="PhaseTwo"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="phase-img">
                                <div className="Phasethree">
                                  <img
                                    src={PhaseThree}
                                    alt="PhaseThree"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasefour">
                                  <img
                                    src={PhaseFour}
                                    alt="PhaseFour"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div className="phase-p">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div className="phase-img">
                                <div className="PhaseOne">
                                  <img
                                    src={PhaseOne}
                                    alt="PhaseOne"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasetwo">
                                  <img
                                    src={PhaseTwo}
                                    alt="PhaseTwo"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="phase-img">
                                <div className="Phasethree">
                                  <img
                                    src={PhaseThree}
                                    alt="PhaseThree"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasefour">
                                  <img
                                    src={PhaseFour}
                                    alt="PhaseFour"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div className="phase-p">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div className="phase-img">
                                <div className="PhaseOne">
                                  <img
                                    src={PhaseOne}
                                    alt="PhaseOne"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasetwo">
                                  <img
                                    src={PhaseTwo}
                                    alt="PhaseTwo"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="phase-img">
                                <div className="Phasethree">
                                  <img
                                    src={PhaseThree}
                                    alt="PhaseThree"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasefour">
                                  <img
                                    src={PhaseFour}
                                    alt="PhaseFour"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div className="phase-p">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div className="phase-img">
                                <div className="PhaseOne">
                                  <img
                                    src={PhaseOne}
                                    alt="PhaseOne"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasetwo">
                                  <img
                                    src={PhaseTwo}
                                    alt="PhaseTwo"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="phase-img">
                                <div className="Phasethree">
                                  <img
                                    src={PhaseThree}
                                    alt="PhaseThree"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="Phasefour">
                                  <img
                                    src={PhaseFour}
                                    alt="PhaseFour"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                    <div>
                      <div className="slider-btns clinical-slider">
                        <button className="btn btn-left" onClick={goToPrev}>
                          <i className="fa-solid fa-angles-left"></i>
                        </button>
                        <button className="btn btn-right" onClick={goToNext}>
                          <i className="fa-solid fa-angles-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-end py-50 pt-0">
          <div className="col-6">
            <div className="row">
              <div className="col-6 mb-clinical">
                <div className="clinical-evaluation-card">
                  <h4>
                    {animate ? (
                      <CountUp
                        start={0}
                        end={35}
                        duration={1}
                        delay={0}
                        onUpdate={(value) =>
                          setCurrentCount((prev) => ({
                            ...prev,
                            patentedCountries: Math.floor(value),
                          }))
                        }
                      />
                    ) : (
                      currentCount.patentedCountries
                    )}{" "}
                    +
                  </h4>
                  <p>Patented Countries</p>
                </div>
              </div>
              <div className="col-6 mb-clinical">
                <div className="clinical-evaluation-card">
                  <h4>
                    {animate ? (
                      <CountUp
                        start={0}
                        end={500}
                        duration={1}
                        delay={0}
                        onUpdate={(value) =>
                          setCurrentCount((prev) => ({
                            ...prev,
                            patients: Math.floor(value),
                          }))
                        }
                      />
                    ) : (
                      currentCount.patients
                    )}
                    +
                  </h4>
                  <p>Patients</p>
                </div>
              </div>
              <div className="col-6">
                <div className="clinical-evaluation-card">
                  <h4>
                    {animate ? (
                      <CountUp
                        start={0}
                        end={20}
                        duration={1}
                        delay={0}
                        onUpdate={(value) =>
                          setCurrentCount((prev) => ({
                            ...prev,
                            countries: Math.floor(value),
                          }))
                        }
                      />
                    ) : (
                      currentCount.countries
                    )}{" "}
                    +
                  </h4>
                  <p>Countries</p>
                </div>
              </div>
              <div className="col-6">
                <div className="clinical-evaluation-card">
                  <h4>
                    {animate ? (
                      <CountUp
                        start={0}
                        end={70}
                        duration={1}
                        delay={0}
                        onUpdate={(value) =>
                          setCurrentCount((prev) => ({
                            ...prev,
                            improvement: Math.floor(value),
                          }))
                        }
                      />
                    ) : (
                      currentCount.improvement
                    )}{" "}
                    %
                  </h4>
                  <p>Improvement</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="evaluation-position">
              {visibleRounds.includes(1) && (
                <div
                  className="round-one"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="lorem-round lorem-round-text">
                    <span></span>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              )}
              {visibleRounds.includes(2) && (
                <div
                  className="round-two"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="lorem-round-tow lorem-round-text">
                    <span></span>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              )}
              {visibleRounds.includes(3) && (
                <div
                  className="round-three"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="lorem-round-three lorem-round-text">
                    <span></span>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              )}
              {visibleRounds.includes(4) && (
                <div
                  className="round-four"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="lorem-round-four lorem-round-text">
                    <span></span>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              )}
              {visibleRounds.includes(5) && (
                <div
                  className="round-five"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="lorem-round-five lorem-round-text">
                    <span></span>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              )}
              {visibleRounds.includes(6) && (
                <div
                  className="round-six"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="lorem-round-six lorem-round-text">
                    <span></span>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicalEvaluation;