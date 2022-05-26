import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Review from "./Pages/Home/Review";
import Support from "./Pages/Home/Support";
import Payment from "./Pages/Payment/Payment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Account from "./Pages/Dashboard/Account";
import PersonalInfo from "./Pages/Dashboard/PersonalInfo";
import InfoChange from "./Pages/Dashboard/InfoChange";
import AllOrders from "./Pages/Purchase/AllOrders";
import PanddingOrder from "./Pages/Purchase/PanddingOrder";
import CancelledOrder from "./Pages/Purchase/CancelledOrder";
import Complate from "./Pages/Purchase/Complate";

import AllUser from "./Pages/Dashboard/AllUser";
import AllProduct from "./Pages/Dashboard/AllProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Purchase from "./Pages/Purchase/Purchase";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/support" element={<Support></Support>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/review"
          element={
            <RequireAuth>
              <Review></Review>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="account" element={<Account />}>
            <Route index element={<PersonalInfo />} />
            <Route path="changeinfo" element={<InfoChange />} />
          </Route>
          <Route path="purchase" element={<Purchase />}>
            <Route index element={<AllOrders></AllOrders>} />
            <Route path="pandding" element={<PanddingOrder />} />
            <Route path="cancelled" element={<CancelledOrder />} />
            <Route path="complate" element={<Complate />} />
          </Route>
          <Route path="review" element={<Review></Review>} />
          <Route path="users" element={<AllUser />} />

          <Route path="addProduct" element={<AllProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
