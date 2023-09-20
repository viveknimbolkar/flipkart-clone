import React, {useEffect} from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/global.css";
import { useNavigate } from "react-router-dom";
function Coupons() {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("token");
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, []);
  const availableCoupons = [
    {
      name: "Extra 5% Off select product",
      details:
        "Get extra 5% off on 1 items (price inclusive of cashback/coupon)",
      validity: "31 Jan, 2023",
      termsAndConditions: [
        "This offer is valid until stocks last or till the offer ends.",
        "Final Price is inclusive of the offer.",
        "Offer is applicable on select products and brands.In the event the user returns any/all products in the order placed during the Offer Period, thereby not maintaining the minimum purchase value, as required to avail the Offer,he/she shall not be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer shall stand deducted from any refund(s) processed for the returned product(s).",
      ],
    },
    {
      name: "Extra 5% Off select product",
      details:
        "Get extra 5% off on 1 items (price inclusive of cashback/coupon)",
      validity: "31 Jan, 2023",
      termsAndConditions: [
        "This offer is valid until stocks last or till the offer ends.",
        "Final Price is inclusive of the offer.",
        "Offer is applicable on select products and brands.In the event the user returns any/all products in the order placed during the Offer Period, thereby not maintaining the minimum purchase value, as required to avail the Offer,he/she shall not be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer shall stand deducted from any refund(s) processed for the returned product(s).",
      ],
    },
  ];
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
                <ul className="list-unstyled">
                  {availableCoupons.map((item, i) => {
                    return (
                      <li>
                        <div className="border p-4">
                          <div className="col-md-12 d-flex justify-content-between">
                            <p className=" p-1 text-success">
                              <strong>{item.name}</strong>
                            </p>
                            <p>
                              <div>{item.validity}</div>
                            </p>
                          </div>
                          <div className="col-md-12 d-flex justify-content-between">
                            <p className=" p-1">{item.name}</p>
                            <p>
                              <div className=" dropdown">
                                <strong
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  className="text-primary theme-pointer-cursor"
                                >
                                  View T&C
                                </strong>
                                <ul
                                  class="dropdown-menu"
                                  style={{ width: 300 }}
                                >
                                  {item.termsAndConditions.map((terms) => {
                                    return <li className="p-3">{terms}</li>;
                                  })}
                                </ul>
                              </div>
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Coupons;
