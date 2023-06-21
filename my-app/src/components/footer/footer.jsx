import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";


function Footer () {
  return (
    <div className= "font-semibold space-x-8 space-around flex bg-footer-form-icon-bg text-white h-16 items-center lg:flex-row lg:justify-between" >
        <div className= "flex space-around ml-4 w-48 lg:ml-60 xl:ml-60">
          <ul className= "flex space-x-4" >
          <li ClassName= "mr-2 lg:mr-4">About Us</li>
          <li ClassName= "ml-0.5" >Contact</li>
          </ul>
      </div>
      <div className= "font-semibold flex w-48 lg:mr-68 xl:ml-45">
      <TwitterLink />
      <FacebookLink />
  
    </div>
    </div>
  );
}
export default Footer

