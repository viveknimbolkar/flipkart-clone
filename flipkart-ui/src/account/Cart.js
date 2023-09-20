import axios from "axios";
import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import PriceDetails from "../components/PriceDetails";
import "../css/cart.css";

function Cart() {
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BASE_API_URL + "get_cart_items",
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="col-12 text-end p-3 bg-white cart-action">
              <button className="p-2 fw-bold text-white border-none ">
                Place Order
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <PriceDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
