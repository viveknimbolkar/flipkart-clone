import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function SellerRatingPill({rating}) {
  return (
    <div
      className={`bg-${
        Number(rating) < 3 ? "primary" : "success"
      } text-white product-rating px-2 gap-1 align-items-center d-flex rounded-pill`}
    >
     <strong>{rating} </strong> <FontAwesomeIcon icon={faStar} />
    </div>
  );
}

export default SellerRatingPill;
