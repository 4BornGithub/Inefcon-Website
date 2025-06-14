import React from "react";
import Gallery from "../Images/Gallery.svg"

function Exhibitions() {
  return (
    <>
      <div className="container py-50">
        <div className="row">
          <div className="col-12">
            <div className="gallery-heading">
              <h2>A Gallery of success </h2>
              <p>
                "The science behind clear, healthy skin — and the success
                stories it creates."
              </p>
            </div>
            <div className="gallery-img" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={Gallery} alt="Gallery" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exhibitions;
