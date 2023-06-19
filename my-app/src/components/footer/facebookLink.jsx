import React from "react";
import "./facebookLink.css";
import facebookLogo from "../../assets/images/facebook.svg";

const FacebookLink = () => {
  return (
    <div className="facebookLink-container">
      {/*<a href="https://es-es.facebook.com/" target="_blank" rel="noopener">*/}
        <img className="facebook-logo"
          src={facebookLogo}
          alt="Logo de la red social Facebook en color blanco a la derecha del pie de pagina de la web"
        />
        <h3 className="link-innertext">Facebook</h3>
         {/*</a>*/}
    </div>
  );
};

export default FacebookLink;
