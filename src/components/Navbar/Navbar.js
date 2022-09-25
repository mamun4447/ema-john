import React from "react";
import logo from "../../images/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-700">
        <div className="flex-1 container">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal pr-10 text-white">
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Order</a>
            </li>
            <li>
              <a href="/">Order Review</a>
            </li>
            <li>
              <a href="/">Manage Inventory</a>
            </li>
            <li>
              <a href="/">LogIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
