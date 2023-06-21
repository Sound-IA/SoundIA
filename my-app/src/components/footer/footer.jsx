import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";

function Footer() {
  return (
    <div className= "w-full font-semibold bg-footer-form-icon-bg text-white h-16 items-center md:w-full md:items-center lg:items-center lg:w-full lg:flex-row">
      <div className="flex space-x-6 w-6/6 md:ml-46 lg:w-6/6 lg:justify-end lg:mr-10 lg:ml-60 lg:items-center xl:ml-60">
        <ul className="flex ml-6 w-2/6 space-x-4 mr-4 lg:space-x-8 lg:w-2/6 md:space-x-8 xl:space-x-8">
          <li ClassName="mr-2 lg:mr-8">About Us</li>
          <li>Contact</li>
        </ul>
        <div className=" w-3/6 flex items-end flex-row md:flex md:flex-row lg:w-4/6 md:ml-89 lg:items-end lg:flex lg:flex-row lg:items-center xl:flex xl:flex-row">
        <TwitterLink />
        <FacebookLink />
        </div>
    </div> 
      </div>
  );
}
export default Footer;
