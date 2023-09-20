import React from "react";
import "../css/common-slider.css";
function CommonSlider({ children }) {
  return <div className="d-flex py-1 bg-white gap-2 common-slider">{children}</div>;
}

export default CommonSlider;
