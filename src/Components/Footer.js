import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../Images/footer-logo.svg"
import { Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="container py-60 pb-0 ">
          <div className="row py-60 pt-0">
            <div className="col-8">
              <div className="footer-heading">
                <h3>Your Health, Our Expertise.</h3>
                <p>© 2025 Invex Healthcare Pvt. Ltd. All rights reserved.</p>
                <div className="footer-link">
                  <Link to={""}>Privacy Policy</Link>
                  <span>|</span> <Link to={""}>Privacy Policy</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-logo-link text-end">
                <Link to={"/"} >
                  <img src={FooterLogo} alt="FooterLogo" className="img-fluid" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row py-40 pb-0">
            <div className="col-6">
              <div className="mobile-link">
                <span>
                  <Phone />
                </span>
                <Link to={"tel:+91 7400049061"} >+91 7400049061 </Link>
              </div>
              <div className="mobile-link">
                <span>
                  <Mail />
                </span>
                <Link to={"mailto: info@invexhealth.com"} >info@invexhealth.com</Link>
              </div>
            </div>
            <div className="col-6 ">
              <div className="footer-social">
                <div>
                  <h4>
                    Follow our social media
                  </h4>

                  <div className="footer-link-in">
                    <Link to={"https://www.instagram.com/tinefcon_psoriasis/"}>INSTGRAM</Link>
                    <Link to={"https://www.linkedin.com/company/invexhealth/posts/?feedView=all "}>LINKDIN</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-border py-20 pb-0">
          <hr />
        </div>
        <div className="container  py-20" >
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <div className="footer-logo-img">
                <Link to={"/"}>
                  <img src={FooterLogo} alt="FooterLogo" className="img-fluid" /></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="glogall-trust">
                <h3>
                  Scientifically backed. Globally trusted.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
