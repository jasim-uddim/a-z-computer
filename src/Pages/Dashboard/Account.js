import React from "react";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <section className="card h-100%">
      <ul className="menu lg:menu-horizontal w-full ">
        <li>
          <Link to="/dashboard/account" className="text-secondary text-xl">
            Personal Information
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/account/changeinfo"
            className="text-secondary text-xl"
          >
            Change Information
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </section>
  );
};

export default Account;
