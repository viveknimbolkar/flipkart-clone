import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faIndianRupee, faShield } from "@fortawesome/free-solid-svg-icons";

function PriceDetails() {
  return (
    <>
      <div className="border bg-white p-3">
        <div className="col-md-12 border-bottom">
          <h6 className="text-secondary text-uppercase">Price Details</h6>
        </div>
        <div className="col-md-12 d-flex justify-content-between py-2">
          <label>Price (2 items)</label>
          <span>
            <FontAwesomeIcon icon={faIndianRupee} />
            23,344
          </span>
        </div>
        <div className="col-md-12 d-flex justify-content-between py-2">
          <label>Discount</label>
          <span className="text-success">
            <FontAwesomeIcon icon={faIndianRupee} />- 3,344
          </span>
        </div>
        <div className="col-md-12 d-flex justify-content-between py-2">
          <label>Delivery Charges</label>
          <span className="text-success">FREE</span>
        </div>
        <div className="col-md-12 d-flex justify-content-between py-2">
          <label className="fw-bold">Total Amount</label>
          <span className="fw-bold d-flex gap-1 align-items-center">
            <FontAwesomeIcon size="lg" icon={faIndianRupee} /> <h5>56,344</h5>
          </span>
        </div>
      </div>
      <p className="p-3 text-secondary">
        <FontAwesomeIcon size="lg" icon={faShield} /> Safe and Secure
        Payments.Easy returns.100% Authentic products.
      </p>
    </>
  );
}

export default PriceDetails;
