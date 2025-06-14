import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin,Send } from "lucide-react";

function ContactUs() {
  return (
    <>
      <div className="container py-50 ">
        <div className="row d-flex align-items-center  py-40 pt-0">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="contact-heading">
              <h2>Contact Us </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="contact-bg">
              <div className="contact-heading-one">
                <h3>Reach Out to Us</h3>
              </div>
              <div className="contact-link">
                <Phone />
                <Link to={"tel:+91 7400049061"}>(+91)740-004-9061</Link>
              </div>
              <div className="contact-link">
                <Mail />
                <Link to={"mailto:info@invexhealth.com"}>
                  info@invexhealth.com
                </Link>
              </div>
              <div className="contact-link">
                <span>
                  <MapPin />
                </span>
                <Link to={"#"}>
                  Invex Health Private Limited, 105, Summit Business Bay,
                  Andheri East, Mumbai, Maharashtra - 400093, India
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="row py-40 pb-0">
            <div className="col-3">
              <div className="contact-input">
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="contact-input">
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="contact-input">
                <input
                  type="text"
                  id="userSubject"
                  name="userSubject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-9 mt-4">
              <div className="contact-input">
                <textarea id="w3review" name="w3review" rows="4" placeholder="Message" cols="50"></textarea>
              </div>
            </div>
            <div className="col-3 mt-4">
              <button className="btn-send"><span><Send /></span> Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
