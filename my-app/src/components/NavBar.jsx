import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <div className="navbar flex-wrap items-center justify-between p-4">
      <div className="flex items-center  flex-shrink-0 mr-6">
        <Link to="/" className="flex items-center ml-20">
          <img src={Logo} alt="Logo" className="w-16 h-14 mr-2" />
          <span className="text-white font-bold">Sound Wave</span>
        </Link>
      </div>
      <div className="flex-none mr-40">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to="../pages/Discover.jsx" className="text-white">
            Discover
          </Link>
            </li>
          <li>
            <Link to="../pages/Join.jsx" className="text-white">Join</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
