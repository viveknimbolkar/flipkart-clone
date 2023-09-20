import React from "react";
import LaptopImage from "../assets/bag.webp";
import flipkartAssured from "../assets/flipkart-assured.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import "../css/cart-item.css";
import { Link } from "react-router-dom";
function CartItem() {
  return (
    <div className="d-flex bg-white align-items-center p-2">
      <div className="cart-thumbnail">
        <img src={LaptopImage} alt="product thumbnail" />
      </div>
      <div>
        <Link className="text-decoration-none text-dark" to="/">
          <h6 className="cart-item-title">
            boAt Wave beat 1.69Inch HD display with complete health monitoring
            Smartwatch
          </h6>
        </Link>
        <label>Red Strap, Free Size</label>
        <div className="cart-flipkart-assured">
          <label>Seller: RetailNet</label>
          <img className="mx-2" src={flipkartAssured} />
        </div>
        <div className="d-flex align-items-center ">
          <div>
            <FontAwesomeIcon icon={faIndianRupee} />
            <span className="text-secondary">
              <s>45,566</s>
            </span>
          </div>
          <div className="mx-4">
            <FontAwesomeIcon icon={faIndianRupee} />
            <span>45,566</span>
          </div>
          <span className="text-success">74% off</span>
        </div>
        <div>
          <h4 className="text-danger">Out of Stock</h4>
        </div>
        <div className="my-4">
          <label className="fw-bold mx-3 theme-pointer-cursor">Save</label>
          <label className="fw-bold mx-3 theme-pointer-cursor">Remove</label>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
