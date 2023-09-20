import React from "react";
import Header from "./components/header";
import Sidemenu from "./components/sidemenu";

function SellerHome() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="col-md-3">
          <Sidemenu />
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
}

export default SellerHome;
