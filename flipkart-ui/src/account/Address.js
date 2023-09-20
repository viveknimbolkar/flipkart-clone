import React, { useContext, useState, useEffect } from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/address.css";
import { GlobalContext } from "../context/GlobalState";
import { generateId } from "./helper";
function Address() {
  const context = useContext(GlobalContext);
  const [addNewAddressIsVisible, setAddNewAddressIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("Andhra Pradesh");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [addressType, setAddressType] = useState("Home");
  const [landmark, setLandmark] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");

  const newAddress = {
    id: generateId(),
    name: name,
    mobile: mobile,
    address: address,
    pincode: pincode,
    city: city,
    landmark: landmark,
    state: state,
    alternateMobile: alternateMobile,
    addressType: addressType,
  };
  function handleAddNewAddressContainer() {
    setAddNewAddressIsVisible(!addNewAddressIsVisible);
    console.log(addNewAddressIsVisible);
  }


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
            <div class="row m-4">
              <div className="d-flex">
                <h4>Add New Address </h4>
              </div>
              <div class="col-md-12  my-3">
                <button
                  onClick={handleAddNewAddressContainer}
                  className="btn btn-outline-primary w-100"
                >
                  Add New Address
                </button>
                {addNewAddressIsVisible && (
                  <div
                    className="row g-4 my-2"
                    style={{ backgroundColor: "#f1f3f6" }}
                  >
                    <h5>Add New Address</h5>
                    <div class="col-auto">
                      <input
                        value={name}
                        onChange={(e) => {
                          console.log(name);
                          setName(e.target.value);
                        }}
                        type="text"
                        readonly
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-auto">
                      <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        type="number"
                        class="form-control"
                        placeholder="Mobile no."
                      />
                    </div>
                    <div class="col-auto">
                      <input
                        value={alternateMobile}
                        onChange={(e) => setAlternateMobile(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Alternate Phone no."
                      />
                    </div>
                    <div class="col-auto">
                      <input
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        type="number"
                        class="form-control"
                        placeholder="Pincode"
                      />
                    </div>
                    <div class="col-auto w-100">
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address (Street & Locality)"
                        className="form-control"
                        rows={5}
                      ></textarea>
                    </div>
                    <div class="col-auto">
                      <input
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Locality"
                      />
                    </div>
                    <div class="col-auto">
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div class="col-md-4 ">
                      <select
                        className="form-control"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option className="form-control" value="Andhra Pradesh">
                          Andhra Pradesh
                        </option>
                        <option
                          className="form-control"
                          value="Arunachal Pradesh"
                        >
                          Arunachal Pradesh
                        </option>
                        <option className="form-control" value="Assam">
                          Assam
                        </option>
                        <option className="form-control" value="Bihar">
                          Bihar
                        </option>
                        <option className="form-control" value="Chhattisgarh">
                          Chhattisgarh
                        </option>
                        <option className="form-control" value="Goa">
                          Goa
                        </option>
                        <option className="form-control" value="Gujarat">
                          Gujarat
                        </option>
                        <option className="form-control" value="Haryana">
                          Haryana
                        </option>
                        <option
                          className="form-control"
                          value="Himachal Pradesh"
                        >
                          Himachal Pradesh
                        </option>
                        <option className="form-control" value="Jharkhand">
                          Jharkhand
                        </option>
                        <option className="form-control" value="Karnataka">
                          Karnataka
                        </option>
                        <option className="form-control" value="Kerala">
                          Kerala
                        </option>
                        <option className="form-control" value="Madhya Pradesh">
                          Madhya Pradesh
                        </option>
                        <option className="form-control" value="Maharashtra">
                          Maharashtra
                        </option>
                        <option className="form-control" value="Manipur">
                          Manipur
                        </option>
                        <option className="form-control" value="Meghalaya">
                          Meghalaya
                        </option>
                        <option className="form-control" value="Mizoram">
                          Mizoram
                        </option>
                        <option className="form-control" value="Nagaland">
                          Nagaland
                        </option>
                        <option className="form-control" value="Odisha">
                          Odisha
                        </option>
                        <option className="form-control" value="Punjab">
                          Punjab
                        </option>
                        <option className="form-control" value="Rajasthan">
                          Rajasthan
                        </option>
                        <option className="form-control" value="Sikkim">
                          Sikkim
                        </option>
                        <option className="form-control" value="Tamil Nadu">
                          Tamil Nadu
                        </option>
                        <option className="form-control" value="Telangana">
                          Telangana
                        </option>
                        <option className="form-control" value="Tripura">
                          Tripura
                        </option>
                        <option className="form-control" value="Uttar Pradesh">
                          Uttar Pradesh
                        </option>
                        <option className="form-control" value="Uttarakhand">
                          Uttarakhand
                        </option>
                        <option className="form-control" value="West Bengal">
                          West Bengal
                        </option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <input
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Landmark"
                      />
                    </div>

                    <div class="form-check">
                      <h6>Address Type</h6>
                      <input
                        value="Work"
                        onChange={(e) => setAddressType(e.target.value)}
                        class="form-check-input"
                        type="radio"
                        name="addresstype"
                        checked={addressType === "Work"}
                      />
                      <label class="form-check-label">Work</label>
                    </div>
                    <div class="form-check">
                      <input
                        value="Home"
                        onChange={(e) => setAddressType(e.target.value)}
                        class="form-check-input"
                        type="radio"
                        name="addresstype"
                        checked={addressType === "Home"}
                      />
                      <label class="form-check-label">Home</label>
                    </div>

                    <div class="col-md-12">
                      <button
                        onClick={() => context.addNewAddress(newAddress)}
                        type="submit"
                        class="btn btn-primary"
                      >
                        Save
                      </button>
                      <button type="reset" class="btn">
                        Canel
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div class="col-md-12  my-3">
                {context.address.map((item, i) => {
                  return (
                    <div className="border p-4">
                      <div className="col-md-12 d-flex justify-content-between">
                        <p className="flipkart-address-type p-1">
                          {item.addressType}
                        </p>
                        <p>
                          <div className="flipkart-address-option-container dropdown">
                            <FontAwesomeIcon
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              className="dropdown-toggle"
                              icon={faEllipsisVertical}
                              size="lg"
                            />
                            <ul class="dropdown-menu">
                              <li class="dropdown-item">Edit</li>
                              <li
                                onClick={() => context.removeAddress(item.id)}
                                class="dropdown-item"
                              >
                                Delete
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-auto d-flex">
                        <span>
                          <strong>{item.name}</strong>
                        </span>
                        <span className="mx-3">{item.mobile}</span>
                      </div>
                      <div className="col-auto d-flex">
                        <span>
                          {item.address}
                          <span>,{item.city}</span>
                        </span>
                      </div>
                      <div className="col-auto d-flex">
                        <span>{item.state} -</span>
                        <span className="mx-3">
                          <strong>{item.pincode}</strong>
                        </span>
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

export default Address;
