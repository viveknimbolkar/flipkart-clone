import React, { useEffect } from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
function SavedUPI() {
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
                <h4>No VPAs saved to be shown</h4>
              </div>
              <div>
                <p style={{ fontSize: 14 }}>
                  <strong>FAQs </strong> <br />
                  <strong>Why is my UPI being saved on Flipkart?</strong>
                  <br /> It's quicker. You can save the hassle of typing in the
                  complete UPI information every time you shop at Flipkart by
                  saving your UPI details. You can make your payment by
                  selecting the saved UPI ID of your choice at checkout. While
                  this is obviously faster, it is also very secure.
                  <br />
                  <br />
                  <strong>Is it safe to save my UPI on Flipkart?</strong>
                  <br />
                  Absolutely. Your UPI ID information is 100 percent safe with
                  us. UPI ID details are non PCI compliant and are non
                  confidential data.
                  <br />
                  <br />
                  <strong>What all UPI information does Flipkart store?</strong>
                  <br />
                  Flipkart only stores UPI ID and payment provider details. We
                  do not store UPI PIN/MPIN.
                  <br />
                  <br />
                  <strong>Can I delete my saved UPI?</strong>
                  <br /> Yes, you can delete your UPI ID at any given time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SavedUPI;
