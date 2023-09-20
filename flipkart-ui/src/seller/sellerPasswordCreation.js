import React, { useState } from "react";
import "../css/seller-password-creation.css";
import BrandLogo from "../assets/seller-header.png";
import { generateStrongPassword, validateStrongPassword } from "../helper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
function SellerPasswordCreation() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  var passwordStrength = validateStrongPassword(password);
  return (
    <div className="bg-white">
      <header className="seller-register-header my-3 d-flex justify-content-start align-items-center gap-4">
        <img src={BrandLogo} width="80px" />
        <div className="d-flex items-center ml-4 gap-2">
          <FontAwesomeIcon className="text-success" icon={faCircleCheck} />
          <h6>EMAIL ID & GSTIN</h6>
        </div>
        <hr />
        <div className="d-flex items-center gap-2">
          <FontAwesomeIcon className="text-success" icon={faCircleCheck} />
          <h6>PASSWORD CREATION</h6>
        </div>
        <hr />
        <div className="d-flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleCheck} />
          <h6>ONBOARDING DASHBOARD</h6>
        </div>
      </header>
      <div className="container ">
        <div className="col-md-8 row">
          <div className="col-md-6">
            <p className="text-sm">
              We've sent a verification link to your email
            </p>
            <h5 className="fw-bold">Almost there...</h5>
            <label className="text-sm">
              We need these details to set up your account. You can also choose
              to fill in the next step
            </label>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="password-input rounded p-2 my-2"
                type={showPassword ? "password" : "text"}
              />

              <FontAwesomeIcon
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? faEye : faEyeSlash}
                className="mx-2 eye-icon"
              />
            </div>
            <span>
              Your password is <FontAwesomeIcon size="sm" className={`${
                  passwordStrength === "strong"
                    ? "text-success"
                    : passwordStrength === "medium"
                    ? "text-warning"
                    : passwordStrength === "weak"
                    ? "text-danger"
                    : ""
                }`} icon={faLock} />
              <span
                className={`${
                  passwordStrength === "strong"
                    ? "text-success"
                    : passwordStrength === "medium"
                    ? "text-warning"
                    : passwordStrength === "weak"
                    ? "text-danger"
                    : ""
                } mx-2 fw-bold`}
              >
                {passwordStrength}
              </span>
            </span>
            <p
              onClick={() => {
                setPassword(generateStrongPassword());
              }}
              className="eye-icon my-2 text-primary fw-bold"
            >
              Suggest Password
            </p>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type={"text"}
              className="password-input rounded p-2 my-2"
              placeholder="Enter your full name"
            />
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type={"text"}
              className="password-input rounded p-2 my-2"
              placeholder="*Enter display name"
            />
            <label className="text-danger" style={{fontSize:14}}>
              Display name already taken. Please try another name.
            </label>
            <button
              className={`${
                password && username && fullname ? "" : "bg-secondary"
              } text-white py-2 font-semibold border rounded bg-primary px-4 my-2`}
            >
              Continue &rarr;
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default SellerPasswordCreation;
