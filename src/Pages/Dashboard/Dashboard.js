import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { MdManageAccounts, MdReviews } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import { FaUsers, FaProductHunt } from "react-icons/fa";
import { SiManageiq } from "react-icons/si";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 lg:w-1/5 asid-menu">
        <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="card bg-base-200 shadow p-0">
            <div className="flex">
              <div className="w-3/12 p-2">
                <img
                  className="mr-2"
                  src="https://i.ibb.co/M8pgDX9/1024px-User-avatar-svg.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Hello,</h2>
                <h2 className="">
                  {user?.displayName ? user?.displayName : "Your Name"}
                </h2>
              </div>
            </div>
          </div>
          <hr className="w-full h-1 my-2 bg-primary" />
          <li className="mt-3">
            <div className="flex">
              <span className="text-xl">
                <MdManageAccounts />
              </span>
              <div className="flex justify-between w-full">
                <Link to="/dashboard/account">My Account</Link>
                <span className="text-xl">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex">
              <span className="text-xl">
                <BiPurchaseTag />
              </span>
              <div className="flex justify-between w-full">
                <Link to="/dashboard/purchase">Purchase</Link>
                <span className="text-xl">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex">
              <span className="text-xl">
                <MdReviews />
              </span>
              <div className="flex justify-between w-full">
                <Link to="/dashboard/review">My Reviews</Link>
                <span className="text-xl">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </li>

          {admin && (
            <>
              <li className="mt-3">
                <div className="flex">
                  <span className="text-xl">
                    <FaUsers />
                  </span>
                  <div className="flex justify-between w-full">
                    <Link to="/dashboard/users">All Users</Link>
                    <span className="text-xl">
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <span className="text-xl">
                    <FaProductHunt />
                  </span>
                  <div className="flex justify-between w-full">
                    <Link to="/dashboard/addProduct">Add Product</Link>
                    <span className="text-xl">
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <span className="text-xl">
                    <SiManageiq />
                  </span>
                  <div className="flex justify-between w-full">
                    <Link to="/dashboard/manageProduct">Manage Products</Link>
                    <span className="text-xl">
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
