import React, { useEffect, useRef, useState } from "react";
import "../Components/MechanismAction.css"; // Assuming you have a CSS file for styles
import BiggerScreen from "../Images/BiggerScreen.mp4"

function MechanismAction() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(false);
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <div className="container py-50" ref={sectionRef}>
        <div className="row">
          <div className="col-8">
            <div className="mechanism-action-header">
              <h2>How Tinefcon® Works</h2>
              <p>
                Tinefcon® modulates immune response by reducing inflammation,
                inhibiting cell proliferation, and restoring skin integrity.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="watch-video">
              <h5 className={animate ? "zoom-out-text" : ""}>
                Watch our explainer video to understand the science behind this
                breakthrough.
              </h5>
              {/* Only show video after animation starts */}
              {animate && (
                <video className="zoom-in-video" autoPlay muted>
                  <source
                    src={BiggerScreen}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MechanismAction;
