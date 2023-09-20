import React, { useContext, useEffect, useState } from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import sectionEndImg from "../assets/section-end.png";
import Header from "../components/Header";
import jwtDecode from "jwt-decode";
import { APIContext } from "../context/api";
function Account() {
  const [name, setName] = useState("");

  const token = localStorage.getItem("token");
  const email = jwtDecode(token).email;
  const { updateCustomerName, getCustomerName } = useContext(APIContext);
  useEffect(() => {
    getCustomerName(email)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);
  const saveName = () => {
    updateCustomerName(name, email);
  };

  const handleCustomerNameEdit = () => {
    // const customerName = getCustomerName(token.email);
    // console.log("customer name", customerName);
    // setName(customerName);
  };

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
                <h4>Personal Information </h4>
                {/* <a
                  onClick={handleCustomerNameEdit}
                  className="text-primary text-decoration-none mx-4 mt-1"
                >
                  Edit
                </a> */}
              </div>
              <div class="col-auto  my-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Name..."
                />
              </div>

              <div class="col-auto my-3">
                <button onClick={saveName} class="btn btn-primary mb-3">
                  Save
                </button>
              </div>
              <div class="form-check">
                <h6>Gender</h6>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div class="row p-3 ">
              <div className="d-flex">
                <h4>Email Address</h4>
                <a className="text-primary text-decoration-none mx-4 mt-1">
                  Edit
                </a>
              </div>
              <div class="col-auto  my-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email..."
                />
              </div>

              <div class="col-auto my-3">
                <button type="submit" class="btn btn-primary mb-3">
                  Save
                </button>
              </div>
            </div>
            <div class="row p-3 ">
              <div>
                <h4>FAQs</h4>
                <p>
                  <strong>
                    What happens when I update my email address (or mobile
                    number)?
                  </strong>
                  <br /> <br />
                  Your login email id (or mobile number) changes, likewise.
                  You'll receive all your account related communication on your
                  updated email address (or mobile number). <br /> <br />
                  <strong>
                    When will my Flipkart account be updated with the new email
                    address (or mobile number)?
                  </strong>
                  <br /> <br />
                  It happens as soon as you confirm the verification code sent
                  to your email (or mobile) and save the changes. <br /> <br />
                  <strong>
                    What happens to my existing Flipkart account when I update
                    my email address (or mobile number)?
                  </strong>
                  <br /> <br />
                  Updating your email address (or mobile number) doesn't
                  invalidate your account. Your account remains fully
                  functional. You'll continue seeing your Order history, saved
                  information and personal details. <br /> <br />
                  <strong>
                    Does my Seller account get affected when I update my email
                    address?
                  </strong>
                  <br /> <br />
                  Flipkart has a 'single sign-on' policy. Any changes will
                  reflect in your Seller account also.
                </p>
              </div>
            </div>
            <img
              src={sectionEndImg}
              className="flipkart-section-end-img"
              alt="section end image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
