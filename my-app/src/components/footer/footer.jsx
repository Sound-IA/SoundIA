import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";

function Footer() {
  return (
    <div className="flex z-10 relative w-full font-semibold bg-footer-form-icon-bg text-white h-16 items-center items-center">
      <div className="flex items-center mx-5 justify-between w-full md:mx-auto md:w-4/6 ">
        <ul className="flex">
          <li className="mr-5">About Us</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-end flex-row">
          <TwitterLink />
          <FacebookLink />
        </div>
      </div>
    </div>
  );
}

export default Footer;
