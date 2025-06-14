// // import React from 'react';
// // import Spline from '@splinetool/react-spline';

// // function GlobalPresence() {
// //     return (
// //         <>
// //             <div className='container py-50'>
// //                 <div className='row'>
// //                     <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
// //                         <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default GlobalPresence;

// // filepath: e:\amit\inefcon\src\Components\GlobalPresence.js
// import React from 'react';
// import Spline from '@splinetool/react-spline';
// import Slider from "react-slick";

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//         console.error("Error rendering Spline:", error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <div>Failed to load 3D scene. Please try again later.</div>;
//         }
//         return this.props.children;
//     }
// }

// function GlobalPresence() {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         dots: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };
//     return (
//         <>
//             <div className='container py-50'>
//                 {/* <div className='row'>
//                     <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                         <ErrorBoundary>
//                             <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                         </ErrorBoundary>
//                     </div>
//                     <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                         <Slider {...settings}>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                             <div >
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                         </Slider>
//                     </div>
//                     <div className="slider-btns slider-btn-presence">
//                         <button
//                             className="btn btn-left"
//                         >
//                             <i className="fa-solid fa-angles-left"></i>
//                         </button>
//                         <button
//                             className="btn btn-right"
//                         >
//                             <i className="fa-solid fa-angles-right"></i>
//                         </button>
//                     </div>
//                 </div> */}
//                 <Slider {...settings}>
//                     <div>
//                         <div className='row'>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <ErrorBoundary>
//                                     <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                                 </ErrorBoundary>
//                             </div>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='row'>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <ErrorBoundary>
//                                     <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                                 </ErrorBoundary>
//                             </div>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='row'>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <ErrorBoundary>
//                                     <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                                 </ErrorBoundary>
//                             </div>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='row'>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <ErrorBoundary>
//                                     <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                                 </ErrorBoundary>
//                             </div>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='row'>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <ErrorBoundary>
//                                     <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                                 </ErrorBoundary>
//                             </div>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className='row'>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <ErrorBoundary>
//                                     <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
//                                 </ErrorBoundary>
//                             </div>
//                             <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
//                                 <div className='present-global-heading'>
//                                     <h3>
//                                         Our Global Presence
//                                     </h3>
//                                     <p>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
//                                     </p>
//                                 </div>
//                                 <div className='coutries-hr'>
//                                     <h5>
//                                         20 +
//                                     </h5>
//                                     <hr />
//                                     <p>
//                                         Countries
//                                     </p>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                 </Slider>
//                 <div className="slider-btns slider-btn-presence">
//                     <button
//                         className="btn btn-left"
//                     >
//                         <i className="fa-solid fa-angles-left"></i>
//                     </button>
//                     <button
//                         className="btn btn-right"
//                     >
//                         <i className="fa-solid fa-angles-right"></i>
//                     </button>
//                 </div>

//             </div>
//         </>
//     );
// }

// export default GlobalPresence;
import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error rendering Spline:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Failed to load 3D scene. Please try again later.</div>;
        }
        return this.props.children;
    }
}

function GlobalPresence() {
    const sliderRef = useRef(null); // Ref for slider control

    const settings = {
        dots: false, // Set to false as per your code
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };

    // Slider navigation functions
    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
            <div className='container py-50'>
                <Slider {...settings} ref={sliderRef}>
                    <div>
                        <div className='row'>
                            <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <ErrorBoundary>
                                    <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
                                </ErrorBoundary>
                            </div>
                            <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <div className='present-global-heading'>
                                    <h3>Our Global Presence</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
                                    </p>
                                </div>
                                <div className='coutries-hr'>
                                    <h5>20 +</h5>
                                    <hr />
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <ErrorBoundary>
                                    <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
                                </ErrorBoundary>
                            </div>
                            <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <div className='present-global-heading'>
                                    <h3>Our Global Presence</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
                                    </p>
                                </div>
                                <div className='coutries-hr'>
                                    <h5>20 +</h5>
                                    <hr />
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <ErrorBoundary>
                                    <Spline scene="https://prod.spline.design/HduNQW0Cj5CmpLk8/scene.splinecode" />
                                </ErrorBoundary>
                            </div>
                            <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <div className='present-global-heading'>
                                    <h3>Our Global Presence</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut deserunt laborum.
                                    </p>
                                </div>
                                <div className='coutries-hr'>
                                    <h5>20 +</h5>
                                    <hr />
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="slider-btns slider-btn-presence">
                    <button className="btn btn-left" onClick={goToPrev}>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button className="btn btn-right" onClick={goToNext}>
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default GlobalPresence;