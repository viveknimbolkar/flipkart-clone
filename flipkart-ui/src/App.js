import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Account from "./account/Account";
import Coupons from "./account/Coupons";
import Logout from "./account/Logout";
import NotFound404 from "./pages/NotFound404";
import Orders from "./account/Orders";
import PlusZone from "./account/PlusZone";
import Supercoin from "./account/Supercoin";
import Wishlist from "./account/Wishlist";
import GiftCard from "./account/GiftCard";
import Notifications from "./account/Notifications";
import Address from "./account/Address";
import GlobalProvider from "./context/GlobalState";
import SavedUPI from "./account/SavedUPI";
import Search from "./pages/Search";
import Product from "./pages/Product";
import APIProvider from "./context/api";
import Cart from "./account/Cart";
import LoginRequired from "./components/LoginRequired";
import SellerLogin from "./seller/sellerLogin";
import SellerRegister from "./seller/sellerRegister";
import SellerPasswordCreation from "./seller/sellerPasswordCreation";
import SellerHome from "./seller";
function App() {
  return (
    <GlobalProvider>
      <APIProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <LoginRequired>
                <Account />
              </LoginRequired>
            }
          />
          <Route
            path="/product"
            element={
              <LoginRequired>
                <Product />
              </LoginRequired>
            }
          />
          <Route
            path="/account/address"
            element={
              <LoginRequired>
                <Address />
              </LoginRequired>
            }
          />
          <Route
            path="/account/coupons"
            element={
              <LoginRequired>
                <Coupons />
              </LoginRequired>
            }
          />
          <Route
            path="/account/giftcard"
            element={
              <LoginRequired>
                <GiftCard />
              </LoginRequired>
            }
          />
          <Route path="/account/logout" element={<Logout />} />
          <Route
            path="/account/orders"
            element={
              <LoginRequired>
                <Orders />
              </LoginRequired>
            }
          />
          <Route
            path="/account/pluszone"
            element={
              <LoginRequired>
                <PlusZone />
              </LoginRequired>
            }
          />
          <Route
            path="/account/cart"
            element={
              // <LoginRequired>
              <Cart />
              // </LoginRequired>
            }
          />
          <Route
            path="/account/vpadetails"
            element={
              <LoginRequired>
                <SavedUPI />
              </LoginRequired>
            }
          />
          <Route
            path="/account/supercoin"
            element={
              <LoginRequired>
                <Supercoin />
              </LoginRequired>
            }
          />
          <Route
            path="/account/wishlist"
            element={
              <LoginRequired>
                <Wishlist />
              </LoginRequired>
            }
          />
          <Route
            path="/account/notifications"
            element={
              <LoginRequired>
                <Notifications />
              </LoginRequired>
            }
          />
          <Route
            path="/account/giftcard"
            element={
              <LoginRequired>
                <GiftCard />
              </LoginRequired>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/seller" element={<SellerHome />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/seller/passwordCreation" element={<SellerPasswordCreation />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </APIProvider>
    </GlobalProvider>
  );
}

export default App;
