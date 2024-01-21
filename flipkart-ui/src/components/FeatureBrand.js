import React from "react";
import { Link } from "react-router-dom";
import "../css/feature-brand.css";

function FeatureBrand({ images }) {
  return (
    <div className="row p-4">
      <div className="col-md-12 text-start">
        <h4 className="fw-bold">Featured Brand</h4>
      </div>
      <div className="d-flex">
        <div className="flipkart-feature-brand-container d-flex">
          {images.map((item, i) => {
            return (
              <Link key={`featured-${i}`} to="/product">
                <img src={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureBrand;
