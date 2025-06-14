import React from "react";
import ProductOne from "../Images/Product-one.svg";

function OurProducts() {
  return (
    <>
      <div className="container py-50">
        <div className="row py-60 pt-0">
          <div className="col-6">
            <div className="our-products-header">
              <h2>Our Products</h2>
            </div>
          </div>
          <div className="col-6">
            <div className="our-products-subheader">
              <h3>tinefcon</h3>
              <p>Revolutionizing Natural Care</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="our-products-card-container">                   
              <div className="our-products-card">
                <p>Lorem ipsum</p>
                <h4>Tinefcon® </h4>
                <h4>Tablets</h4>
                <div className="our-products-card-details">
                  <h5>
                    • Does not compromise immunity <br />• Efficacy comparable
                    to conventional & modern medicines
                  </h5>
                </div>
              </div>
              <div className="our-products-card">
                <img src={ProductOne} alt="ProductOne" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="our-products-card-container">
              <div className="our-products-card">
                <p>Lorem ipsum</p>
                <h4>Tinefcon®</h4>
                <h4> Cream</h4>
                <div className="our-products-card-details">
                  <h5>Topical solution to soothe inflamed skin</h5>
                </div>
              </div>
              <div className="our-products-card">
                <img src={ProductOne} alt="ProductOne" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="our-products-card-container">
              <div className="our-products-card">
                <p>Lorem ipsum</p>
                <h4>Tinefcon® Shower </h4>
                <h4>Gel & Shampoo</h4>
                <div className="our-products-card-details">
                  <h5>
                    Daily care for sensitive, irritated skin Coming soon -
                    holistic care through powerful plant-based actives.
                  </h5>
                </div>
              </div>
              <div className="our-products-card">
                <img src={ProductOne} alt="ProductOne" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 py-50 pb-0">
          <div className="our-products-coming-soon">
            <h4>
            Coming soon - <span>Holistic	care through powerful plant-based actives.</span>
          </h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
