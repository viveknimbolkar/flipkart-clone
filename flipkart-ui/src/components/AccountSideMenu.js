import {
  faCartPlus,
  faCreditCard,
  faIdCard,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userLogo from "../assets/user.svg";
import React,{useEffect} from "react";
import "../css/account-side-menu.css";
import { Link } from "react-router-dom";
function AccountSideMenu() {
  const accountSettings = [
    {
      label: "Profile Information",
      path: "/account",
    },
    {
      label: "Manage Addresses",
      path: "/account/address",
    },
    {
      label: "PAN Card Information",
      path: "/account/pancard",
    },
  ];
  const paymentSettings = [
    {
      label: "Gift Cards",
      path: "/giftcard",
    },
    {
      label: "Saved UPI",
      path: "/account/vpadetails",
    },
    {
      label: "PAN Card Information",
      path: "/account/pancard",
    },
  ];
  const myStuff = [
    {
      label: "My Coupons",
      path: "/account/coupons",
    },
    {
      label: "My Reviews & Ratings",
      path: "/account/reviews",
    },
    {
      label: "All Notifications",
      path: "/account/notifications",
    },
    {
      label: "My Wish",
      path: "/account/wishlist",
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12 d-flex  py-2 flipkart-menu-shadow bg-white border mb-4 lh-sm">
        <img src={userLogo} alt="user image" />
        <div className="flipkart-user-container">
          <p>Hello,</p>
          <h6>Vivek Nimbolkar</h6>
        </div>
      </div>
      <div className="col-md-12 flipkart-menu-shadow bg-white p-3 fs-5 border">
        <Link
          to="/account/orders"
          className="text-decoration-none fw-bold text-dark"
        >
          <FontAwesomeIcon icon={faCartPlus} className="mx-3" />
          My Orders
        </Link>
      </div>
      <div className="col-md-12 flipkart-menu-shadow bg-white  p-3 fs-5 border">
        <Link to="/account" className="text-decoration-none fw-bold text-dark">
          <FontAwesomeIcon icon={faUser} className="mx-3" />
          My Account
        </Link>
        <ul className="list-unstyled text-center">
          {accountSettings.map((item, i) => {
            return (
              <li className="p-1 list-item">
                <Link
                  to={item.path}
                  className="text-decoration-none text-dark fs-6"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-12 flipkart-menu-shadow bg-white  p-3 fs-5 border">
        <Link to="/account" className="text-decoration-none fw-bold text-dark">
          <FontAwesomeIcon icon={faCreditCard} className="mx-3" />
          Payments
        </Link>
        <ul className="list-unstyled text-center">
          {paymentSettings.map((item, i) => {
            return (
              <li className="p-1 list-item">
                <Link
                  to={item.path}
                  className="text-decoration-none text-dark fs-6"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-12 flipkart-menu-shadow bg-white p-3 fs-5 border">
        <Link to="/account" className="text-decoration-none fw-bold text-dark">
          <FontAwesomeIcon icon={faIdCard} className="mx-3" />
          My Stuff
        </Link>
        <ul className="list-unstyled text-center">
          {myStuff.map((item, i) => {
            return (
              <li className="list-item">
                <Link
                  to={item.path}
                  className="text-decoration-none text-dark fs-6"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-12 flipkart-menu-shadow bg-white p-3 fs-5 border">
        <Link to="/account" className="text-decoration-none opa text-dark">
          <FontAwesomeIcon icon={faPowerOff} className="mx-3" />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default AccountSideMenu;
