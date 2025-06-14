import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import { Logs } from "lucide-react";
import Instagram from "../Images/instagram.svg"
import Whatsapp from "../Images/whatsapp.svg"
import Linkedin from "../Images/linkedin.svg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-p">
           <div className="header-flex">
             <div>
              <Link to={"/"}>
                <img src={Logo} alt="React Logo" className="img-fluid" />
              </Link>
            </div>
            <div className="menu-flex">
              <button className="btn btn-menu" onClick={toggleMenu}>
                <Logs /> {!menuOpen && <span>Menu</span>}
              </button>
              <div className={`header-links ${menuOpen ? "show" : ""}`}>
                <Link to={"/"}>Intro</Link>
                <Link to={"#"}>Clinical Evaluation Patienism</Link>
                <Link to={"#"}>Patient Testimonials</Link>
                <Link to={"#"}>Mechanism Of Action</Link>
                <Link to={"#"}>Global</Link>
              </div>
            </div>
           </div>
           <div className="social-icons"> 
              <Link to={"https://www.instagram.com/tinefcon_psoriasis/"} target="_blank">
                <img src={Instagram} className="img-fluid" alt="Instagram" />
              </Link>
              <Link to={"tel:+91 74000 49061"}>
                <img src={Whatsapp} className="img-fluid" alt="Whatsapp" />
              </Link>
              <Link to={" https://www.linkedin.com/company/invexhealth/posts/?feedView=all "} target="_blank">
                <img src={Linkedin} className="img-fluid" alt="Linkedin" />
              </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

