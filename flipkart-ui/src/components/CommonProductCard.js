import React from "react";
import RatingPill from "./RatingPill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/common-product-card.css";
// 9 items in obj
function CommonProductCard({ details }) {
  var inFormatPrice = Number(details.price).toLocaleString("hi-IN");
  var inFormatOriginalPrice = Number(details.originalPrice).toLocaleString(
    "hi-IN"
  );
  var inFormatPurchases = Number(details.purchases).toLocaleString("hi-IN");
  return (
    <Link
      to={details.link}
      className="text-decoration-none common-product-card-container text-dark theme-font-size"
    >
      <div class="card common-product-card">
        <div className=" d-flex justify-content-center">
          <img
            src={details.image}
            class="frequently-card-image"
            alt="product image"
          />
        </div>
        <div class="card-body">
          <p class="card-text card-details">{details.details}</p>
          <div className="d-flex gap-2">
            <RatingPill rating={details.rating} />
            <span>{inFormatPurchases}</span>
          </div>
          <div className="justify-content-between d-flex align-items-center">
            <strong className="fs-5">
              <FontAwesomeIcon icon={faIndianRupee} /> {inFormatPrice}
            </strong>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faIndianRupee} />
              <s> {inFormatOriginalPrice}</s>
            </div>
            <div className="d-flex text-success align-items-center">
              {details.discount}% off
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CommonProductCard;
