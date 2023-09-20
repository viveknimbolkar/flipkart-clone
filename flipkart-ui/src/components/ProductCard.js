import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flipkartAssuredIcon from "../assets/flipkart-assured.png";
import { faStar, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import userImg from "../assets/user.svg";
import "../css/product-card.css";
import RatingPill from "./RatingPill.js";
function ProductCard({ productDetails }) {
  console.log(productDetails);
  const inFormatPrice = Number(productDetails.price).toLocaleString("hi-IN");

  const inFormatOriginalPrice = Number(
    productDetails.originalPrice
  ).toLocaleString("hi-IN");

  const inFormatPurchases = Number(productDetails.purchases).toLocaleString(
    "hi-IN"
  );

  return (
    <Link
      to={productDetails.link}
      className="text-decoration-none text-dark theme-font-size"
    >
      <div style={{ border: "none" }} class="card product-boxshadow">
        <div  className="product-card-top-image-container d-flex justify-content-center">
          <img src={productDetails.imgLink} style={{width:150,height:150,objectFit:'contain'}} class=" p-2" alt="product image" />
        </div>
        <div class="card-body">
          <div class="card-text product-details">{productDetails.details}</div>
          <div className="text-secondary">
            Quantity {productDetails.quantity}
          </div>
          <div className="d-flex align-items-center">
            <RatingPill rating={productDetails.rating} />
            <span className="mx-2 text-secondary">({inFormatPurchases})</span>
            <div className="assured-image">
              {productDetails.flipkartAssured && (
                <img style={{width:80,height:50}} src={flipkartAssuredIcon}  />
              )}
            </div>
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
              {productDetails.discount}% off
            </div>
          </div>
          <p>{productDetails.deliveryCharges}</p>
          <p className="text-success">Save Details</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
