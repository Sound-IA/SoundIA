import React from "react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";


function Footer () {
  return (
    <div className= "font-semibold justify-around flex items-center bg-footer-form-icon-bg text-white h-16" >
        <div className= "flex h-6 ">
          <ul className= "flex ">
          <li className= "mr-4">About Us</li>
          <li >Contact</li>
          </ul>
      </div>
      <div className= "flex space-x-4">
      <TwitterLink />
      <FacebookLink />
      </div>
    </div>
  );
}
export default Footer

