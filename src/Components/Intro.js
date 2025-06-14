import React from "react";
import { Link } from "react-router-dom";
import { MoveDown } from "lucide-react";
import Restoring from "../Images/restoring.svg";
import RestoringOne from "../Images/restoring-one.svg";
import VideoIcon from "../Images/video-icon.svg";
import MingcuteScience from "../Images/mingcute_science-line.svg";
import Psoriasis from "../Images/Psoriasis.svg";
// import RootBg from "../Images/Root.svg";
import Cause from "../Images/Cause.svg";

function Intro() {
  return (
    <>
      <div className="intro-bg">
        <div className="container">
          <div className="row ">
            <div className="col-3">
              <div className="intro-logo-flex">
                <div className="intro-logo-border">
                  <div className="border-intro"></div>
                  <div className="border-intro-round"></div>
                </div>
                <div className="intro-rigth-text">
                  <h4>Intro</h4>
                  <div class="dropdown">
                    <button
                      class="btn btn-drop-clinical dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Clinical Evaluation
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link class="dropdown-item" to="#">
                          Phase 1
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Phase 2
                        </Link>
                      </li>
                    </ul>
                    <h5>Patient Testimonials</h5>
                    <h5>Mechanism of Action</h5>
                    <div>
                      <button
                        class="btn btn-Presence dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Global Presence
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <Link class="dropdown-item" to="#">
                            Phase 1
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="#">
                            Phase 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="intro-text">
                <h4>Your Health, Our Expertise</h4>
                <h2>Empowering lives through innovative, natural therapies.</h2>
                <p>Scientifically backed. Globally trusted.</p>
                <Link to={"#"}>Explore Our Solutions</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-link">
          <Link to={"#"}>
            <MoveDown /> Scroll for more
          </Link>
        </div>
        <div className="intro-gradient"></div>
      </div>
      <div className="container py-50">
        <div className="row">
          <div className="col-5">
            <div className="intro-position">
              <div>
                <button className="video-icon">
                  <img src={VideoIcon} alt="Intro" className="img-fluid" />
                </button>
              </div>
              <div className="restoring-img">
                <img src={Restoring} alt="Intro" className="img-fluid" />
              </div>
              <div className="restoring-harmony">
                <p>Restoring skin’s natural harmony</p>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="intro-healthcare">
                  <p>
                    At Invex Healthcare, we understand that skin health reflects
                    your overall well-being.
                  </p>
                </div>
              </div>
              <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="intro-position">
                  <div className="restoring-img-one">
                    <img src={RestoringOne} alt="Intro" className="img-fluid" />
                  </div>
                  <div className="restoring-harmony-one">
                    <p>Your Skin Deserves Natural Healing</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="unparalleled-diagnostics-mt">
                  <div className="unparalleled-diagnostics-flex">
                    <div className="unparalleled-diagnostics">
                      <h4>
                        <i class="fa-solid fa-angles-right"></i> Unparalleled
                        Diagnostics
                      </h4>
                    </div>
                    <div className="unparalleled-diagnostics">
                      <p>
                        Advanced insights that decode your skin’s unique needs
                        for precise, effective care.
                      </p>
                    </div>
                  </div>
                  <div className="unparalleled-diagnostics-flex">
                    <div className="unparalleled-diagnostics">
                      <h4>
                        <i class="fa-solid fa-angles-right"></i> Global Reach
                      </h4>
                    </div>
                    <div className="unparalleled-diagnostics">
                      <p>
                        Our nature-powered solutions touch lives around the
                        world with gentle, science-backed skincare.
                      </p>
                    </div>
                  </div>

                  <div className="unparalleled-diagnostics-flex">
                    <div className="unparalleled-diagnostics">
                      <h4>
                        <i class="fa-solid fa-angles-right"></i> Research
                        Excellence
                      </h4>
                    </div>
                    <div className="unparalleled-diagnostics">
                      <p>
                        Driven by science and inspired by nature, we deliver
                        results grounded in continuous innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-50">
          <div className="col-7">
            <div className="psoriasis-condition">
              <h3>
                Psoriasis: <span>More Than Just a Skin Condition</span>
              </h3>
              <p>
                Characterized by red, patchy, flaky skin with silvery scales.
                These patches can be itchy, painful, and often appear on the
                elbows, knees, scalp, lower back, face, palms, nails, and
                genitals.
              </p>
            </div>
          </div>
          <div className="col-5">
            <div className="mingcute-science-flex">
              <div className="mingcute-science">
                <img
                  src={MingcuteScience}
                  alt="MingcuteScience"
                  className="img-fluid"
                />
              </div>
              <div className="mingcute-science-heading">
                <h5>Immune-Driven Disorder</h5>
                <p>T-cell driven inflammation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
            <div className="text-center">
              <div className="root-bg">
                <img src={Psoriasis} alt="" className="img-fluid" />
              </div>
              <div className="root-bg-text">
                <h3>What Is Psoriasis?</h3>
                <p>
                  A skin condition caused by rapid skin cell buildup and immune
                  dysfunction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
            <div className="text-center">
              <div className="root-bg">
                <img src={Cause} alt="" className="img-fluid" />
              </div>
              <div className="root-bg-text">
                <h3>Root Cause</h3>
                <p>
                  Triggered by an overactive immune system, not poor hygiene or
                  allergies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
            <div className="text-center">
              <div className="root-bg">
                <img src={Cause} alt="" className="img-fluid" />
              </div>
              <div className="root-bg-text">
                <h3>In Numbers</h3>
                <p>
                  125 million people live with psoriasis worldwide. India ranks
                  second, with 14 million affected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
