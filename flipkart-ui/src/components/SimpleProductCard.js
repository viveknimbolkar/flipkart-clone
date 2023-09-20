import React from "react";
import "../css/simple-product-card.css";
import { Link } from "react-router-dom";
function SimpleProductCard({ details }) {
  return (
    <Link className="text-decoration-none m-2 bg-white text-dark" to={details.link}>
      <div className="d-flex border p-2 simple-product-card-container">
        <div className="d-flex align-items-center">
          <img src={details.image} />
        </div>
        <div className="d-flex  justify-content-center mx-4 flex-column">
          <span className="fw-bold fs-4">{details.heading}</span>
          
          <p className="fs-5 text-secondary"> Min {details.discount } % off</p> 
          <button className="bg-primary fw-bold text-white">Shop Now</button>
        </div>
      </div>
    </Link>
  );
}

export default SimpleProductCard;
