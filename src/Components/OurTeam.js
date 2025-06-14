

import React, { useEffect, useRef, useState } from "react";
import Teams from "../Images/Doctor-images.svg";
import TeamSix from "../Images/Teams/Team-six.svg"
import TeamOne from "../Images/Teams/Team-one.svg"
import TeamTwo from "../Images/Teams/Team-two.svg"
import TeamThree from "../Images/Teams/Team-three.svg"
import TeamFour from "../Images/Teams/Team-four.svg"
import TeamFive from "../Images/Teams/Team-five.svg"

function OurTeam() {
  const [rotate, setRotate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRotate(true);
          observer.disconnect();
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
      <div className="container py-50 pt-0" ref={sectionRef}>
        <div className="row">
          {/* <div
            className={`tems-img${rotate ? " rotate-360 zoom-in" : ""}`}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Teams} alt="Teams" className="img-fluid" />
          </div> */}
          <div className="py-40 pt-0">
            <div className="team-flex">
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamSix} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Mr. Anudesh Goyal
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Medico Marketing Expert
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamFive} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Dr. Chetna Chtalia
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Regulatory Affairs Expert
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamOne} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Mr. Anudesh Goyal
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Founder & Director
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamThree} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Ms. Khushi Jha
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Sr. BD & Branding Executive
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamFour} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Ms. Sonia Malthankar
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Business Development Director
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamTwo} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Ms. Riya Kataria
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Sr. BD & RA Executive
                  </h4>
                </div>
              </div>

            </div>
          </div>
          <div className="our-team-header">
            <h2> Our Team of Creators, Builders, and Thinkers</h2>
            <p>
              "Creating skin solutions that care for you — from the surface to within."
            </p>
          </div>
          {/* <div className="py-40 pb-0">
            <div className="team-flex">
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamSix} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Mr. Anudesh Goyal
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Medico Marketing Expert
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamFive} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Dr. Chetna Chtalia
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Regulatory Affairs Expert
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamOne} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Mr. Anudesh Goyal
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Founder & Director
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamThree} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Ms. Khushi Jha
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Sr. BD & Branding Executive
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamFour} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Ms. Sonia Malthankar
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Business Development Director
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamTwo} alt="TeamSix" className="img-fluid" />
                  <div className="teams-name">
                    <h3>
                      Ms. Riya Kataria
                    </h3>
                  </div>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Sr. BD & RA Executive
                  </h4>
                </div>
              </div>

            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="py-40 pb-0">
            <div className="team-flex">
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamSix} alt="TeamSix" className="img-fluid" />
                  </div>
                  <div className="teams-name">
                    <h3>
                      Mr. Anudesh Goyal
                    </h3>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Medico Marketing Expert
                  </h4>
                </div>
              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamThree} alt="TeamSix" className="img-fluid" />
                  </div>
                  <div className="teams-name">
                    <h3>
                      Dr. Chetna Chtalia
                    </h3>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Regulatory Affairs Expert
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamOne} alt="TeamSix" className="img-fluid" />
                  </div>
                  <div className="teams-name">
                    <h3>
                      Mr. Anudesh Goyal
                    </h3>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Founder & Director
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamFive} alt="TeamSix" className="img-fluid" />
                  </div>
                  <div className="teams-name">
                    <h3>
                      Ms. Khushi Jha
                    </h3>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Sr. BD & Branding Executive
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamFour} alt="TeamSix" className="img-fluid" />
                  </div>
                  <div className="teams-name">
                    <h3>
                      Ms. Sonia Malthankar
                    </h3>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Business Development Director
                  </h4>
                </div>

              </div>
              <div className="team-position">
                <div>
                  <div className="team-img">
                    <img src={TeamTwo} alt="TeamSix" className="img-fluid" />
                  </div>
                  <div className="teams-name">
                    <h3>
                      Ms. Riya Kataria
                    </h3>
                  </div>
                </div>
                <div className="team-dep">
                  <h4>
                    Sr. BD & RA Executive
                  </h4>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default OurTeam;
