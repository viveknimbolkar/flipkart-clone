import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBell,
  faCoins,
  faGift,
  faList,
  faMagnifyingGlass,
  faPlus,
  faRightFromBracket,
  faTicket,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import shoppingVector from "../assets/shopping.png";
import shoppingVector2 from "../assets/shopping-1.png";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { APIContext } from "../context/api";
function Header() {
  const navigate = useNavigate();
  const { loginUser, registerUser } = useContext(APIContext);
  const isUserLoggedIn = localStorage.getItem("token");
  const [authModal, setAuthModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const userDropdown = [
    {
      label: "My Profile",
      icon: faUser,
      path: "/account/",
    },
    {
      label: "Flipkart Plus Zone",
      icon: faPlus,
      path: "/account/pluszone",
    },
    {
      label: "SuperCoin Zone",
      icon: faCoins,
      path: "/account/supercoin",
    },
    {
      label: "Orders",
      icon: faBagShopping,
      path: "/account/orders",
    },
    {
      label: "Wishlist",
      icon: faList,
      path: "/account/wishlist",
    },
    {
      label: "Coupons",
      icon: faTicket,
      path: "/account/coupons",
    },
    {
      label: "Gift Cards",
      icon: faGift,
      path: "/account/giftcard",
    },
    {
      label: "Notifications",
      icon: faBell,
      path: "/account/notifications",
    },
    {
      label: "Logout",
      icon: faRightFromBracket,
      path: "/account/logout",
    },
  ];

  function AuthModal(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
      loginUser(email, password);
    };

    const handleRegister = () => {
      registerUser(name, email, password);
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        {authModal && !registerModal ? (
          <div className="row d-flex auth-container">
            <div className="col-md-5 p-4 text-white bg-primary">
              <h1>Login</h1>
              <p>Enjoy free coupons and exciting offers with flipkart</p>
              <img width={300} src={shoppingVector2} />
            </div>
            <div className="col-md-7 p-4 ">
              <input
                value={email}
                className="w-100 my-4"
                placeholder="Enter your email..."
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                value={password}
                className="w-100 my-4"
                placeholder="Enter your password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </p>
              <button
                onClick={handleLogin}
                className=" otp-btn my-4 text-white  w-100"
              >
                Login
              </button>
              <p
                onClick={() => {
                  setRegisterModal(true);
                }}
                style={{ cursor: "pointer" }}
                className="text-primary"
              >
                New to Flipkart? Create an account
              </p>
            </div>
          </div>
        ) : (
          <div className="row d-flex auth-container">
            <div className="col-md-5 p-4 text-white bg-primary">
              <h1>Register</h1>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
              <img width={300} src={shoppingVector} />
            </div>
            <div className="col-md-7 p-4 ">
              <input
                value={name}
                className="w-100 my-4"
                placeholder="Enter your name..."
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                value={email}
                className="w-100 my-4"
                placeholder="Enter your email..."
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                value={password}
                className="w-100 my-4"
                placeholder="Enter your password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </p>
              <button
                onClick={handleRegister}
                className=" otp-btn my-4 text-white  w-100"
              >
                Register
              </button>
              <p
                onClick={() => {
                  setRegisterModal(false);
                }}
                style={{ cursor: "pointer" }}
                className="text-primary"
              >
                Already have an account
              </p>
            </div>
          </div>
        )}
      </Modal>
    );
  }

  return (
    <nav
      style={{ position: "fit" }}
      className="navbar  navbar-expand-lg navbar-dark bg-primary"
    >
      <div className="container-fluid">
        <Link to="/">
          <img
            src={logo}
            className="img-fluid"
            width={50}
            alt="flipkart-logo"
          />
        </Link>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className=" navbar-nav align-items-center w-100 justify-content-around text-light">
            <li className="nav-item w-50">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for product's, brands and many more..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <Link to="/search">
                  <button
                    class="btn btn-light"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </Link>
              </div>
            </li>
            {isUserLoggedIn ? (
              <li className="nav-item dropdown fw-bold">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vivek
                </a>
                <ul className="dropdown-menu ">
                  {userDropdown.map((item, i) => {
                    return (
                      <li
                        onClick={() => {
                          if (item.label === "Logout") {
                            localStorage.clear();
                            navigate("/");
                          }
                        }}
                        key={`list-${i * 2}`}
                        className="d-flex align-items-center  border-bottom dropdown-item"
                      >
                        <FontAwesomeIcon icon={item.icon} />

                        <Link className="dropdown-item" to={item.path}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li className="nav-item fw-bold">
                <button
                  onClick={() => setAuthModal(true)}
                  className="btn bg-white text-primary fw-bold login-btn"
                >
                  Login
                </button>
                <AuthModal
                  show={authModal}
                  onHide={() => setAuthModal(false)}
                />
              </li>
            )}

            <li className="nav-item fw-bold">
              <Link
                className="text-white text-decoration-none"
                to={"account/cart"}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link to="/seller/register" className="nav-link text-light">
                Become a Sellar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
