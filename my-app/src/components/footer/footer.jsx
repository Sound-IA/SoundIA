import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";

function Footer() {
  return (
    <div className="flex w-full font-semibold bg-footer-form-icon-bg text-white h-16 items-center md:w-full md:items-center lg:items-center lg:flex-row">
      <div className="flex w-6/6  space-x-6 xl:w-4/6 justify-between md:mx-auto  lg:items-center">
        <ul className="flex ml-8  space-x-1 mr-4  md:space-x-8 xl:space-x-8">
          <li className="mr-2">About Us</li>
          <li>Contact</li>
        </ul>
        <div className=" flex items-end flex-row md:flex md:flex-row xl:m-0 xl:w-1/6 xl:flex xl:flex-row">
          <TwitterLink />
          <FacebookLink />
        </div>
      </div>
    </div>
  );
}

export default Footer;
