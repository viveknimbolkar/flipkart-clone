import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import laptopImg1 from "../assets/laptop-1.webp";
import laptopImg2 from "../assets/laptop-2.webp";
import laptopImg3 from "../assets/laptop-3.webp";
import laptopImg4 from "../assets/laptop-4.webp";
import laptopImg5 from "../assets/laptop-5.webp";
import laptopImg6 from "../assets/laptop-6.webp";
import laptopImg7 from "../assets/laptop-7.webp";
import review1 from "../assets/review-1.webp";
import review2 from "../assets/review-2.webp";
import review3 from "../assets/review-3.webp";
import review4 from "../assets/review-4.webp";
import laptop from "../assets/hp-laptop.webp";
import mouse from "../assets/mouse.webp";
import bag from "../assets/bag.webp";
import pendrive from "../assets/pendrive.webp";
import webcam from "../assets/webcam.webp";
import keyboard from "../assets/keyboard.webp";
import headphone from "../assets/headphone.webp";
const initialState = {
  isUserLoggedIn: false,
  address: [
    {
      id: 1,
      name: "Vivek Nimbolkar",
      mobile: "987456321",
      address: "Durga Chaulk, Near Z.p. School",
      pincode: "444204",
      city: "Tunki Bk.",
      landmark: "landmark",
      state: "maharashtra",
      alternateMobile: "1234567891",
      addressType: "Home",
    },
    {
      id: 2,
      name: "Vivek Nimbolkar",
      mobile: "987456321",
      address: "Durga Chaulk, Near Z.p. School",
      pincode: "444204",
      city: "Tunki Bk.",
      landmark: "landmark",
      state: "maharashtra",
      alternateMobile: "1234567891",
      addressType: "Home",
    },
  ],
  notification: [
    {
      image: "",
      details:
        'Comes with 6.51" HD+ Display, 6000 mAH Battery & many more exciting features.',
      date: "14 Jan, 2023",
      link: "/",
    },
    {
      image: "",
      details:
        'Comes with 6.51" HD+ Display, 6000 mAH Battery & many more exciting features.',
      date: "14 Jan, 2023",
      link: "/account",
    },
  ],
  orderFilters: {
    status: ["on the way", "delivered", "cancelled", "returned"],
    time: ["last 30 days", "2022", "2021", "2020", "2019", "older"],
  },
  orders: [
    {
      productImg: "",
      details: "this is product details",
      color: "black",
      price: "3445",
      deliveryStatus: "book",
      rateLink: "/",
      deliveryOn: "12 jan 2023",
      deliveredOn: "",
    },
    {
      productImg: "",
      details: "this is product details",
      color: "black",
      price: "3445",
      deliveryStatus: "book",
      rateLink: "/",
      deliveryOn: "12 jan 2023",
      deliveredOn: "",
    },
  ],
  product: {
    reviewDetails: [
      {
        author: "Rama Pandit",
        rating: "3.6",
        longComment:
          "this is the best laptop with this price segment, Design : 5 Performance: 5 Battery:. 3",
        shortComment: "Pretty good",
        date: "Oct, 2022",
        images: [
          laptopImg1,
          laptopImg2,
          laptopImg3,
          laptopImg4,
          laptopImg5,
          laptopImg6,
          laptopImg7,
        ],
      },
      {
        author: "Rama Pandit",
        rating: "3.6",
        longComment:
          "I have used this laptop for one week and my observations are as below.1. It took 90 to 100 min to charge from 10% to 100%. ( 5 times tested)2. Battery backup is approx 190 min to 210 min as per this usage => Full brightness, Hotspot in use, Only slideshow application run. (times tested)",
        shortComment: "Wonderful",
        date: "Oct, 2022",
        images: [review1, review2, review3, review4],
      },
    ],
    ratingAndReviews: {
      starRatings: {
        fiveStar: "4678",
        fourStar: "3434",
        threeStar: "2301",
        twoStar: "1503",
        oneStar: "10",
      },
      totalRating: "123456",
      reviews: "5667",
      average: {
        performance: "4.3",
        battery: "3.5",
        design: "4.3",
        display: "2.5",
      },
    },

    sellerInfo: {
      name: "IndiflashMart",
      rating: "4.3",
    },
    easyPaymentOptions: [
      "No cost EMI starting from ₹8,332/month",
      "Cash on Delivery",
      "Net banking & Credit/ Debit ATM card",
    ],

    importantNote:
      "The Windows 11 Upgrade rollout plan is scheduled to begin in late 2021 and will continue into 2022. The specific timing will vary as per the device.",
    highlights: [
      "NVIDIA GeForce GTX 1650",
      "15.6 inch Full HD WLED-Backlit IPS Anti-glare Micro-edge Display (Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC) ",
      "Light Laptop without Optical Disk Drive",
      "Pre-installed Genuine Windows 10 OS ",
    ],
    exchange: {
      withPrice: "33,990",
      withoutPrice: "12,000 ",
    },
    offers: [
      {
        by: "Bank Offer",
        details:
          "10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above",
        termsAndConditions: [],
      },
      {
        by: "Bank Offer",
        details:
          "10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above",
        termsAndConditions: [],
      },
      {
        by: "Bank Offer",
        details:
          "10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above",
        termsAndConditions: [],
      },
      {
        by: "Bank Offer",
        details:
          "10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above",
        termsAndConditions: [],
      },
    ],
    purchases: "456893",
    rating: "2.4",
    percentOff: "26",
    originalPrice: "45990",
    price: "33990",
    discount: "2000",
    details:
      "HP 14s Intel Core i3 11th Gen - (8 GB 256 GB SSD/Windows 11Home) 14s - dy2507TU Thin and Light Laptop (14 inch, Natural Silver, 1.41 Kg, With MS Office)",
    images: [
      laptopImg1,
      laptopImg2,
      laptopImg3,
      laptopImg4,
      laptopImg5,
      laptopImg6,
      laptopImg7,
    ],
    specifications: {
      general: {
        salesPackage: [
          "Laptop",
          "Power Adaptor",
          "User Guide",
          "Warranty Documents",
        ],
        modelNumber: "15-ec2004AX",
        partNumber: "3E3R5PA",
        series: "Pavilion",
        color: "Shadow Black",
        type: "Gaming Laptop",
        suitableFor: "Gaming",
        batteryCell: "3 cell",
        msOfficeProvided: "no",
      },
      processorAndMemoryFeatures: {
        dedicatedGraphicMemoryType: "GDDR6",
        dedicatedGraphicMemoryCapacity: "4 GB",
        processorBrand: "AMD",
        ProcessorName: "Ryzen 5 Hexa Core",
        SSD: "Yes",
        SSDCapacity: "512 GB",
        RAM: "8 GB ",
        RAMType: "DDR4",
        processorVariant: "AMD R5-5600H",
        clockSpeed: "3.3 GHz with Turbo Boost Upto 4.2 GHz",
        expandableMemory: "Upto 16 GB ",
        RAMFrequency: "3200 MHz",
        cache: "16MB",
        graphicProcessor: "NVIDIA GeForce GTX 1650",
        numberOfCores: "6",
      },
      operatingSystem: {
        OSArchitecture: "64 bit",
        operatingSystem: "Windows 10 ",
        systemArchitecture: "64 bit ",
      },
      portAndSlotFeatures: {
        micIn: "Yes",
        RJ45: "Yes",
        USBPort: [
          " 1 x SuperSpeed USB Type-C (5Gbps Signaling Rate)",
          "1 x SuperSpeed USB Type-A (5Gbps Signaling Rate)",
          "1 x USB 2.0 Type-A (HP Sleep and Charge)",
        ],
        HDMIPort: "1 x HDMI 2.0",
        multiCardSlot: "3-in-1 Card Reader (SD, SDHC, SDxC",
        hardwareInterface: "PCIe NVMe M.2",
      },
      displayAndAudioFeatures: {
        touchscreen: "No",
        screenSize: "39.62 cm (15.6 inch)",
        screenResolution: "1920 x 1080 Pixel",
        screenType: [
          "Full HD WLED-Backlit IPS Anti-glare Micro-edge Display (Brightness: 250 nits, 141 PPI",
          "Color Gamut: 45% NTSC)",
        ],
        speakers: "Built-in Dual Speakers",
        internalMic: "Integrated Dual Array Digital Microphone",
        soundProperties: ["Audio by Bang & Olufsen", "Dual Speakers"],
        refreshRate: "144 Hz",
      },
      connectivityFeatures: {
        wirelessLAN: "RTL8822CE 802.11a/b/g/n/ac (2x2)",
        bluetooth: "v5.0",
        ethernet: "10/100/1000 GbE LAN",
      },
      dimensions: {
        dimensions: "360 x 257 x 23.5 mm",
        weight: "1.98 kg",
      },
      additionalFeatures: {
        diskDrive: "Not Available",
        webCamera: "HP TrueVision HD Webcam",
        fingerPrintSensor: "No",
        keyboard: [
          "Full-size",
          "Ultra Violet Backlit",
          "Shadow Black Keyboard with Numeric Keypad",
        ],
        backlitKeyboard: "Yes",
        pointerDevice: "HP Imagepad with Multi-Touch Gesture Support",
        includedSoftware: [
          "HP Documentation",
          "HP e-service",
          " HP BIOS Recovery",
          "HP SSRM, HP Smart",
          "HP Jumpstarts",
        ],
        additionalFeatures: "52.5Wh Li-ion Polymer Battery",
      },
      warranty: {
        warrantySummary: "1 Year Onsite Warranty",
        warrantyServiceType: "Onsite",
        coveredInnWarranty: "Manufacturing Defects",
        notCoveredInWarranty: "Physical Damage",
        domesticWarranty: "1 Year",
      },
    },
  },
  interedtedProduct: [
    {
      link: "/account",
      image: webcam,
      heading: "Web Camera",
      discount: "22",
    },
    {
      link: "/account",
      image: headphone,
      heading: "Web Camera",
      discount: "67",
    },
    {
      link: "/account",
      image: pendrive,
      heading: "Web Camera",
      discount: "21",
    },
    {
      link: "/account",
      image: keyboard,
      heading: "Web Camera",
      discount: "8",
    },
  ],
  deliveryInfo: {
    pincode: "444562",
    day: "sunday",
    date: "21",
    month: "Jan",
    charges: "40",
    orderBeforTime: "10:34",
  },
  // this obj only contains two objects
  frequentlyBoughtTogether: [
    {
      link: "/account",
      image: mouse,
      details:
        "HP Pavilion Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows",
      rating: "4.4",
      purchases: "11507",
      originalPrice: "63539",
      price: "899",
      discount: "21",
    },
    {
      link: "/account",
      image: bag,
      details:
        "HP Pavilion Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows",
      rating: "4.4",
      purchases: "11507",
      originalPrice: "63539",
      price: "499",
      discount: "21",
    },
  ],
  similarProducts: [
    {
      link: "/account",
      image: laptopImg1,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg1,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg1,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg1,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg1,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg4,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg2,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
    {
      link: "/account",
      image: laptopImg5,
      details: "details",
      rating: "4.6",
      purchases: "344556",
      price: "34567",
      originalPrice: "78900",
      discount: "22",
    },
  ],

  // array of search result
  searchResult: [
    {
      details: "one details",
      quantity: "45ml",
      rating: "4.7",
      price: "5689",
      originalPrice: "7342",
      discount: "34",
      deliveryCharges: "free delivery",
      link: "/account",
      imgLink: laptopImg2,
      flipkartAssured: true,
      purchases: "52",
    },
    {
      details: "two details",
      quantity: "45ml",
      rating: "4.7",
      price: "3672",
      originalPrice: "7342",
      discount: "34",
      deliveryCharges: "free delivery",
      link: "/account",
      imgLink: laptopImg1,
      flipkartAssured: true,
      purchases: "122334",
    },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

//create store
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // add new address
  function addNewAddress(newAddress) {
    dispatch({
      payload: newAddress,
      type: "ADD_NEW_ADDRESS",
    });
  }

  // remove address
  function removeAddress(addressid) {
    dispatch({
      payload: addressid,
      type: "REMOVE_ADDRESS",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isUserLoggedIn: state.isUserLoggedIn,
        address: state.address,
        notification: state.notification,
        orderFilters: state.orderFilters,
        orders: state.orders,
        product: state.product,
        deliveryInfo: state.deliveryInfo,
        frequentlyBoughtTogether: state.frequentlyBoughtTogether,
        interedtedProduct: state.interedtedProduct,
        similarProducts: state.similarProducts,
        searchResult: state.searchResult,
        addNewAddress,
        removeAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
