import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export function NavBar() {
  return (
    <div className="flex space-x-7 justify-around xl:justify-between xl:w-4/6 xl:mx-auto xl:space-x-0 items-center py-3">
      <NavLink to={"/"} className="z-10 flex items-center ">
        <img src={Logo} alt="Logo" className="w-16 m-4 xl:ml-0" />
        <span className="text-white text-lg">Soundwave</span>
      </NavLink>
      <ul className="flex space-x-6 ">
        <li>
          <NavLink to={"/Discover"} className="hover:text-nav-hover text-white">
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Join"} className="hover:text-nav-hover text-white">
            Join
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
