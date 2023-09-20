import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";

function Search() {
  const { searchResult } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(1);

  function GetSortedResult({ productDetails, sortedBy }) {
    // sort array by purchases
    if (sortedBy === 1) {
      productDetails.sort((a, b) => b.purchases - a.purchases);
      return (
        <>
          {productDetails.map((item, i) => {
            return (
              <div key={`card-item-${i}`} className="col-md-3">
                <ProductCard productDetails={item} />
              </div>
            );
          })}
        </>
      );
    } else if (sortedBy === 2) {
      // sort by high to low
      productDetails.sort((a, b) => a.price - b.price);
      return (
        <>
          {productDetails.map((item, i) => {
            return (
              <div key={`card-item-${i}`} className="col-md-3">
                <ProductCard productDetails={item} />
              </div>
            );
          })}
        </>
      );
    } else {
      // sort by high to low

      productDetails.sort((a, b) => b.price - a.price);
      return (
        <>
          {productDetails.map((item, i) => {
            return (
              <div key={`card-item-${i}`} className="col-md-3">
                <ProductCard productDetails={item} />
              </div>
            );
          })}
        </>
      );
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-md-3">
            <SearchFilter />
          </div>
          <div className="col-md-9 bg-white p-2">
            <div className="d-flex theme-font-size">
              <h6>All Categories</h6>
              <p className="text-secondary mx-2">
                (Showing 1 – 40 products of 2,89,034 products)
              </p>
            </div>
            <div className="search-product-container">
              <ul class="nav d-flex gap-3 align-items-center">
                <li class="nav-item nav-link text-dark">Sort By</li>
                <li onClick={() => setActiveTab(1)} class="nav-item">
                  <span
                    className={`text-${
                      activeTab === 1 ? "primary" : ""
                    } theme-pointer-cursor `}
                  >
                    Popularity
                  </span>
                </li>
                <li onClick={() => setActiveTab(2)} class="nav-item">
                  <span
                    className={`text-${
                      activeTab === 2 ? "primary" : ""
                    } theme-pointer-cursor `}
                  >
                    Price -- Low to High
                  </span>
                </li>
                <li onClick={() => setActiveTab(3)} class="nav-item">
                  <span
                    className={`text-${
                      activeTab === 3 ? "primary" : ""
                    } theme-pointer-cursor `}
                  >
                    Price -- High to Low
                  </span>
                </li>
              </ul>
            </div>
            <div className="search-result-container  row">
              <GetSortedResult
                productDetails={searchResult}
                sortedBy={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
