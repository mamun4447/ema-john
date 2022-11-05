import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-slate-700">
        <div className="flex-1 container">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal pr-10 text-white">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/order">Order Review</Link>
            </li>
            <li>
              <Link to="/inventory">Manage Inventory</Link>
            </li>
            {user?.uid ? (
              <button
                onClick={logOut}
                button
                type=""
                className="btn btn-primary cursor-pointer"
              >
                Sign Out
              </button>
            ) : (
              <>
                <li>
                  <Link to="/login">LogIn</Link>

                  <Link to="/signup">SignUp</Link>
                </li>
              </>
            )}

            <li>
              <a href="/">{user?.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
