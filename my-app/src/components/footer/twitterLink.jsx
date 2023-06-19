import React from "react";
import "./twitterLink.css";
import twitterLogo from "../../assets/images/twitter.svg";

const TwitterLink = () => {
    return (
        <div className="twitterLink-container">
            {/*<a href="https://twitter.com/?lang=es" rel="noopener" target="_blank" >*/}
            <img className="logo-twitter" src= {twitterLogo} alt="Logo de la red social Twitter en color blanco a la derecha del pie de pagina de la web" />
            <h3 className = "link-innertext">Twitter</h3>
            {/*</a>*/}
        </div>

)}

export default TwitterLink

