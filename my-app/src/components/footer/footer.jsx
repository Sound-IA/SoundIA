import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";


function Footer () {
  return (
    <div className= "font-semibold space-x-8 space-around flex bg-footer-form-icon-bg text-white h-16 items-center lg:space-x-78 md:space-x-80 lg:flex-row lg:justify-between" >
        <div className= "flex space-around ml-4 w-48 md:ml-46 lg:ml-60 xl:ml-60">
          <ul className= "flex space-x-4" >
          <li ClassName= "mr-2 lg:mr-4">About Us</li>
          <li ClassName= "ml-0.5" >Contact</li>
          </ul>
      </div>
      <div className= "font-semibold flex w-48  md:place-content-around lg:mx-68 lg:w-200 xl:w-200 lg:flex-row lg:space-between lg: xl:mx-28">
      <TwitterLink />
      <FacebookLink />
  
    </div>
    </div>
  );
}
export default Footer

