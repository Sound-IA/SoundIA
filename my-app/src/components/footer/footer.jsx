import React from "react";
import "./footer.css";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-container-left-div">
      <p className="footer-anchorText">About Us</p>
      <p className="footer-anchorText">Contact</p>
      </div>
      <div className="footer-container-right-div">
      <TwitterLink />
      <FacebookLink />
      </div>
    </div>
  );
};

export default Footer;
