import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";

function Footer() {
  return (
    <div className="flex w-full font-semibold bg-footer-form-icon-bg text-white h-16 items-center md:w-full md:items-center lg:items-center lg:w-full lg:flex-row">
      <div className="flex space-x-6 w-3/6 md:ml-4 lg:w-3/6 lg:items-center xl:ml-60">
        <ul className="flex ml-6 w-2/6 space-x-4 mr-4 lg:w-2/6 md:space-x-8 xl:space-x-8">
          <li className="mr-2">About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=" w-3/6 flex items-end flex-row md:flex md:flex-row lg:w-3/6 lg:items-end lg:flex lg:flex-row lg:items-center xl:flex xl:flex-row">
          <TwitterLink />
          <FacebookLink />
        </div>
    </div>
  );
}

export default Footer;
