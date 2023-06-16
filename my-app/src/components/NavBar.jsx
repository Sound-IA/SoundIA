import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export function NavBar() {
  return (
    <div className="flex justify-between items-center w-4/6 mx-auto py-8">
      <Link to={"/"} className="flex items-center z-20">
        <img src={Logo} alt="Logo" className="w-55 mr-4" />
        <span className="text-white font-bold text-2x1">Soundwave</span>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            to={"/Discover"}
            className="hover:text-nav-hover text-white"
          >
            Discover
          </Link>
        </li>
        <li>
          <Link
            to={"/Join"}
            className="hover:text-nav-hover text-white"
          >
            Join
          </Link>
        </li>
      </ul>
    </div>
  );
}
