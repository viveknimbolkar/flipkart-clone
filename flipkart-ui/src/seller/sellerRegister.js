import React, { useState } from "react";
import BrandLogo from "../assets/seller-header.png";
import SellerProfile from "../assets/seller-profile.svg";
import Onboarding from "../assets/onboarding-logo-growthImg.svg";
import Truck from "../assets/onboarding-logo-truck.svg";
import Percent from "../assets/onboarding-logo-percent.svg";
import Account from "../assets/onboarding-logo-account.svg";
import Payment from "../assets/onboarding-logo-payments.svg";
import Charges from "../assets/onboarding-logo-charges.svg";
import Mobile from "../assets/onboarding-logo-mobile.svg";
import Payments from "../assets/onboarding-logo-payments.svg";
import { Link } from "react-router-dom";
import Support from "../assets/onboarding-logo-support.svg";
import Calculator from "../assets/onboarding-logo-calculator.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBox,
  faCircleCheck,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "../css/seller-register.css";
import { Modal } from "react-bootstrap";
function SellerRegister() {
  const [mobile, setMobile] = useState("");
  const [loginMobile, setLoginMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [privacyModal, setPrivacyModal] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const [activeSellerType, setActiveSellerType] = useState("all-categories");

  return (
    <div className="bg-white">
      <header className="seller-register-header my-3 d-flex justify-content-start align-items-center gap-4">
        <img src={BrandLogo} width="80px" />
        <div className="d-flex items-center ml-4 gap-2">
          <FontAwesomeIcon icon={faCircleCheck} />
          <h6>EMAIL ID & GSTIN</h6>
        </div>
        <hr />
        <div className="d-flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleCheck} />
          <h6>PASSWORD CREATION</h6>
        </div>
        <hr />
        <div className="d-flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleCheck} />
          <h6>ONBOARDING DASHBOARD</h6>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex my-4 flex-column">
            <div className="row col-6 ">
              <input
                min={0}
                placeholder="*Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="number"
                className="seller-input rounded p-2 my-2"
              />
              {!mobile && (
                <label className="seller-label text-danger">
                  Please enter your mobile number
                </label>
              )}
              <input
                placeholder="*Enter Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="seller-input rounded p-2 my-2"
              />
              {!email && (
                <label className="seller-label text-danger">
                  Please enter your email ID
                </label>
              )}
              <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="seller-input rounded p-2 my-2"
              />
              {!password && (
                <label className="seller-label text-danger">
                  Please enter your password
                </label>
              )}
              <input
                placeholder="*Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="seller-input rounded p-2 my-2"
              />
              {!confirmPassword && (
                <label className="seller-label text-danger">
                  Please confirm your password
                </label>
              )}
              {confirmPassword !== password && (
                <label className="seller-label text-danger">
                  password dosen't matched
                </label>
              )}
              <div className="my-4">
                <h6>What are you looking to sell on Flipkart?</h6>
                <div className="d-flex gap-3">
                  <div
                    onClick={(e) => {
                      setActiveSellerType("all-category");
                    }}
                    className={`d-flex p-3 gap-2  align-items-center rounded ${
                      activeSellerType === "all-category"
                        ? "sell-category-active"
                        : "sell-category"
                    }`}
                  >
                    <FontAwesomeIcon icon={faBox} />
                    <span>All Categories</span>
                  </div>
                  <div
                    onClick={(e) => {
                      setActiveSellerType("books");
                    }}
                    className={`d-flex p-3 gap-2 align-items-center rounded ${
                      activeSellerType === "books"
                        ? "sell-category-active"
                        : "sell-category"
                    }`}
                  >
                    <FontAwesomeIcon icon={faBook} />
                    <span>Only Books</span>
                  </div>
                </div>
              </div>
              <input
                placeholder="*Enter GSTIN"
                value={GSTIN}
                onChange={(e) => setGSTIN(e.target.value)}
                type="text"
                className="seller-input rounded p-2 my-2"
              />
              {!GSTIN && (
                <label className="seller-label text-danger">
                  Invalid GSTIN. Please try again
                </label>
              )}
              <p className="fw-semibold">
                GSTIN is required to sell products on Flipkart. You can also
                share it in the final step. By continuing, I agree to Flipkart’s
                &nbsp;
                <span className="text-primary">Terms of Use</span> & &nbsp;
                <span className="text-primary">Privacy Policy</span>
              </p>
              <Link to={"/seller/passwordCreation"}>
                <button className="text-white py-2 font-semibold border rounded bg-primary">
                  Register & Continue &rarr;
                </button>
              </Link>
              <p
                onClick={(e) => setLoginModal(true)}
                className="text-primary my-4 login-link"
              >
                Already have an account? Login here
              </p>
              <Modal
                ono
                show={loginModal}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}
              >
                <div>
                  <div className="d-flex border-bottom justify-content-between py-2 px-4">
                    <h5>Log In</h5>
                    <FontAwesomeIcon
                      className="login-link"
                      onClick={() => setLoginModal(false)}
                      icon={faClose}
                      size="xl"
                    />
                  </div>
                  <div className="p-4">
                    <label>Username or 10 digit phone number or email</label>
                    <br />
                    <input
                      min={0}
                      placeholder="Enter your mobile number"
                      value={loginMobile}
                      onChange={(e) => setLoginMobile(e.target.value)}
                      type="text"
                      className="login-input my-2 p-1"
                    />
                  </div>
                  <div className="d-flex justify-content-between p-4">
                    <span className="login-link text-primary">
                      Register for new account
                    </span>
                    <button className="text-white bg-primary border-none login-next-btn">
                      Next
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded my-3 border d-flex align-items-start gap-2 p-2">
              <img src={SellerProfile} />
              <div>
                <h6>
                  Starting with 1, Flipkart helped me expand to 6 categories
                  with 5x growth year on year!
                </h6>
                <p className="seller-label">Raju Lunawath, Amazestore</p>
              </div>
            </div>
            <div>
              <img src={Onboarding} className="rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid row sell-on-flipkart-container">
        <center>
          <h1 className="sell-on-flipkart-container__heading fw-bold">
            Why sell on Flipkart?
          </h1>
        </center>
        <div className="col-md-3 ">
          <div>
            <img src={Truck} className="my-2" />
            <h5>Sell Across India</h5>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
          <div className="mt-4">
            <img src={Percent} className="my-2" />
            <h5>Higher Profits</h5>
            <p>With 0% commission* , you take 100% profits with you</p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div>
            <img src={Account} className="my-2" />
            <h5>Account Management</h5>
            <p>Our Dedicated managers will help your business on Flipkart</p>
          </div>
          <div className="mt-4">
            <img src={Charges} className="my-2" />
            <h5>Lower Return Charges</h5>
            <p>
              With our flat and low return charges, ship your products
              stress-free
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div>
            <img src={Calculator} className="my-2" />
            <h5>Simple Pricing Calculator</h5>
            <p>
              Use our simple pricing calculator to decide the best and
              competitive selling price for your product
            </p>
          </div>
          <div className="mt-4">
            <img src={Payment} className="my-2" />
            <h5>Fast & Regular Payments</h5>
            <p>Get payments as fast as 7-10 days from the date of dispatch</p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div>
            <img src={Mobile} className="my-2" />
            <h5>Business on the go</h5>
            <p>
              Download our Flipkart Seller App to manage your business anywhere,
              anytime
            </p>
          </div>
          <div className="mt-4">
            <img src={Truck} className="my-2" />
            <h5>Sell Across India</h5>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
