import React, { useContext, useEffect } from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalState";
import "../css/global.css";
import userImg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Notification() {
  const { notification } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container mb-4">
        <div className="row mt-4">
          <div className="col-md-3 ">
            <AccountSideMenu />
          </div>
          <div className="col-auto"></div>
          <div className="col-md-8 bg-white ">
            <div class="row p-3 ">
              <div className="d-flex">
                <h4>Available Coupons</h4>
              </div>
              <div class="col-md-12 my-3">
                {notification.map((item) => {
                  return (
                    <div
                      onClick={() => navigate(item.link)}
                      className="d-flex border theme-pointer-cursor p-3"
                    >
                      <img src={userImg} width={70} alt="product image" />
                      <div className="col-auto mx-4">
                        <p>{item.details}</p>
                        {item.date}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Notification;
