import React, { useContext, useEffect } from "react";
import OrderFilter from "../components/OrderFilter";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import {
  faMagnifyingGlass,
  faCircle,
  faStar,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import userImg from "../assets/logo.png";
import { GlobalContext } from "../context/GlobalState";
function Orders() {
  const { orders } = useContext(GlobalContext);

  function getDeliveryContent(
    deliveryStatus,
    deliveryOn,
    deliveredOn,
    rateLink
  ) {
    switch (deliveryStatus) {
      case "delivered":
        return (
          <div>
            <FontAwesomeIcon icon={faCircle} className="text-success mx-2" />
            Delivered on {deliveredOn}
            <p>Your item has been delivered</p>
            <FontAwesomeIcon icon={faStar} className="text-primary mx-2" />
            <Link to={rateLink}>Rate & Review product</Link>
          </div>
        );

      case "book":
        return (
          <div>
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="text-warning mx-2"
            />
            Delivery on {deliveryOn}
            <p>Your item will be deliver on {deliveryOn}</p>
          </div>
        );
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 my-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item ">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to="/account">Account</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <Link to="/account/orders">Orders</Link>
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-3">
            <OrderFilter />
          </div>
          <div className="col-md-9 px-4">
            <div class="input-group ">
              <input
                type="text"
                class="form-control bg-white"
                placeholder="Search your orders here"
              />
              <button class="btn btn-primary" type="button" id="button-addon2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>

            {orders.map((item) => {
              return (
                <div className="d-flex my-3 bg-white p-2 theme-font-size theme-menu-boxshadow-hover">
                  <img src={userImg} width={95} alt="product" />
                  <div className="col-md-4">
                    <p>{item.details}</p>
                    <p>Color: {item.color}</p>
                  </div>
                  <div className="col-md-3 justify-content-center">
                    <p>Price: {item.price}</p>
                  </div>
                  {getDeliveryContent(
                    item.deliveryStatus,
                    item.deliveryOn,
                    item.deliveredOn,
                    item.rateLink
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
