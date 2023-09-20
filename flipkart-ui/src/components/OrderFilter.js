import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../css/global.css";
function OrderFilter() {
  const { orderFilters } = useContext(GlobalContext);
  return (
    <div className="bg-white p-3 theme-menu-boxshadow">
      <h3>Filters</h3>
      <h6 className='text-uppercase my-2'>Order Status</h6>
      <ul>
        {orderFilters.status.map((item, i) => {
          return (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={item}
                id={`checkBok-status-${i}`}
              />
              <label
                class="form-check-label text-capitalize"
                for={`checkBok-status-${i}`}
              >
                {item}
              </label>
            </div>
          );
        })}
      </ul>

      <h6 className='text-uppercase my-2'>Order Time</h6>
      <ul>
        {orderFilters.time.map((item, i) => {
          return (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={item}
                id={`checkBok-time-${i}`}
              />
              <label
                class="form-check-label text-capitalize"
                for={`checkBok-time-${i}`}
              >
                {item}
              </label>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderFilter;
