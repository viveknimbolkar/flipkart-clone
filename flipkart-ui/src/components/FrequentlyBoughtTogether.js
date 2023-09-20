import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/frequently-bought-together.css";
import { Link } from "react-router-dom";
import {
  faIndianRupee,
  faEquals,
  faShoppingCart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import RatingPill from "./RatingPill";

function FrequentlyBoughtTogether({ currentItem, additionalItems }) {
  var inFormatPrice = Number(currentItem.price).toLocaleString("hi-IN");
  var inFormatOriginalPrice = Number(currentItem.originalPrice).toLocaleString(
    "hi-IN"
  );
  var inFormatPurchases = Number(currentItem.purchases).toLocaleString("hi-IN");

  var inFormatPrice1 = Number(additionalItems[0].price).toLocaleString("hi-IN");
  var inFormatOriginalPrice1 = Number(
    additionalItems[0].originalPrice
  ).toLocaleString("hi-IN");
  var inFormatPurchases1 = Number(additionalItems[0].purchases).toLocaleString(
    "hi-IN"
  );

  var inFormatPrice2 = Number(additionalItems[1].price).toLocaleString("hi-IN");
  var inFormatOriginalPrice2 = Number(
    additionalItems[1].originalPrice
  ).toLocaleString("hi-IN");
  var inFormatPurchases2 = Number(additionalItems[1].purchases).toLocaleString(
    "hi-IN"
  );

  const totalItems =
    Number(currentItem.price) +
    Number(additionalItems[0].price) +
    Number(additionalItems[1].price);
  const totalAdditionalProduct =
    Number(additionalItems[0].price) + Number(additionalItems[1].price);

  var totalItemsINIndianFormat = totalItems.toLocaleString("hi-IN");
  var totalAdditionalProductINIndianFormat =
    totalAdditionalProduct.toLocaleString("hi-IN");

  return (
    <div>
      <div>
        <h3>Frequently Bought Together</h3>
      </div>
      <div className="d-flex my-2 align-items-center">
        <Link
          to={additionalItems[0].link}
          className="text-decoration-none text-dark theme-font-size"
        >
          <div class="card">
            <div className=" d-flex justify-content-center">
              <img
                width={100}
                src={currentItem.image}
                class="frequently-card-image"
                alt="product image"
              />
            </div>
            <div class="card-body">
              <p class="card-text card-details">{currentItem.details}</p>
              <div className="d-flex gap-2">
                <RatingPill rating={currentItem.rating} />
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
                  {currentItem.discount}% off
                </div>
              </div>
            </div>
          </div>
        </Link>
        <FontAwesomeIcon size="2xl" className="text-secondary" icon={faPlus} />
        <Link
          to={additionalItems[0].link}
          className="text-decoration-none border text-dark theme-font-size"
        >
          <div class="card">
            <div className=" d-flex justify-content-center">
              <img
                width={100}
                src={additionalItems[0].image}
                class="frequently-card-image"
                alt="product image"
              />
            </div>
            <div class="card-body">
              <p class="card-text card-details">{additionalItems[0].details}</p>
              <div className="d-flex gap-2">
                <RatingPill rating={additionalItems[0].rating} />
                <span>{inFormatPurchases1}</span>
              </div>
              <div className="justify-content-between d-flex align-items-center">
                <strong className="fs-5">
                  <FontAwesomeIcon icon={faIndianRupee} /> {inFormatPrice1}
                </strong>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faIndianRupee} />
                  <s> {inFormatOriginalPrice1}</s>
                </div>
                <div className="d-flex text-success align-items-center">
                  {additionalItems[0].discount}% off
                </div>
              </div>
            </div>
          </div>
        </Link>
        <FontAwesomeIcon size="2xl" className="text-secondary" icon={faPlus} />
        <Link
          to={additionalItems[0].link}
          className="text-decoration-none border text-dark theme-font-size"
        >
          <div class="card">
            <div className=" d-flex justify-content-center">
              <img
                src={additionalItems[1].image}
                class="frequently-card-image"
                alt="product image"
              />
            </div>
            <div class="card-body">
              <div className="card-details">
                <p class="card-text ">{additionalItems[1].details}</p>
              </div>
              <div className="d-flex gap-2">
                <RatingPill rating={additionalItems[1].rating} />
                <span>{inFormatPurchases2}</span>
              </div>
              <div className="justify-content-between d-flex align-items-center">
                <strong className="fs-5">
                  <FontAwesomeIcon icon={faIndianRupee} /> {inFormatPrice2}
                </strong>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faIndianRupee} />
                  <s> {inFormatOriginalPrice2}</s>
                </div>
                <div className="d-flex text-success align-items-center">
                  {additionalItems[1].discount}% off
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="d-flex gap-3 px-4 product-items-calculation align-items-center border">
        <div className="p-2">
          <span className="text-secondary">1 Item</span>
          <h5>
            <FontAwesomeIcon icon={faIndianRupee} />
            {inFormatPrice}
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="p-2">
          <span className="text-secondary">2 add on</span>
          <h5>
            <FontAwesomeIcon icon={faIndianRupee} />
            {totalAdditionalProductINIndianFormat}
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faEquals} />
        </div>
        <div className="p-2">
          <span className="text-secondary">Total</span>
          <h5>
            <FontAwesomeIcon icon={faIndianRupee} />
            {totalItemsINIndianFormat}
          </h5>
        </div>

        <div className="d-flex align-items-center mx-4">
          <button
            className={`text-uppercase product-addcart-btn text-white bg-warning fw-bold px-4`}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            add 2 items to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyBoughtTogether;
