import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";


function Footer () {
  return (
    <div className = "flex w-180 font-semibold bg-footer-form-icon-bg text-white h-16 items-center lg:space-x-78 md:space-x-80 lg:flex-row lg:justify-between" >
        <div className= "flex space-x-4 md:ml-46 lg:ml-60 xl:ml-60">
          <ul className= "flex ml-6 w-48 space-x-2 mr-4 lg:space-x-8 md:space-x-8 xl:space-x-8" >
          <li ClassName= "mr-2 lg:mr-8">About Us</li>
          <li ClassName= "ml-4" >Contact</li>
          </ul>
      </div>
      <div className= "font-semibold flex w-48 md:space-x-8 lg:mx-20 lg:w-108 lg:space-x-2 xl:w-200 lg:flex-row lg:space-between lg: xl:mx-28">
      <TwitterLink />
      <FacebookLink />
  
    </div>
    </div>
  );
}
export default Footer

