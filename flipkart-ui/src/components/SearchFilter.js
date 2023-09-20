import React from "react";
import { Link } from "react-router-dom";

function SearchFilter() {
  const defaultSearchFilters = [
    "Clothing and Accessories",
    "Automotive Accessories",
    "Food Products",
    "Books",
    "Industrial & Scientific Supplies",
    "Health Care",
    "Home Improvement",
    "Building Materials and Supplies",
    "Beauty and Grooming",
    "Mobiles & Accessories",
    "Computers",
    "Cameras & Accessories",
    "Gaming",
    "Music, Movies & Posters",
    "Home Entertainment",
    "Home & Kitchen",
    "Pens & Stationery",
    "Bags, Wallets & Belts",
    "Home Lighting",
    "Kitchen, Cookware & Serveware",
    "Jewellery",
    "Home Cleaning & Bathroom Accessories",
    "Audio & Video",
    "Eyewear",
    "Vas",
    "Pet Supplies",
    "Home Furnishing",
    "Musical Instruments",
    "Exercise & Fitness",
    "Watches",
    "Kids Accessories",
    "Home Decor",
    "Furniture",
    "Wearable Smart Devices",
    "Sunglasses",
    "Automation & Robotics",
    "Festive Decor & Gifting",
    "Sports",
    "Health & Personal Care Appliances",
    "Footwear",
    "Baby Care",
    "Toys",
    "Toys and Games",
  ];
  return (
    <div className="bg-white p-3 theme-menu-boxshadow">
      <h3>Filters</h3>
      <hr />
      <h6 className="text-uppercase my-2">PICK A CATEGORY</h6>
      <ul className="list-unstyled theme-font-size">
        {defaultSearchFilters.map((item, i) => {
          return (
            <Link
            key={`filter-list-${i}`}
              to={"/"}
              className="text-decoration-none text-dark fw-semibold"
            >
              <li className=" p-2 ">{item}</li>
            </Link>
          );
        })}
      </ul>

      <h6 className="text-uppercase my-2">Order Time</h6>
      <ul></ul>
    </div>
  );
}

export default SearchFilter;
