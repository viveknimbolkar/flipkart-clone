import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-logo.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RatingPill from "../components/RatingPill";
import { GlobalContext } from "../context/GlobalState";
import protectionImg from "../assets/protection.webp";
import "../css/product.css";
import flipakartPlusPoster from "../assets/flipkart-plus-poster.webp";
import { Modal } from "react-bootstrap";
import flipkartAssuredIcon from "../assets/flipkart-assured.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faTag,
  faStar,
  faShoppingCart,
  faPlus,
  faLocationDot,
  faEquals,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import SellerRatingPill from "../components/SellerRatingPill";
import FrequentlyBoughtTogether from "../components/FrequentlyBoughtTogether";
import TotalRatingProgressBar from "../components/TotalRatingProgressBar";
import SimpleProductCard from "../components/SimpleProductCard";
import CommonSlider from "../components/CommonSlider";
import CommonProductCard from "../components/CommonProductCard";

function 

DeliveryDetails(props) {
  return (
    <Modal
      {...props}
      size="k"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delivery & Installation Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-auto theme-font-size">Delivery by</div>
          <div className="d-flex gap-2">
            <div className="fw-bold border-right">22 Jan, Sunday</div>
            <strong className="text-success fw-bold">Free</strong>
            <span className="text-secondary">
              <FontAwesomeIcon icon={faIndianRupee} />
              <s>40</s>
            </span>
          </div>
          <span className="product-order-before">
            if ordered before 7:15 PM
          </span>
          <div>
            <p className="text-secondary fw-bold theme-font-size">
              Installation Details
            </p>
            <ul>
              <li className="theme-font-size">
                This product doesn't require installation
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary theme-font-size fw-bold">
              Shipping Charges For Flipkart Assured Items
            </p>
            <p className="theme-font-size">
              Shipping Charges For Flipkart Assured Items
            </p>
            <p className="theme-font-size">
              For Plus customers, shipping charges are free. For non-Plus
              customers, if the total value of FAssured items is more than
              Rs.500, shipping charges are free. If the total value of FAssured
              items is less than Rs.500, shipping charges = Rs.40 per unit * For
              faster delivery, shipping charges will be applicable.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Product() {
  const {
    product,
    deliveryInfo,
    similarProducts,
    interedtedProduct,
    frequentlyBoughtTogether,
  } = useContext(GlobalContext);
  const [activeImg, setActiveImg] = useState(0);
  const [modal, setModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [expandSpecificationTable, setExpandSpecificationTable] =
    useState(false);
  const [protectionChecked, setProtectionChecked] = useState(true);

  document.title = product.details;
  function GetArrayTableRow({ label, values }) {
    return (
      <tr>
        <td className="text-secondary theme-font-size">{label}</td>
        <td className="fw-normal theme-font-size">
          {values.map((item) => {
            return { item };
          })}
        </td>
      </tr>
    );
  }

  function GetTableRow({ label, value }) {
    return (
      <tr>
        <td className="text-secondary theme-font-size">{label}</td>
        <td className="fw-normal theme-font-size">{value}</td>
      </tr>
    );
  }

  function GetAdditionalFeatures({ additionalFeatures }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Additional Features</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <GetTableRow
                label={"Disk Drive"}
                value={additionalFeatures.diskDrive}
              />
              <GetTableRow
                label={"Web Camera"}
                value={additionalFeatures.webCamera}
              />
              <GetTableRow
                label={"Finger Print Sensor"}
                value={additionalFeatures.fingerPrintSensor}
              />
              <GetTableRow
                label={"Backlit Keyboard"}
                value={additionalFeatures.backlitKeyboard}
              />
              <GetTableRow
                label={"Pointer Device"}
                value={additionalFeatures.pointerDevice}
              />
              <GetTableRow
                label={"Additional Features"}
                value={additionalFeatures.additionalFeatures}
              />
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetDimensions({ dimensions }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Dimensions</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">Weight</td>
                <td className="fw-normal theme-font-size">
                  {dimensions.weight}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Dimensions</td>
                <td className="fw-normal theme-font-size">
                  {dimensions.dimensions}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetConnectivityFeatures({ connectivityFeatures }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Connectivity Features</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">Wireless LAN</td>
                <td className="fw-normal theme-font-size">
                  {connectivityFeatures.wirelessLAN}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Bluetooth</td>
                <td className="fw-normal theme-font-size">
                  {connectivityFeatures.bluetooth}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Ethernet</td>
                <td className="fw-normal theme-font-size">
                  {connectivityFeatures.ethernet}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetDisplayAndAudioFeatures({ displayAndAudioFeatures }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Display And Audio Features</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">Touchscreen</td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.touchscreen}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Screen Size</td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.screenSize}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Screen Resolution
                </td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.screenResolution}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Screen Type</td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.screenType.map((item) => {
                    return <>{item} ,</>;
                  })}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Speakers</td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.speakers}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Internal Mic</td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.internalMic}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Refresh Rate</td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.refreshRate}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Sound Properties
                </td>
                <td className="fw-normal theme-font-size">
                  {displayAndAudioFeatures.soundProperties.map((item) => {
                    return <>{item} ,</>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetPortAndSlot({ portAndSlotFeatures }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Port And Slot Features</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">Mic In</td>
                <td className="fw-normal theme-font-size">
                  {portAndSlotFeatures.micIn}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">RJ45</td>
                <td className="fw-normal theme-font-size">
                  {portAndSlotFeatures.RJ45}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">USB Port</td>
                <td className="fw-normal theme-font-size">
                  {portAndSlotFeatures.USBPort.map((item) => {
                    return <>{item} ,</>;
                  })}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">HDMI Port</td>
                <td className="fw-normal theme-font-size">
                  {portAndSlotFeatures.HDMIPort}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Multi Card Slot
                </td>
                <td className="fw-normal theme-font-size">
                  {portAndSlotFeatures.multiCardSlot}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Hardware Interface
                </td>
                <td className="fw-normal theme-font-size">
                  {portAndSlotFeatures.hardwareInterface}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetOperatingSystem({ OSSpecifications }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Operating System</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">
                  OS Architecture
                </td>
                <td className="fw-normal theme-font-size">
                  {OSSpecifications.OSArchitecture}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Operating System
                </td>
                <td className="fw-normal theme-font-size">
                  {OSSpecifications.operatingSystem}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  System Architecture
                </td>
                <td className="fw-normal theme-font-size">
                  {OSSpecifications.systemArchitecture}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetProcessorAndMemoryFeatures({ processorSpecifications }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>Processor And Memory Features</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">
                  Dedicated Graphic Memory Type
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.dedicatedGraphicMemoryType}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Dedicated Graphic Memory Capacity
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.dedicatedGraphicMemoryCapacity}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Processor Brand
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.processorBrand}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Processor Name
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.ProcessorName}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">SSD</td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.SSD}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">SSD Capacity</td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.SSDCapacity}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">RAM</td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.RAM}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">RAM Type</td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.RAMType}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  Processor Varian
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.processorVariant}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Clock Speed</td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.clockSpeed}
                </td>
              </tr>{" "}
              <tr>
                <td className="text-secondary theme-font-size">
                  Expandable Memor
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.expandableMemory}
                </td>
              </tr>{" "}
              <tr>
                <td className="text-secondary theme-font-size">
                  RAM Frequency
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.RAMFrequency}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Cache</td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.cache}
                </td>
              </tr>{" "}
              <tr>
                <td className="text-secondary theme-font-size">
                  Graphic Processor
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.graphicProcessor}
                </td>
              </tr>{" "}
              <tr>
                <td className="text-secondary theme-font-size">
                  Number of Cores
                </td>
                <td className="fw-normal theme-font-size">
                  {processorSpecifications.numberOfCores}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  function GetGeneralSpecificationTable({ generalSpecifications }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>General</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">
                  Sales Package
                </td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.salesPackage.map((item) => {
                    return <>{item}</>;
                  })}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Model Number</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.modelNumber}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Part Number</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.partNumber}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Series</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.series}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Color</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.color}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Suitable For</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.suitableFor}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Battery Cell</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.batteryCell}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  MS Office Provided
                </td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.msOfficeProvided}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function GetFullSpecificationTable({ specifications }) {
    return (
      <>
        <GetGeneralSpecificationTable
          generalSpecifications={specifications.general}
        />
        <GetProcessorAndMemoryFeatures
          processorSpecifications={specifications.processorAndMemoryFeatures}
        />
        <GetOperatingSystem OSSpecifications={specifications.operatingSystem} />
        <GetPortAndSlot
          portAndSlotFeatures={specifications.portAndSlotFeatures}
        />
        <GetDisplayAndAudioFeatures
          displayAndAudioFeatures={specifications.displayAndAudioFeatures}
        />
        <GetConnectivityFeatures
          connectivityFeatures={specifications.connectivityFeatures}
        />
        <GetDimensions dimensions={specifications.dimensions} />
        <GetAdditionalFeatures
          additionalFeatures={specifications.additionalFeatures}
        />
      </>
    );
  }

  function GetSampleSpecifications({ generalSpecifications }) {
    return (
      <>
        <div className="border-bottom p-2">
          <h6>General</h6>
        </div>
        <div>
          <table className="table ">
            <tbody className="product-table">
              <tr>
                <td className="text-secondary theme-font-size">
                  Sales Package
                </td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.salesPackage.map((item) => {
                    return <>{item}</>;
                  })}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Model Number</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.modelNumber}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Part Number</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.partNumber}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Series</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.series}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Color</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.color}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Suitable For</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.suitableFor}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">Battery Cell</td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.batteryCell}
                </td>
              </tr>
              <tr>
                <td className="text-secondary theme-font-size">
                  MS Office Provided
                </td>
                <td className="fw-normal theme-font-size">
                  {generalSpecifications.msOfficeProvided}
                </td>
              </tr>
            </tbody>
          </table>
          <div
            onClick={() =>
              setExpandSpecificationTable(!expandSpecificationTable)
            }
            className="p-3 theme-pointer-cursor border"
          >
            <p className="text-primary">Read More</p>
          </div>
        </div>
      </>
    );
  }

  // TODO: create inner modal to open details of specific img onclick
  function ReviewImagesModal(props) {
    return (
      <Modal
        {...props}
        size="k"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row review-image-modal-container">
            {product.reviewDetails.map((reviews, i) => {
              return (
                <div className="d-flex gap-2 flex-wrap">
                  {reviews.images.map((image, j) => {
                    return (
                      <img
                        // onClick={() => openDetailsOfImage(i, j)}
                        src={image}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  function openMoreReviewsModal() {
    console.log("opened");
  }

  return (
    <div>
      <Header />
      <div className="container-fluid bg-white">
        <div className="row my-3">
          <div className="col-md-5 d-flex border">
            <div class="d-flex flex-column product-img-tab-container">
              {product.images.map((image, i) => {
                return (
                  <div
                    class="p-2 border-bottom"
                    onMouseOver={() => setActiveImg(i)}
                  >
                    <img src={image} className="img-fluid" />
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-column">
              <div className="col-auto product-img">
                <img src={product.images[activeImg]} alt="product image" />
              </div>
              <div className="d-flex gap-2 my-2">
                <button
                  style={{
                    borderRadius: 0,
                    width: 200,
                    fontSize: 16,
                    height: 50,
                  }}
                  className="btn fw-bold btn-lg bg-warning text-white text-uppercase "
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
                  add to cart
                </button>

                <button
                  style={{
                    borderRadius: 0,
                    width: 200,
                    backgroundColor: "#fb641b",
                    fontSize: 16,
                    height: 50,
                  }}
                  className="btn fw-bold btn-lg buy-now text-white text-uppercase "
                >
                  <FontAwesomeIcon icon={faBolt} className="mx-2" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="col-auto p-2">
              <h5 className="fw-normal">{product.details}</h5>
              <div className="d-flex gap-3 align-items-center">
                <RatingPill rating={4.3} />
                <span className="text-secondary">(1,56,569)</span>

                <img src={flipkartAssuredIcon} width={80} />
              </div>
              <p className="text-success">
                Extra <FontAwesomeIcon icon={faIndianRupee} />{" "}
                {product.discount} off
              </p>
              <div className="d-flex align-items-center gap-4">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faIndianRupee} size="xl" />
                  <h2 className="fw-bold">{product.price}</h2>
                </span>
                <span className="text-secondary">
                  <s>
                    <FontAwesomeIcon icon={faIndianRupee} />
                    {product.originalPrice}
                  </s>
                </span>
                <span className="text-success fw-bold">
                  %{product.percentOff} off
                </span>
              </div>
              <div>
                <ul className="list-unstyled">
                  {product.offers.map((item) => {
                    return (
                      <li className="d-flex flex-wrap align-items-center theme-font-size">
                        <FontAwesomeIcon
                          className="text-success mx-2"
                          icon={faTag}
                        />
                        <strong>{item.by}</strong>
                        <span>{item.details}</span>
                        <Link to="/account">T&C</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className=" d-flex flex-column w-50 my-4">
                <div className="d-flex justify-content-between p-3 border">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Buy with exchange
                    </label>
                  </div>
                  <span>{product.exchange.withPrice}</span>
                </div>
                <div className="d-flex justify-content-between p-3 border">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Buy without exchange
                    </label>
                  </div>
                  <span className="text-secondary">
                    Upto <FontAwesomeIcon icon={faIndianRupee} />{" "}
                    {product.exchange.withoutPrice} off
                  </span>
                  {/* <div className="flex-0">sdfs</div> */}
                </div>
              </div>
              <div className="d-flex my-4 align-items-center">
                <div>
                  <img className="border" src={brandLogo} width={60} />
                  <span className="mx-2 theme-font-size">
                    One year onsite warranty
                  </span>
                  <strong className="text-primary theme-pointer-cursor">
                    Know More
                  </strong>
                </div>
              </div>
              <div className="product-highlight-container">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="row my-4">
                      <div className="col-md-2">
                        <h6 className="text-secondary"> Delivery</h6>
                      </div>
                      <div className="col-md-10 d-flex flex-column">
                        <div class="input-group d-flex mx-3 align-items-center dropdown ">
                          <div style={{ width: 20 }}>
                            <FontAwesomeIcon
                              class="text-primary mx-1"
                              icon={faLocationDot}
                            />
                          </div>
                          <input
                            type="text"
                            class="product-delivery-pincode"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />
                          <span class="text-primary theme-pointer-cursor fw-bold mx-2">
                            check
                          </span>
                          <ul class="dropdown-menu px-2">
                            <h6 className="theme-font-size">
                              From Saved Address
                            </h6>
                            <li className="proudct-address-item theme-font-size">
                              <a class="dropdown-item" href="#">
                                <strong>444567</strong>
                                <span className="mx-2 text-secondary">
                                  Amravati Tq. Amravati Dist. Amravati
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <span className="theme-font-size border-right fw-bold">
                            Delivery by {deliveryInfo.date} {deliveryInfo.month}{" "}
                            {deliveryInfo.day}
                          </span>
                          <strong className="text-success mx-2 theme-font-size">
                            Free &nbsp;
                            <FontAwesomeIcon icon={faIndianRupee} /> 40
                          </strong>
                          <br />
                          <span className="product-order-before">
                            if ordered before {deliveryInfo.orderBeforTime}
                          </span>
                          <p
                            className="text-primary theme-pointer-cursor theme-font-size fw-bold"
                            onClick={() => setModal(true)}
                          >
                            View Details
                          </p>
                          <DeliveryDetails
                            show={modal}
                            onHide={() => setModal(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2 theme-font-size text-secondary">
                        Highlights
                      </div>
                      <div className="col-md-10">
                        <ul className="theme-font-size">
                          {product.highlights.map((item) => {
                            return (
                              <li>
                                <p>{item}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2 theme-font-size text-secondary">
                        Easy Payment Options
                      </div>
                      <div className="col-md-10">
                        <ul className="theme-font-size">
                          {product.easyPaymentOptions.map((item) => {
                            return (
                              <li>
                                <p>{item}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2 theme-font-size text-secondary">
                        Seller
                      </div>
                      <div className="col-md-10">
                        <p className="text-primary d-flex fw-bold">
                          {product.sellerInfo.name}{" "}
                          <SellerRatingPill
                            rating={product.sellerInfo.rating}
                          />
                        </p>
                        <ul className="theme-font-size">
                          <li>
                            <p>Stylish & Portable Thin and Light Laptop</p>
                          </li>
                          <li>
                            <p>
                              15.6 inch Full HD (200nits, 45% NTSC color gamut,
                              non-OLED, Anti-glare display)
                            </p>
                          </li>
                          <li>
                            <p>Finger Print Sensor for Faster System Access</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={flipakartPlusPoster} />
              </div>
              <div className="my-4">
                <div className="col-auto border p-2">
                  <h5>
                    <strong>Protect your product</strong>
                  </h5>
                </div>
                <div class="d-flex border gap-2 p-2">
                  <div>
                    <input
                      onChange={() => setProtectionChecked(!protectionChecked)}
                      class="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <img width={150} src={protectionImg} />
                  </div>
                  <div className="d-flex p-2 flex-column">
                    <span className="fw-bold">
                      <strong>Complete Laptop Protection (2 Year)</strong>
                    </span>
                    <span className="theme-font-size">
                      Jeeves Complete laptop protection Covers Broken Screen,
                      Liquid Damage, Hardware Issue. Enjoy Brand Authorized
                      Repair with Free At home service
                    </span>
                    <span className="text-secondary theme-font-size">
                      Buy this plan to get complete peace of mind from
                      accidental & liquid damage for your laptop
                    </span>
                    <div className="d-flex align-items-center my-2 gap-4">
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faIndianRupee} size="sm" />
                        <span className="fw-bold">33,990</span>
                      </span>
                      <span className="text-secondary">
                        <s>
                          <FontAwesomeIcon icon={faIndianRupee} />
                          45,990
                        </s>
                      </span>
                      <span className="text-success ">26% off</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 px-4 product-items-calculation align-items-center border">
                  {protectionChecked ? (
                    <>
                      <div className="p-2">
                        <span className="text-secondary">1 Item</span>
                        <h5>
                          <FontAwesomeIcon icon={faIndianRupee} />
                          4,567
                        </h5>
                      </div>
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                      <div className="p-2">
                        <span className="text-secondary">1 Item</span>
                        <h5>
                          <FontAwesomeIcon icon={faIndianRupee} />
                          4,567
                        </h5>
                      </div>
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faEquals} />
                      </div>
                      <div className="p-2">
                        <span className="text-secondary">1 Item</span>
                        <h5>
                          <FontAwesomeIcon icon={faIndianRupee} />
                          4,567
                        </h5>
                      </div>
                    </>
                  ) : (
                    <div className="p-2 ">
                      Please add at least 1 add-on item to proceed
                    </div>
                  )}

                  <div className="d-flex align-items-center mx-4">
                    <button
                      className={`text-uppercase product-addcart-btn bg-${
                        protectionChecked ? "warning" : "secondary"
                      }  text-white fw-bold px-4`}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                      add 2 items to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="border product-specitication-container">
                <div className="border-bottom p-4">
                  <h3>Specifications</h3>
                </div>
                {expandSpecificationTable ? (
                  <GetFullSpecificationTable
                    specifications={product.specifications}
                  />
                ) : (
                  <GetSampleSpecifications
                    generalSpecifications={product.specifications.general}
                  />
                )}
              </div>
              <div className="p-2">
                <FrequentlyBoughtTogether
                  currentItem={{
                    image: product.images[0],
                    details: product.details,
                    rating: product.rating,
                    price: product.originalPrice,
                    originalPrice: product.originalPrice,
                    discount: product.discount,
                    purchases: product.purchases,
                  }}
                  additionalItems={frequentlyBoughtTogether}
                />
              </div>
              <div className="my-4 border">
                <div className="p-3">
                  <h3>Ratings & Reviews</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row p-2">
                      <div className="col-md-4 d-flex align-items-center">
                        <div>
                          <div className="d-flex theme-font-size justify-content-center align-items-center">
                            <h1>4.4</h1>
                            <FontAwesomeIcon size="xl" icon={faStar} />
                          </div>
                          <span className="theme-font-size">
                            11,507 Ratings & 1,175 Reviews
                          </span>
                        </div>
                      </div>
                      <div className="col-md-8 theme-font-size border-end">
                        <TotalRatingProgressBar
                          starRating={product.ratingAndReviews.starRatings}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    // create progressbar in this container
                  </div>
                </div>
              </div>
              <div className="my-3 d-flex gap-1 flex-wrap product-image-container">
                {product.reviewDetails[0].images.length > 0 &&
                  product.reviewDetails[0].images.map((item) => {
                    return (
                      <div>
                        <img className="product-review-image" src={item} />
                      </div>
                    );
                  })}
                <div
                  onClick={() => setReviewModal(true)}
                  className="product-review-last-image"
                >
                  <img
                    className="w-100"
                    src={product.reviewDetails[0].images[0]}
                  />
                  <span>+{product.reviewDetails.length}</span>
                </div>
                <ReviewImagesModal
                  show={reviewModal}
                  onHide={() => setReviewModal(false)}
                />
              </div>
              <div className="d-flex my-4 flex-column review-section">
                {product.reviewDetails.length > 0 &&
                  product.reviewDetails.map((review, i) => {
                    return (
                      <div className="border-bottom p-2">
                        <div className="d-flex gap-2 my-2">
                          <RatingPill rating={review.rating} />
                          <span>
                            <strong>{review.shortComment}</strong>
                          </span>
                        </div>
                        <div>
                          <p>{review.longComment}</p>
                        </div>
                        <div className="d-flex flex-wrap gap-1">
                          {review.images.map((image) => {
                            return (
                              <div>
                                <img src={image} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-4">
        <h2 className="px-4 py-1">You might be interested in</h2>
        <CommonSlider>
          <SimpleProductCard details={interedtedProduct[0]} />
          <SimpleProductCard details={interedtedProduct[1]} />
          <SimpleProductCard details={interedtedProduct[2]} />
          <SimpleProductCard details={interedtedProduct[3]} />
        </CommonSlider>
      </div>
      <div className="bg-white my-4">
        <h2 className="px-4 py-1">Similar products</h2>
        <CommonSlider>
          {similarProducts.map((item) => {
            return <CommonProductCard details={item} />;
          })}
        </CommonSlider>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
