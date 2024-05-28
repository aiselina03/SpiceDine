import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import Appointments from "./pages/Appointment";
import ErrorPage from "./pages/ErrorPage";
import ChefPage from "./pages/ChefPage";
import Faq from "./pages/FAQ";
import Services from "./pages/Services";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminPanel from "./pages/AdminPanel";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivateRoute from "./routes/PrivateRoute";

import MenuEditpanel from "./components/MenuUpdatePanel";
import UserEditPanel from "./components/UserUpdatePanel";
import Account from "./pages/Account";
import Order from "./pages/Orders";
import AccountDetails from "./pages/AccountDetails";
import Addresses from "./pages/Adresses";
import Checkout from "./pages/Checkout";
import BillingAddress from "./components/BillingAddress";
import ShippingAddress from "./components/ShippingAddress";
import MenuPanel from "./components/MenuPanel";
import UserPanel from "./components/UserPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopDetail/:id" element={<ShopDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/chef" element={<ChefPage />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order" element={<Order />} />
          <Route path="/accountDetails" element={<AccountDetails />} />
          <Route path="/adresses" element={<Addresses />} />
          <Route path="/billing" element={<BillingAddress />} />
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route element={<PrivateRoute roles={["admin"]} />}>
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/menuPanel" element={<MenuPanel />} />
            <Route path="/userPanel" element={<UserPanel />} />
            <Route path="/userEditPanel/:id" element={<UserEditPanel />} />
            <Route path="/menuEditPanel/:id" element={<MenuEditpanel />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
