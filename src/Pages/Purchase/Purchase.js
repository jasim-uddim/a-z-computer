import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useUserOrder from "../../hooks/useUserOrder";
import "./Purchase.css";

const Purchase = () => {
  const [orders] = useUserOrder("Pandding");
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <ul className="menu menu-horizontal w-full bg-base-100">
        <li>
          <Link to="/dashboard/purchase">All</Link>
        </li>
        <li>
          <Link to="/dashboard/purchase/pandding">Pandding</Link>
        </li>
        <li>
          <Link to="/dashboard/purchase/cancelled">Cancelled</Link>
        </li>
        <li>
          <Link to="/dashboard/purchase/complate">Complate</Link>
        </li>
      </ul>
      <div className="overflow-x-auto">
        <table className="table w-full zoom">
          <thead>
            <tr>
              <th className="text-xl">#</th>
              <th className="text-xl">Photo</th>
              <th className="text-xl">Product</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Quantity</th>
              <th className="text-xl">Status</th>
              <th className="text-xl">Update</th>
              <th className="text-xl">Cancelle</th>
              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <Outlet />
        </table>
        <hr className="w-full h-0.5 bg-primary" />
        <div className="flex justify-around w-full bg-slate-200 py-5">
          <p className="text-xl">
            Selected Product: {orders.reduce((n, i) => n + 1, 0)}
          </p>
          <p className="text-xl">
            Product Quantity:
            {orders.reduce((n, { quantity }) => n + quantity, 0)}
          </p>
          <p className="text-xl">
            All Product Price:
            {orders.reduce((n, { quantity, price }) => n + quantity * price, 0)}
          </p>
          <button
            onClick={() => navigate("/payment")}
            className="btn btn-success text-white text-xl"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
